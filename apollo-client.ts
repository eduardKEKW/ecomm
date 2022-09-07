import { ApolloClient, defaultDataIdFromObject, gql, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { userLikesVar } from 'apollo/Reactives';
import { Product, UserActivityDocument, UserActivityQuery, UserActivityQueryVariables } from 'Graphql/generated/graphql';
import { getApiImage, getInitials } from 'helpers/helpers';
import { LOCAL_ACCESS_TOKEN_NAME } from 'helpers/local';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;
const ISSERVER = typeof window === "undefined";

const authLink = setContext((_, { headers }) => {
  let accessToken = '';
  
  if(! ISSERVER) { // get the authentication token from local storage if it exists
    accessToken = localStorage.getItem(LOCAL_ACCESS_TOKEN_NAME);
  }

  // return the headers to the context so httpLink can read them
  if(_.operationName == 'user' && ! accessToken) {
    throw new Error('Unauthorized');
  } 

  return {
    headers: {
      ...headers,
      authorization: accessToken ? accessToken : ''
    }
  }
});

function createApolloClient() { 
  return new ApolloClient({
    credentials: 'include', 
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(new HttpLink({
      uri: process.env.NEXT_PUBLIC_BAGISTO_GRAPHQL,
      credentials: 'include'
    })),
    cache: new InMemoryCache({
      dataIdFromObject(responseObject) {
        switch (responseObject.__typename) {
          case 'Product': return `Product:${responseObject.id ?? Math.random()}:${responseObject.sku}`;
          default: return defaultDataIdFromObject(responseObject);
        }
      },
      typePolicies: {
        Category: {
          keyFields: ["slug"],
          fields: {
            path: {
              read(slug, { readField }) {
                return `/category/${readField('id')}?n=${readField('slug')}`;
              },
            }
          }
        },
        userActivityType: {
          keyFields: ["productId"],
          fields: {
            productId: {
              read(_, { args, variables }) {
                return variables?.input?.productId;
              }
            }
          }
        },
        ProductFlat: {
          fields: {
           urlKey(urlKey, { readField, storeFieldName, storage }) {
              const stored = storage[storeFieldName];
              return stored ? stored : storage[storeFieldName] = `/${readField('id')}?n=${urlKey}`;
            }, 
            qty: {
              read(_, { readField, cache }) {
                const { inventories = [] } = cache.readFragment<Product>({
                  id: `Product:${readField("id")}`,
                  fragment: gql`
                    fragment product on Product {
                      inventories {
                        qty
                      }
                    }
                  `,
                }) ?? {};

                return inventories?.find(inv => !! inv.qty)?.qty ?? 0;
              }
            },
            mainCategory: {
              read(_, { readField, cache, toReference }) {
                const { categories = [] } = cache.readFragment<Product>({
                  id: `Product:${readField("id")}`,
                  fragment: gql`
                    fragment product on Product {
                      categories {
                        name
                        urlPath
                        slug
                        id
                      }
                    }
                  `,
                }) ?? {};

                const mainCat = categories[categories.length - 1];

                if(! mainCat?.slug) return null;

                return toReference({
                  __typename: 'Category',
                  slug: mainCat.slug,
                })
              }
            },
          },
        },
        Image: {
          fields: {
            path: {
              read(path) {
                return getApiImage({ url: path })
              }
            }
          }
        },
        Review: {
          fields: {
            initials: {
              read(_, { readField }) {
                return getInitials(readField('customerName'));
              }
            },
            userLike: {
              read(_, { readField, cache }) {
                const { userActivity } = cache.readQuery<UserActivityQuery, UserActivityQueryVariables>({
                  query: UserActivityDocument,
                  variables: { // Provide any required variables here.  Variables of mismatched types will return `null`.
                    input: {
                      productId: +readField('productId'),
                    }
                  },
                }) ?? {};

                const reviewId = readField('id');
                
                return !! userLikesVar() ?  userLikesVar().some(({ reviewId: id }) => id == reviewId) : false;
              }
            }
          }
        },
        ProductAttributeValue: {
          keyFields: false,
          fields: {
            value: {
              read(_, { readField }) {
                return readField('textValue')
                || readField('booleanValue')
                || readField('integerValue')
                || readField('floatValue')
                || readField('dateTimeValue')
                || readField('dateValue');
              }
            }
          }
        }
      },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
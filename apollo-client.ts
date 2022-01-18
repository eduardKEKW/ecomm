import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client/core";

import { setContext } from '@apollo/client/link/context';
import { makeVar, NormalizedCacheObject } from "@apollo/react-hooks";
import { ACTIVITY_QUERY } from "apollo/querys/Activity.query";
import { userLikesVar } from "apollo/Reactives";
import { useMemo } from "react";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  const token = "VYdNejhr4lt3mKNGo7dDF0ATwcoKyzzN0Rj2d5r8qBvzfuUjpfY80YUSbFiy";
  // return the headers to the context so httpLink can read them
  if(_.operationName == "user" && ! token) {
    throw new Error("Unauthorized");
  }
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const asyncRead = (fn, defaultValue) => {
  return (_, args) => {
      if (!args.storage.var) {
          args.storage.var = makeVar(defaultValue)
          fn(_, args).then(
              data => {
                  args.storage.var(data)
              }
          )
      }
      return args.storage.var()
  }
}

function createApolloClient() { 
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(new HttpLink({
      uri: "http://localhost/graphql",
    })),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            comments: {
              keyArgs: ['productId'],
            }
          }
        },
        Comment: {
          fields: {
            userLike: (_, { variables, readField, args }) => {
              return !! userLikesVar().find(({ comment_id }) => +comment_id == +readField('id'));
            },
            userOwned: asyncRead(async (_, { variables, readField }) => {
              const data = await apolloClient.query({
                  query: ACTIVITY_QUERY,
                  variables: {
                    productId: variables.productId
                  }
              });

              return !! (data?.data?.activity?.comment?.id == +readField('id'));
          }, false)
          }
        }
      }
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
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
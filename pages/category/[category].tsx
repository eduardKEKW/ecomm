import { initializeApollo } from "apollo-client"
import Sidebar from "components/Category/Sidebar"
import Resource from "components/helpers/Resource"
import Card from "components/Product/Card"
import { Layout } from "components/styled/Layouts/Pages/Category"
import Title from "components/Title"
import { CategoryDocument, CategoryQuery, CategoryQueryVariables, GetProductListingQueryVariables, SortValues, useCategoryLazyQuery, useGetProductListingLazyQuery } from "Graphql/generated/graphql"
import { useFavorite } from "hooks/useFavorite.hook"
import { productsPerPageOptions, productsSortingOptions } from "hooks/useProducts.hook"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextRouter, useRouter } from "next/router"
import { FC, useEffect, useState } from "react"
import produce from "immer";
import { SKELETONS } from "components/helpers/Skeleton"
import { DefaultLayout } from "pages/_app"
import { deepMerge } from "helpers/helpers"

interface Props {}

const Category: FC & { Layout: FC<{}>; } = function ({ }: Props) {
    const [{ items: favoriteItems }, setFavoriteItems]          = useFavorite();
    const router                                                = useRouter();
    const [variables, setVariables]                             = useState<GetProductListingQueryVariables>({   
        first: 10,
        page: 1,
        input: {
            categoryId: null,
            attributes: []
        }
    });
    const [getCategory, { data: categoryData, loading, ...rest }] = useCategoryLazyQuery({
        notifyOnNetworkStatusChange: true
    });
    const [getProducts, { loading: loadingProducts, data }] = useGetProductListingLazyQuery({
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "cache-and-network"
    });
    
   useEffect(() => {
        if(variables?.input?.categoryId) {
            getProducts({ variables });
        }
    }, [variables]); 

    useEffect(() => {
        if(router.isReady) {
            setVariables(produce(variables, (draft) => {
                deepMerge(draft, getUrlParams({ router }));
                draft.input.categoryId = +router?.query?.category;
            }));

            getCategory({
                variables: {  id: router?.query?.category?.toString() }
            });
        }
    }, [router.isReady])

    if(loading || router.isFallback || ! categoryData) return <>{SKELETONS['category']('category', 'category')}</>;

    return (    
        <Layout>
            <Title name={categoryData.category.name} gridArea="title" />

            <Sidebar 
                onFilterChange={(data) => {
                    if(data.type == 'PRICE') {
                         return setVariables(produce(variables, (draft) => {
                            const [min, max] = data.value.split('-');
                            draft.input.price = {};

                            if(data.checked) {
                                draft.input.price.min = +min;
                                draft.input.price.max = +max;
                            }
                        }))
                    }

                    if(data.type == 'RATING') {
                        return setVariables(produce(variables, (draft) => {
                            if(data.checked) {
                                draft.input.reviews = +data.value;
                            } else {
                                delete draft.input.reviews;
                            }
                        }));
                    }

                    setVariables((vars) => {
                        return produce(vars, (draft) => {    
                            let {
                                code: attrCode = data.code,
                                values = []
                            } = draft.input.attributes.find(v => v.code == data.code) ?? {};
    
                            if(data.checked) {
                                values.push(data.value);
                            } else {
                                values = values.filter((v) => v != data.value)
                            }
    
                            const newAttributes = draft.input.attributes.filter((v) => v.code != data.code);
    
                            if(values.length) {
                                newAttributes.push({
                                    code: attrCode, 
                                    values
                                })
                            }
    
                            draft.input.attributes = newAttributes;
                        })
                    })
                }}
                category={categoryData.category} 
                gridArea="side" 
                urlParamsPrefix="attribute"
            />

            <Resource 
                onPageChange={(newPage) => {
                    setVariables(produce(variables, (draft) => {
                        draft.page = +newPage;
                    }))
                }}
                onPerPageChange={(newPerPage) => {
                    setVariables(produce(variables, (draft) => {
                        draft.first = +newPerPage;
                    }))
                }}
                onSortingChange={(v) => {
                    setVariables(produce(variables, (draft) => {
                        draft.input.sort = v as SortValues;
                    }))
                }}
                columns={4}
                rows={3}
                loading={loadingProducts} 
                pagination={data?.getProductListing?.paginatorInfo}
                gridArea="main"
                sorting={productsSortingOptions}
                perPage={productsPerPageOptions}
            >
                <>
                    {
                        data?.getProductListing?.data?.map(({
                            productFlat,
                            id  
                        }) => {
                            return (
                                <Card
                                    key={id}
                                    product={productFlat}
                                    isFavorited={
                                        favoriteItems &&
                                        !!favoriteItems.find(({ id }) => id == productFlat?.id)
                                    }
                                    skeletonLoading={!productFlat}
                                    setFavoriteItems={setFavoriteItems}
                                />
                            )
                        })
                    }
                </>
            </Resource>
        </Layout>
    )
}


Category.Layout = DefaultLayout;

export default Category;

const getUrlParams = ({ router }: { router: NextRouter }) => {
    return Object
        .entries(router.query)
        .reduce((acc: GetProductListingQueryVariables, [key, value]) => {
            const [prefix, code] = key.split('_');

        if(code == "price") {
            const [min, max] = value.toString().split('-');

            acc.input.price = {
                min: +min,
                max: +max
            }

            return acc;
        }

        if(code == "rating") {
            acc.input.reviews = +value;

            return acc;
        }

        if(prefix == "attribute") {
            acc.input.attributes.push({
                code,
                values: value.toString().split(',')
            })
        }

        return acc;
    }, { input: { attributes: [] } });
}

export const getStaticPaths: GetStaticPaths = async (product) => {
    return {
        paths: [
            {  params: { category: '8' } },
            {  params: { category: '3' } }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context)  => {
    const apolloClient = initializeApollo();
        
    const [{ data }] = await Promise.all([
        apolloClient.query<CategoryQuery, CategoryQueryVariables>({
            query: CategoryDocument,
            variables: {
                id: context.params.category.toString()
            }
        })
    ]);

    return {
        props: {
            apolloCache: apolloClient.cache.extract(),
            title: data?.category?.name
        }   
    }
}

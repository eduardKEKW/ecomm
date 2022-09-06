import { initializeApollo } from '../apollo-client';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Carousel from 'components/Carousel';
import Image from 'next/image';
import Breadcrumbs from 'components/Product/Breadcrumbs';
import Title from 'components/Title';
import Info from 'components/Product/Info';
import Skeleton, { SKELETONS } from 'components/helpers/Skeleton';
import { SActions, SAttributes, SDescription, SProduct, SProductGrid } from 'components/styled/Page/Product';
import ButtonMain from 'components/buttons/Main';
import { faHistory, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import useCart from 'hooks/useCart.hook';
import { faFile, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFavorite } from 'hooks/useFavorite.hook';
import ProductSlider from 'components/Product/ProductSlider';
import Comments from 'components/Product/Comments/Comments';
import useProduct from 'hooks/useProduct';
import { DefaultLayout } from './_app';
import { ProductDocument, ProductQuery, ProductQueryVariables } from 'Graphql/generated/graphql';

interface Props {}

const Product: FC & { Layout: FC<{}>; } = function ({}: Props) {
    const [loading, setLoading]                                 = useState<boolean>(true);
    const router                                                = useRouter()
    const [{ loading: cartLoading }, addToCart]                 = useCart()
    const [{ loading: favoriteLoading, items }, addToFavorite]  = useFavorite()
    const [variables, setVariables]                             = useState<Parameters<typeof useProduct>[0]>(() => ({
        variables: {
            id: router?.query?.product?.toString()
        }
    }))
    const { 
        loading: loadingProducts,
        product,
    } = useProduct(variables)

    useEffect(() => {
        setVariables({
            variables: {
                id: (router?.query?.product?.toString() as string)
            }
        })
    }, [router?.query?.product])

    useEffect(() => {
        setLoading(! product || router.isFallback || loadingProducts);
    }, [router.isFallback, loadingProducts, product])

    if(loading) return <>{SKELETONS['product']('product', 'product')}</>

    return (
        <SProductGrid>
            <Skeleton loading={loading} name="product" gridArea="product">
                <SProduct gridArea="product">
                    <Breadcrumbs gridArea="breadcrumbs" paths={product?.productFlat?.mainCategory?.breadcrumbs} />

                    <Title reverse={true} background='white' gridArea="title" description={`Product CODE: ${product?.id}`} name={product.productFlat.name} style={{ 
                        fontSize: "1.5rem"
                    }} />

                    <Carousel gridArea="slider" perPage={1} slidesCount={product?.images?.length ?? 5}>
                        <>
                            { 
                                product?.images?.map(({ path }) => {
                                    return (
                                        <div key={path} style={{ height: "100%" }}>
                                            <Image
                                                src={path}
                                                width={500}
                                                height={500}
                                                objectFit="cover"
                                                alt={path}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </>
                    </Carousel>

                    <Info product={product?.productFlat} gridArea="info" />

                    <SActions gridArea="actions">
                        <section>
                            <ButtonMain
                                loading={cartLoading}
                                border="red" 
                                icon={faShoppingCart} 
                                style={{ 
                                    width: "15rem",
                                    height: "3rem"
                                }}
                                onClick={() => addToCart({
                                   detach: false,
                                   productId: product.id,
                                   qty: 1
                                })} 
                            >
                                Add to Cart
                            </ButtonMain>

                            <ButtonMain
                                reverse={true}
                                loading={favoriteLoading} 
                                icon={faHeart as IconDefinition} 
                                disable={!! items.find(({ id }) => id == product.id)}
                                style={{ 
                                    width: "15rem",
                                    height: "3rem"
                                }}
                                onClick={() => addToFavorite({
                                    detach: false,
                                    productId: product.id
                                })} 
                            >
                                Add to Favorite
                            </ButtonMain>

                            <section>
                                <span><i><FontAwesomeIcon icon={faHistory} /></i><p>30 days refund</p> </span>
                                <span><i><FontAwesomeIcon icon={faFile as IconDefinition} /></i> <p>Guarantee include</p> </span>
                            </section>
                        </section>
                    </SActions>
                </SProduct>
            </Skeleton>

            {
                ! loading && <>      
                    <SAttributes gridArea="attributes">
                    
                        <Title name="Product Attributes" />
                        <ul>
                            {   
                                product.attributeValues.filter(attr => !! attr?.value && attr.attribute.isVisibleOnFront).map((attr) => {
                                    return (
                                        <li key={attr.id}>
                                            <span>{attr?.attribute?.adminName}: </span><p>{attr?.value}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </SAttributes>

                    <SDescription gridArea="description">
                        <Title name="Description" />
                        <div dangerouslySetInnerHTML={{__html: product.productFlat.description}} />
                    </SDescription>

                    <Comments gridArea="comments" productId={+product.id} />

                    <ProductSlider 
                        title="More Like" 
                        gridArea="recommended" 
                        size={5} 
                        name="Related Products" 
                        products={product.relatedProducts.map(p => p.productFlat)} 
                    />
                </>
            }
        </SProductGrid>
    )
}

Product.Layout = DefaultLayout;

export default Product;

export const getStaticPaths: GetStaticPaths = async (product) => {
    return {
        paths: [
            {  params: { product: '8' } },
            {  params: { product: '2' } },
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context)  => {
    const apolloClient = initializeApollo();
    
    const [{ data }] = await Promise.all([
        apolloClient.query<ProductQuery, ProductQueryVariables>({
            query: ProductDocument,
            variables: {
                id: context.params.product.toString()
            }
        })
    ]);

    if(! data?.product) {
        // redirect
    }

    return {    
        props: {
            apolloCache: apolloClient.cache.extract(),
            title: `${data?.product?.productFlat?.name}`
        }
    };
}

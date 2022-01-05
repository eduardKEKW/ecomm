import { initializeApollo } from '../apollo-client';
import { ProductInterface, PRODUCT_QUERY } from 'apollo/querys/Product.query';
import useProduct from 'hooks/useProduct.hook';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Carousel from 'components/Carousel';
import Image from 'next/image';
import Breadcrumbs from 'components/Product/Breadcrumbs';
import Title from 'components/Title';
import Info from 'components/Product/Info';
import Skeleton from 'components/helpers/Skeleton';
import { Grid, SActions, SAttributes, SDescription, SProduct, SReview } from 'components/styled/Page/Product';
import ButtonMain from 'components/buttons/Main';
import { faHistory, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useCart from 'hooks/useCart.hook';
import { faFile, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFavorite } from 'hooks/useFavorite.hook';
import ProductSlider from 'components/Product/ProductSlider';
import Comments from 'components/Product/Comments/Comments';

interface Props {}

export default function Product ({}: Props) {
    const router                                                = useRouter()
    const [product, setProduct]                                 = useState<ProductInterface | null>(null)
    const [loadProducts, { loading, products, called }]         = useProduct()
    const [{ loading: cartLoading }, addToCart]                 = useCart()

    const [{ loading: favoriteLoading, items }, addToFavorite]  = useFavorite()

    useEffect(() => {
        if(router?.query?.product) {
            loadProducts({
                variables: {
                    data: {
                        filters: {
                            slug: (router.query.product as string)
                        }
                    },
                    includeBreadcrumbs: true,
                    includeGallery: true
                }
            })
        }
    }, [router.query])

    useEffect(() => {
        if(called && ! loading && products) {
            setProduct(products[0] ?? null)
        }
    }, [called, loading, router.isFallback])

    if(! product) return <></>;

    return (
        <Skeleton loading={loading} name="product">
            <Grid>
                <SProduct gridArea="product">
                    <Breadcrumbs gridArea="breadcrumbs" paths={['Home', 'something', 'something2']} />

                    <Title gridArea="title" description={`Product CODE: ${product.id}`} name={product?.name} style={{ 
                            fontSize: "1.5rem"
                    }} />

                    <Carousel gridArea="slider" perPage={1} slidesCount={product?.gallery?.length ?? 5}>
                        <>
                            { 
                                product?.gallery.map((path) => {
                                    return (
                                        <div key={path} style={{ height: "100%" }}>
                                            <Image
                                                src={path}
                                                width={500}
                                                height={500}
                                                objectFit="cover"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </>
                    </Carousel>

                    <Info product={product} gridArea="info" />

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
                                    variables: {
                                        items: [product.id],
                                        qty: 1
                                    }
                                })} 
                            >
                                Add to Cart
                            </ButtonMain>

                            <ButtonMain
                                reverse={true}
                                loading={favoriteLoading} 
                                icon={faHeart} 
                                disable={!! items.find(({ id }) => id == product.id)}
                                style={{ 
                                    width: "15rem",
                                    height: "3rem"
                                }}
                                onClick={() => addToFavorite({
                                    variables: {
                                        items: [product.id],
                                        detach: false
                                    }
                                })} 
                            >
                                Add to Favorite
                            </ButtonMain>

                            <section>
                                <span><i><FontAwesomeIcon icon={faHistory} />   </i>   <p>Retur gratuit in 30 de zile</p>  </span>
                                <span><i><FontAwesomeIcon icon={faFile} />      </i>   <p>Garantie inclusa</p>             </span>
                            </section>
                        </section>
                    </SActions>
                </SProduct>

                <SAttributes gridArea="attributes">
                    <Title name="Product Attributes" />
                    <ul>
                        <li>
                            <span>Brand: </span><p>{product?.brand}</p>
                        </li>
                        <li>
                            <span>Manufacturer: </span><p>{product?.manufacturer}</p>
                        </li>
                        <li>
                            <span>Colors: </span><p>{product?.color?.join(' or ')}</p>
                        </li>
                    </ul>
                </SAttributes>

                <SDescription gridArea="description">
                    <Title name="Description" />
                    {product.description}
                </SDescription>

                <ProductSlider title="More Like" gridArea="recommended" category={product.category} size={5} />

                <Comments gridArea="comments" productId={product.id} />
            </Grid>
        </Skeleton>
    )
}

export const getStaticPaths: GetStaticPaths = async (product) => {
    return {
        paths: [
            {  params: { product: 'ambesonne' } }
        ],
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context)  => {
    const apolloClient = initializeApollo();

    const { data } = await apolloClient.query({
        query: PRODUCT_QUERY,
        variables: {
            data: {
                filters: {
                    slug: context.params.product
                }
            },
            includeBreadcrumbs: true,
            includeGallery: true,
            includeComments: true
        }
    });

    return {
        props: {
            apolloCache: apolloClient.cache.extract(),
            title: 'Ecomm | Product'
        }
    };
}
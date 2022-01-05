import Carousel from 'components/Carousel'
import { SProductSlider } from 'components/styled/ProductSlider'
import Title from 'components/Title';
import { slug } from 'helpers/helpers';
import { useFavorite } from 'hooks/useFavorite.hook';
import useProduct from 'hooks/useProduct.hook'
import React from 'react'
import Card from './Card';

interface Props {
    gridArea?: string
    category: string
    size?: number
    title?: string
}

function ProductSlider({ gridArea, category, size = 15, title }: Props) {
    const [{ items: favoriteItems }, setFavoriteItems]      = useFavorite();
    const [loadProducts, { loading, products: data }]       = useProduct({
        lazy: false,
        variables: {
            data: {
                filters: {
                    category
                },
                pagination: {
                    from: 0,
                    size: size
                }
            }
        }
    });

    const perPage = 6;
    const products = (!! data?.length) ? data : new Array(6).fill(0);

    return (
        <SProductSlider gridArea={gridArea}>
            
            <Title name={title || category} description={title || `${category} Category`} href={slug(category)} />

            <Carousel perPage={perPage} slidesCount={data?.length || size} height="22rem" navigation="outside">
                <>
                    {
                        products.map((product, index) => {
                            return (
                                <Card 
                                    key={index} 
                                    product={product} 
                                    isFavorited={favoriteItems && !! favoriteItems.find(({ id }) => id == +product?.id)}
                                    loading={!data?.length} 
                                    setFavoriteItems={setFavoriteItems} 
                                />
                            )
                        })
                    }
                </>
            </Carousel>
        </SProductSlider>
    )
}

export default ProductSlider

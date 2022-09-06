import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import Link from 'components/helpers/LinkCustom';
import { SKELETONS } from 'components/helpers/Skeleton';
import { SProductCard, SProductCardBody, SProductCardContent, SProductCardHeader, STagRibboneAndOutline, STags } from 'components/styled/Product/Card'
import { getProductThumbnail, shortenString } from 'helpers/helpers';
import { setFavoriteInterface } from 'hooks/useFavorite.hook';
import Image from "next/image";
import React, { useEffect, useMemo, useState } from 'react'
import Price from './Price';
import Rating, { TagInterface } from './Rating';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import useCart from 'hooks/useCart.hook';
import Loading from 'components/helpers/Loading';
import { theme } from 'components/styled/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ProductFlatFragmentFragment } from 'Graphql/generated/graphql';

interface Props {
    product: ProductFlatFragmentFragment   
    skeletonLoading: boolean
    setFavoriteItems: (options: setFavoriteInterface) => void
    isFavorited: boolean
}

function Card({ product, skeletonLoading, setFavoriteItems, isFavorited }: Props) {
    const [favorited, setFavorite]  = useState<boolean>(isFavorited);
    const [loading, setLoading]     = useState<boolean>(false);
    const [_, mutateCartItems]      = useCart();

    useEffect(() => setFavorite(isFavorited) ,[isFavorited])

    const addToCart = (id: string) => {
        setLoading(true);
        mutateCartItems({
            detach: false,
            productId: product.id,
            qty: 1
        }).finally(() => {
            setLoading(false);
        });
    }

    const addToFavorite = () => {
        setFavorite((v) => ! v)
        setFavoriteItems({
            detach: favorited,
            productId: product.id
        })
    }

    const tags = useMemo<TagInterface[]>(() => {
        return product && [
            {
                color: theme.colors.red,
                name: 'stock',
                condition: product.qty === 0,
                value: 'No Stock'
            },
            {
                condition: !! product.specialPrice,
                color: theme.colors.red,
                name: 'price',
                value: `-${product.specialPrice}%`
            }
        ]
    }, [product]);

    if(skeletonLoading) return SKELETONS["card"]("card");

    return (
        <SProductCard title={product.name}>
            <SProductCardContent>
                <SProductCardHeader animate={favorited}>
                    <div>
                        <Link href={product.urlKey}>
                            <Image 
                                src={getProductThumbnail({ path: product.thumbnail })}
                                layout="fill" 
                                objectFit="contain" 
                                alt={product?.name} 
                            />
                        </Link>
                    </div>

                    <div className="favorite" onClick={() => addToFavorite()}>
                        {
                            favorited 
                                ?
                                    <i style={{ color: "red" }}><FontAwesomeIcon icon={faHeartFull} /></i>
                                :
                                    <i><FontAwesomeIcon icon={faHeart as IconProp} /></i> 
                        }
                    </div>
                </SProductCardHeader>

                <STags>
                    {
                        tags.filter(tag => !! tag.condition).map(tag => 
                            <STagRibboneAndOutline key={tag.name} color={tag.color}>
                                <span>{tag.value}</span>
                            </STagRibboneAndOutline>
                        )
                    }
                </STags>

                <SProductCardBody disable={loading}>

                    <Link href={product.urlKey}>
                        <span title={product.name} className="name">
                            {shortenString({ str: product.name, word: true, count: 15, safeMax: 60 })}
                        </span>
                    </Link>

                    <span className="category" >
                        {!! product?.mainCategory?.slug && <Link href={product?.mainCategory?.path}>{product?.mainCategory?.name}</Link> }
                    </span> 
                    
                    <div className="rating">
                        <Rating product={product} />
                    </div>

                    <div className="info" onClick={() => addToCart(product.id)}>
                        <div className='info_container'>
                            <Loading loading={loading}>
                                <>
                                    <div className='add_to_cart' >
                                        <FontAwesomeIcon icon={faCartArrowDown} />
                                    </div>

                                    <div className='product_price' >
                                        <Price price={product.price} specialPrice={product.minPrice} showDiscount={product.minPrice !== product.price} color="white" style={{ 
                                            justifyContent: "center"
                                        }} />
                                    </div>
                                </>
                            </Loading>
                        </div>
                    </div>

                </SProductCardBody>
            </SProductCardContent>
        </SProductCard>
    )
}

export default React.memo(Card)
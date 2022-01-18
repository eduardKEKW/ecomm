import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductInterface } from 'apollo/querys/Product.query';
import Link from 'components/helpers/LinkCustom';
import Skeleton from 'components/helpers/Skeleton';
import { SProductCard, SProductCardBody, SProductCardHeader } from 'components/styled/Product/Card'
import { shortenString } from 'helpers/helpers';
import { options } from 'hooks/useFavorite.hook';
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import Price from './Price';
import Rating from './Rating';

interface Props {
    product: ProductInterface
    loading: boolean
    setFavoriteItems: (options?: options) => any
    isFavorited: boolean
}

function Card({ product, loading, setFavoriteItems, isFavorited }: Props) {
    const [favorited, setFavorite]          = useState<boolean>(isFavorited)
    const [selectedColor, setSelectedColor] = useState<number | null>(0)

    useEffect(() => setFavorite(isFavorited) ,[isFavorited])

    return (
        <Skeleton loading={loading} name="card">
            <>
                <SProductCard>
                    <SProductCardHeader animate={favorited}>
                        <div>
                            <Link href={`/${product.slug}`}>
                                <Image src={product.thumb} layout="fill" objectFit="contain" alt={product.thumb} />
                            </Link>
                        </div>

                        <div id="favorite" onClick={() => {
                                setFavorite((v) => ! v)
                                setFavoriteItems({
                                    variables: {
                                        items: [product.id],
                                        detach: favorited
                                    }
                                })
                            }
                        }>
                            {
                                favorited 
                                ?
                                    <i style={{ color: "red" }}><FontAwesomeIcon icon={faHeartFull} /></i>
                                :
                                    <i><FontAwesomeIcon icon={faHeart} /></i> 
                            }
                        </div>

                        {
                            ! product.disponibility && (
                                <>
                                    <div id="header" />
                                    <div id="stoc" >{product.disponibility ? `In Stock` : `Out Of Stock`}</div>
                                </>
                            )
                        }
                    </SProductCardHeader>

                    <SProductCardBody>
                        <Link href="#">
                            <span id="name">
                                {shortenString({ str: product.name, word: true, count: 5, safeMax: 40 })}
                                
                            </span>
                        </Link>

                        <span id="category" ><Link href="#">{product.category}</Link></span>
                        
                        <div id="rating">
                            <Rating product={product} tags={['discount']} />
                        </div>

                        <div id="colors">
                            {
                                product.color && (
                                    <>
                                        <span>colors</span>
                                        <div>
                                            {
                                                product.color.map((color, index) => {
                                                    return (
                                                        <div 
                                                            onClick={() => setSelectedColor(index)}
                                                            style={{
                                                                border: selectedColor == index ? `solid 1px ${color}` : ""
                                                            }} 
                                                            key={index}
                                                        >
                                                            <div style={{
                                                                background: color
                                                            }}></div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                        </div>

                        <div id="price">
                            <Price price={product.price} discount={product.discount} showDiscount={true} color="white" />
                        </div>

                        <div id="add">
                        </div>
                    </SProductCardBody>
                </SProductCard>
            </>
        </Skeleton>
    )
}

export default Card

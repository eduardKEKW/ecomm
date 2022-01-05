import { SkeletonProductInterface } from 'Interfaces/Product.interface'

import Image from 'next/image';
import Link from 'components/helpers/LinkCustom';
import Price from './Price';
import React from 'react'
import Skeleton from 'components/helpers/Skeleton';
import { shortenString } from 'helpers/helpers';
import styles from 'styles/components/search.module.scss';

interface Props {
    product: SkeletonProductInterface
    parents: number[]
}

function Suggestion({ product, parents }: Props) {
    const {
        name = "",
        id,
        category,
        loading,
        thumb,
        price,
        discount
    } = product;

    const firstChild = parents.includes(id); // first product found in category

    return (
        <>
            { ! loading && firstChild &&
                (<div className={styles.search__suggestions_item_category}>
                    <Link href="/cat">
                        <>
                            In | <span>{category}</span>
                        </>
                    </Link>
                </div>)
            }

            <Skeleton loading={loading} name="suggestion">
                <Link href="/product/item" parentClassName={styles.search__suggestions_item}>
                    <>
                        <Image
                            src={thumb}
                            alt={name}
                            width="50"
                            height="50"
                            className={styles.search__suggestions_item_img}
                        />

                        <div className={styles.search__suggestions_item_name}>
                            {
                                shortenString({
                                    str: name,
                                    word: true,
                                    count: 10
                                })
                            }
                        </div>

                        <div className={styles.search__suggestions_item_price}>
                            <Price price={price} discount={discount} />
                        </div>
                    </>
                </Link>
            </Skeleton>
        </>
    )
}

export default Suggestion

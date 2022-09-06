
import Image from 'next/image';
import Link from 'components/helpers/LinkCustom';
import Price from './Price';
import React from 'react'
import Skeleton from 'components/helpers/Skeleton';
import { getProductThumbnail, shortenString } from 'helpers/helpers';
import styles from 'styles/components/search.module.scss';
import { SkeletonSuggestionInterface } from 'components/Layouts/Header/Search';
import { ID } from 'hooks/useProduct';

interface Props {
    product: SkeletonSuggestionInterface
    parents: ID[]
}

function Suggestion({ product, parents }: Props) {
    const { loading, productFlat, categories } = product;
    const firstChild = parents.some((v: string) => v === productFlat?.id); // first product in category

    return (
        <>
            { ! loading && firstChild &&
                (<div className={styles.search__suggestions_item_category}>
                    <Link href={`/category/${categories[0]?.id}?n=${categories[0]?.slug}`}>
                        <>
                            <span>In {categories?.length && categories[0].name}</span>
                        </>
                    </Link>
                </div>)
            }

            <Skeleton loading={! productFlat} name="suggestion">
                <Link href={productFlat?.urlKey} parentClassName={styles.search__suggestions_item}>
                    <>
                        <Image
                            src={getProductThumbnail({ path: productFlat?.thumbnail })}
                            alt={productFlat?.name}
                            width="50"
                            height="50"
                            className={styles.search__suggestions_item_img}
                        />

                        <div className={styles.search__suggestions_item_name}>
                            {
                                shortenString({
                                    str: productFlat?.name,
                                    word: true,
                                    count: 10
                                })
                            }
                        </div>

                        <div className={styles.search__suggestions_item_price}>
                            <Price price={productFlat?.price} specialPrice={productFlat?.specialPrice} />
                        </div>
                    </>
                </Link>
            </Skeleton>
        </>
    )
}

export default Suggestion

import ButtonMain from 'components/buttons/Main';
import React from 'react'
import { SkeletonProductInterface } from 'Interfaces/Product.interface';
import Suggestion from '../../Product/Suggestion';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { groupSuggestedProducts } from 'helpers/helpers';
import styles from 'styles/components/search.module.scss';

interface Props {
    loading: boolean
    products: SkeletonProductInterface[]
    called: boolean
    input: React.MutableRefObject<HTMLInputElement>
    focus: boolean
    showSuggestions: boolean
}

const Suggestions = ({
    loading,
    products,
    called,
    focus,
    showSuggestions
}: Props) => {

    const [sortedProducts, parents] = groupSuggestedProducts({ products });

    return (
        <div
            style={{ 
                width: showSuggestions ? "100%" : "0%",
                overflow: showSuggestions ? "visible" : "hidden"
            }}
            className={`
                ${styles.search__suggestions} 
                ${showSuggestions && styles.animation_fadeDown}
            `}
        >
            {! sortedProducts.length && <div className={styles.search__suggestions_separator}><div/></div>}

            <div className={styles.search__suggestions_items}>
                { 
                    sortedProducts &&
                    sortedProducts.map((product, i) => {
                        return <Suggestion
                            key={i}
                            product={product} 
                            parents={parents}
                        />
                    })
                }
            </div>

            { ! loading && !!sortedProducts.length &&
                (<div className={styles.search__more}>
                    <ButtonMain 
                        styles={{
                            borderRadius: "0rem"
                        }}
                    >
                        More results
                    </ButtonMain>
                </div>)
            }

            {
                ! sortedProducts.length &&
                    (<p>No results found</p>)
            }
        </div>
    )
}

export default React.memo(Suggestions)

import ButtonMain from 'components/buttons/Main';
import React from 'react'
import Suggestion from '../../Product/Suggestion';
import { groupSuggestedProducts } from 'helpers/helpers';
import styles from 'styles/components/search.module.scss';
import { SkeletonSuggestionInterface } from './Search';
import { SSuggestionsContainer } from 'components/styled/Suggestions';

interface Props {
    loading: boolean
    products: SkeletonSuggestionInterface[]
    called: boolean
    input: React.MutableRefObject<HTMLInputElement>
    focus: boolean
    showSuggestions: boolean
}

const Suggestions = ({
    loading,
    products,
    showSuggestions
}: Props) => {

    const [sortedProducts, parents] = groupSuggestedProducts({ products });

    return (
        <SSuggestionsContainer show={showSuggestions} >
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
                    <ButtonMain>
                        More results
                    </ButtonMain>
                </div>)
            }

            {
                ! sortedProducts.length &&
                    (<p>No results found</p>)
            }
        </SSuggestionsContainer>
    )
}

export default React.memo(Suggestions)

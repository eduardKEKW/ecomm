
import { APOLLO_NETWORK_ONLY, SEARCH_DELAY, SEARCH_INPUT_PLACEHODER } from 'helpers/local';
import React, { useEffect, useRef, useState } from 'react'
import { faBackspace, faSearch } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductFiltersInterface, ProductQueryInterface, ProductQueryVarsInterface, PRODUCT_QUERY, SkeletonProductInterface } from 'apollo/querys/Product.query';
import Suggestions from './Suggestions';
import styles from 'styles/components/search.module.scss';
import { useInitialRender } from 'hooks/useInitialRender.hook';
import { useLazyQuery } from '@apollo/react-hooks';

interface Props {}

const productFilters: ProductFiltersInterface = {
    pagination: {
        from: 0,
        size: 5
    },
    term: ''
}

function Search(props: Props) {

    const isInitialRender = useInitialRender();
    const [showSuggestions, changeShowSuggestions] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const [timeoutref, setTimeoutRef] = useState<NodeJS.Timeout | null>(null)
    const [filters, setFilters] = useState<ProductFiltersInterface>(productFilters);
    const [loading, setLoading] = useState<boolean>(false);
    const inputRef = useRef(null);
    const [loadProductSuggestions, { called, loading: loadingData, data }] = useLazyQuery<ProductQueryInterface, ProductQueryVarsInterface>(PRODUCT_QUERY, {
        fetchPolicy: APOLLO_NETWORK_ONLY
    });

    const products: SkeletonProductInterface[] = data?.products?.hits ?? new Array(filters.pagination.size).fill({ loading: true });

    useEffect(() => {
        if(! isInitialRender) { // skip initial render call

            if(timeoutref) { 
                clearTimeout(timeoutref);
                setTimeoutRef(null);
            }

            setLoading(true); // loading not affected by setTimeout

            setTimeoutRef(setTimeout(() => {
                if(filters.term.length > 0) {
                    loadProductSuggestions({ variables: { data: filters }});
                }
            }, SEARCH_DELAY));
            
        }
    }, [filters, isInitialRender])

    useEffect(() => {
        setLoading(loadingData);
    }, [loadingData]);

    useEffect(() => {
        changeShowSuggestions( focus && !! filters.term);
    }, [focus, filters])

    useEffect(() => {
        document.querySelector("body").style.overflow = focus ? "hidden" : "visible";
    }, [focus])

    
    return (
        <>
            <div className={styles.search}>
                <button className={styles.search__button_search}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>

                <input
                    className={`
                        ${styles.search__input} 
                        ${showSuggestions && styles.search__input_on_search}
                    `} 
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    autoCapitalize="off"
                    placeholder={focus ? "" : SEARCH_INPUT_PLACEHODER}
                    type="text"
                    onChange={({ target }) => setFilters({ ...filters, term: target.value })}
                    value={filters.term}
                    onFocus={() => setFocus(true)}
                    ref={inputRef}
                />

                <button 
                    onClick={() => {
                        setFilters({ ...filters, term: '' });
                        setFocus(false);
                    }} 
                    className={`
                        ${styles.search__button_erase} 
                        ${filters.term && styles.animation_fadeLeft}
                        ${showSuggestions && styles.show_events}
                    `}
                >
                    <FontAwesomeIcon icon={faBackspace} />
                </button>

                <Suggestions 
                    loading={loading} 
                    products={products} 
                    called={called} 
                    input={inputRef}
                    focus={focus}
                    showSuggestions={showSuggestions}
                />
                
            </div>

            <div
                onClick={() => setFocus(false)}
                className={`
                    ${focus && styles.search__wrapper}
                `}
            />
        </>
    )
}

export default Search

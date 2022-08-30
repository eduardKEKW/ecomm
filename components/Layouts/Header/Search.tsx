
import { SEARCH_DELAY, SEARCH_INPUT_PLACEHODER } from 'helpers/local';
import React, { useEffect, useRef, useState } from 'react'
import { faBackspace, faSearch } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Suggestions from './Suggestions';
import styles from 'styles/components/search.module.scss';
import { useInitialRender } from 'hooks/useInitialRender.hook';
import useSearch from 'hooks/useSearch.hooks';
import produce from 'immer';
import { SearchProductQuery, SearchProductQueryVariables } from 'Graphql/generated/graphql';

interface Props {}

export type SkeletonSuggestionInterface = SearchProductQuery["searchProduct"]["data"][0] & { loading?: boolean };

function Search(props: Props) {

    const isInitialRender                               = useInitialRender();
    const [showSuggestions, changeShowSuggestions]      = useState<boolean>(false);
    const [focus, setFocus]                             = useState<boolean>(false);
    const [timeoutref, setTimeoutRef]                   = useState<NodeJS.Timeout | null>(null);
    const [loading, setLoading]                         = useState<boolean>(false);
    const inputRef                                      = useRef(null);
    const [filters, setFilters]                         = useState<SearchProductQueryVariables>(() => ({
        input: {
            term: ''
        },
        first: 5
    }));
    const [loadProductSuggestions, { called, loading: loadingData, products: data }] = useSearch({ lazy: true });

    const products: SkeletonSuggestionInterface[] = data ?? new Array(filters.first).fill({ loading: true });

    useEffect(() => {
        if(! isInitialRender) { // skip initial render call

            if(timeoutref) { 
                clearTimeout(timeoutref);
                setTimeoutRef(null);
            }

            setLoading(true); // loading not affected by setTimeout

            setTimeoutRef(setTimeout(() => {
                if(filters.input.term.length) {
                    loadProductSuggestions({ variables: filters });
                }
            }, SEARCH_DELAY));
            
        }
    }, [filters, isInitialRender])

    useEffect(() => {
        setLoading(loadingData);
    }, [loadingData]);

    useEffect(() => {
        changeShowSuggestions( focus && !! filters.input.term);
    }, [focus, filters])
    
    return (
        <>
            <div className={styles.search}>
                <button className={[styles.search__button_search, showSuggestions && styles.search__search_selected].join(' ')}>
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
                    onChange={({ target }) => setFilters(filters => 
                        produce(filters, draft => {
                            draft.input.term = target.value;
                        }
                    ))}
                    value={filters.input.term}
                    onFocus={() => setFocus(true)}
                    ref={inputRef}
                />

                <button 
                    onClick={() => {
                        setFilters(filters => produce(filters, draft => {
                            draft.input.term = '';
                        }))
                        setFocus(false);
                    }} 
                    className={`
                        ${styles.search__button_erase} 
                        ${filters.input.term && styles.animation_fadeLeft}
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

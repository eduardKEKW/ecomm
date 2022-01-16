import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "components/buttons/Main";
import { SPage, SPageItem } from "components/styled/Resource";
import { usePagination } from "hooks/usePagination";
import { useState, useMemo, useEffect } from "react";

interface PaginationProps {
    total?: number
    perPage?: number
    onPageChange: (v: number) => void 
    anchor?: string
    selectedPage: number
}

const Pagination = ({ total = 1, perPage = 1, onPageChange, anchor, selectedPage }: PaginationProps): JSX.Element => {
    const [totalPages, setTotalPages] = useState<number>(() => Math.ceil(total / perPage)); 
    const pages = usePagination(useMemo(() => ({ selectedPage, totalPages }), [selectedPage, totalPages]));

    useEffect(() => {
        setTotalPages(Math.ceil(total / perPage))
    }, [total, perPage])

    return (
        <SPage total={total}>
                <Main 
                    disable={selectedPage == 1} 
                    style={{ width: '4rem' }}
                    onClick={() => onPageChange(selectedPage - 1)} 
                > 
                    <FontAwesomeIcon icon={faArrowLeft} /> 
                </Main>
            {
                pages.map(({
                    squashed,
                    value,
                    selected
                }, i) =>
                    ( 
                        <SPageItem 
                            onClick={() => {
                                if(! selected && ! squashed) {
                                    onPageChange(value)
                                }   
                            }}
                            squashed={squashed} 
                            selected={selected} 
                            key={i}
                        >
                            {
                                    perPage >= 9 && anchor 
                                ?
                                    <a href={`#${anchor}`}>{squashed ? '. . .' : value}</a>
                                :
                                    <a>{squashed ? '. . .' : value}</a>
                            }
                            
                        </SPageItem>
                    )
                )
            }
            <Main 
                disable={selectedPage == totalPages} 
                style={{ width: '4rem' }} 
                onClick={() => onPageChange(selectedPage + 1)} 
            >
                 <FontAwesomeIcon icon={faArrowRight} /> 
            </Main>
        </SPage>
    )
}

export default Pagination;
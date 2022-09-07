import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Main from "components/buttons/Main";
import { SPage, SPageItem } from "components/styled/Resource";
import { getRouterParams, setUrlParams } from "helpers/helpers";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect } from "react";

interface PaginationProps {
    total?: number
    perPage?: number
    onPageChange: (v: number) => void 
    anchor?: string
    selectedPage: number
    gridArea?: string
}

export interface PageInterface {
    selected?: boolean
    squashed: boolean
    value: number
}

const getSquash = (min: number, max: number): PageInterface[] => {
    try {
        return new Array(Math.min(max - min, 3)).fill(null).map((_, i) => ({
            value: min + i + 1,
            squashed: i == 1 && (max - min) > 2
        }))   
    } catch (error) {
        return [];
    }
}

export const usePagination = ({ totalPages, selectedPage }): PageInterface[] => {
    const [pages, setPages] = useState<PageInterface[]>([]);

    useEffect(() => {   
        setPages([
            ...getSquash(0, selectedPage - 1),
            {
                squashed: false,
                selected: true,
                value: selectedPage
            },
            ...getSquash(selectedPage, totalPages)
        ]);
    }, [totalPages, selectedPage])

    return pages;
}

const Pagination = ({ total = 1, perPage = 1, onPageChange, anchor, selectedPage: selectedPageProps, gridArea }: PaginationProps): JSX.Element => {
    const [selectedPage, setSelectedPage]   = useState<number>(() => {
        const params = getRouterParams();
        return !! params["page"] ? +params["page"] : selectedPageProps
    });
    const [totalPages, setTotalPages]       = useState<number>(() => Math.ceil(total / perPage)); 
    const pages                             = usePagination(useMemo(() => ({ selectedPage, totalPages }), [selectedPage, totalPages]));

    useEffect(() => {
        setTotalPages(Math.ceil(total / perPage))
    }, [total, perPage])
    
    const changePage = (v) => {
        setSelectedPage(v)
        onPageChange(v)
        setUrlParams({
            key: "page",
            value: v.toString()
        })
    }
    
    return (
        <SPage total={total} gridArea={gridArea}>
                <Main 
                    disable={selectedPage == 1} 
                    style={{ width: '4rem' }}
                    onClick={() => changePage(selectedPage - 1)} 
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
                                            changePage(value)
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
                    onClick={() => changePage(selectedPage + 1)} 
                >
                    <FontAwesomeIcon icon={faArrowRight} /> 
                </Main>
        </SPage>
    )
}

export default Pagination;
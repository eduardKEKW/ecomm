import { useState, useEffect } from "react";

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

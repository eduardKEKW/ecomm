import Select from "components/input/Select";
import { SContent, SOptions, SResource } from "components/styled/Resource";
import { PaginatorInfo } from "Graphql/generated/graphql";
import { changeSelectedValue, getRouterParams, setUrlParams } from "helpers/helpers";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
import Loading from "./Loading";
import Pagination from "./Pagination";

export interface ListInterface {
    name: string
    value: string
    selected?: boolean
}

interface FiltersInterface extends ListInterface {}
interface SortingInterface extends ListInterface {}
interface PerPageInterface extends ListInterface {}

interface Props {
    children: JSX.Element
    filters?: FiltersInterface[]
    sorting?: SortingInterface[]
    perPage: PerPageInterface[]
    onFiltersChange?: (v: string) => void
    onSortingChange?: (v: string) => void
    onPerPageChange?: (v: string) => void
    onPageChange?: (v: number) => void
    pagination: PaginatorInfo,
    loading: boolean
    anchor?: string
    selectedPage?: number
    empty?: boolean
    gridArea?: string
    columns?: number
    rows?: number
}

const Resource = ({ 
        children, 
        filters = [],
        sorting = [],
        perPage = [],
        onFiltersChange,
        onSortingChange,
        onPerPageChange,
        onPageChange,
        selectedPage = 1,
        pagination,
        loading,
        anchor,
        empty = false,
        gridArea,
        columns = 1,
        rows = 0
    }: Props): JSX.Element => {
    const router                                            = useRouter();
    const [resourceFilters, setResourceFilters]             = useState<ListInterface[]>(() => checkUrlQueryValue({ list: filters, queryName: "resourceFilters", router }));
    const [resourcePerPage, setResourcePerPage]             = useState<ListInterface[]>(() => checkUrlQueryValue({ list: perPage, queryName: "resourcePerPage", router }));
    const [resourceSortings, setResourceSortings]           = useState<ListInterface[]>(() => checkUrlQueryValue({ list: sorting, queryName: "resourceSortings", router }));

    return (
        <SResource id={anchor} gridArea={gridArea}>
            <SOptions>
                <span>
                    {
                        !! filters.length &&
                            <Select selected={resourceFilters.find(opt => opt.selected)} options={resourceFilters} onSelect={v => {
                                changeSelectedValue({
                                    list: resourceFilters,
                                    cb: (newResourceFilters) => setResourceFilters(newResourceFilters),
                                    value: v.value
                                })
                                setUrlParams({ key: "resourceFilters", value: v.value })
                                onFiltersChange(v.value);
                            }} width="10rem" />
                    }

                    {
                        !! sorting.length && 
                            <Select selected={resourceSortings.find(opt => opt.selected)} options={resourceSortings} onSelect={v => {
                                changeSelectedValue({
                                    list: resourceSortings,
                                    cb:  (newResourceSortings) => setResourceSortings(newResourceSortings),
                                    value: v.value
                                })
                                setUrlParams({ key: "resourceSortings", value: v.value })
                                onSortingChange(v.value);
                            }} width="10rem" />
                    }
                </span>

                <span>
                    <Select selected={resourcePerPage.find(opt => opt.selected)} options={resourcePerPage} onSelect={v => {
                        changeSelectedValue({
                            list: resourcePerPage,
                            cb:  (newResourcePerPage) => setResourcePerPage(newResourcePerPage),
                            value: v.value
                        })
                        setUrlParams({ key: "resourcePerPage", value: v.value })
                        onPerPageChange(v.value);
                    }} width="4rem" />
                </span>
            </SOptions>

            <SContent 
                columns={columns} 
                rows={rows} 
                minHeight={+perPage.find(opt => opt.selected)?.value * 7} 
                empty={empty}
            >
                <Loading showChildren={false} loading={loading} pulsating={true} size="medium">
                    {children}
                </Loading>
            </SContent>

            <Pagination 
                selectedPage={selectedPage} 
                anchor={anchor} 
                perPage={+perPage.find(opt => opt.selected)?.value} 
                total={pagination?.total} 
                onPageChange={onPageChange} 
            />

        </SResource>
    )
}   

const addValueToRouteQuery = ({ router, urlKey, urlValue }: {  router: NextRouter, urlKey: string, urlValue: string }) => {
    router.push({
        pathname: window.location.pathname,
        query: Object.assign(router.query, {
            [urlKey]: urlValue
        }),
    }, undefined, { shallow: true, scroll: false })
}

const checkUrlQueryValue = ({ queryName, list, router }: { queryName: string, list: ListInterface[], router: NextRouter }): ListInterface[] => {
    const params = getRouterParams()

    if(!! params[queryName]) {
        return changeSelectedValue({
            list: list,
            value: params[queryName]
        })
    }

    return list;
}


export default Resource;
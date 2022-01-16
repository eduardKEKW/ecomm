import { PaginationInterface } from "apollo/querys/Comments.query";
import Select from "components/input/Select";
import { SContent, SOptions, SResource } from "components/styled/Resource";
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
    perPage?: PerPageInterface[]
    onFiltersChange?: (v: string) => void
    onSortingChange?: (v: string) => void
    onPerPageChange?: (v: string) => void
    onPageChange?: (v: number) => void
    pagination: PaginationInterface,
    loading: boolean
    anchor?: string
    selectedPage?: number
    empty?: boolean
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
        empty = false
    }: Props): JSX.Element => {
    return (
        <SResource id={anchor}>
            <SOptions>
                <span>
                    <Select selected={filters.find(opt => opt.selected)} options={filters} onSelect={v => {
                        onFiltersChange(v.value);
                    }} width="10rem" />

                    <Select selected={sorting.find(opt => opt.selected)} options={sorting} onSelect={v => {
                        onSortingChange(v.value);
                    }} width="10rem" />
                </span>

                <span>
                    <Select selected={perPage.find(opt => opt.selected)} options={perPage} onSelect={v => {
                        onPerPageChange(v.value);
                    }} width="4rem" />
                </span>
            </SOptions>

            <SContent minHeight={+perPage.find(opt => opt.selected)?.value * 7} empty={empty}>
                <Loading loading={loading} pulsating={true} size="medium">
                    {children}
                </Loading>
            </SContent>

            <Pagination selectedPage={selectedPage} anchor={anchor} perPage={+perPage.find(opt => opt.selected)?.value} total={pagination?.total} onPageChange={onPageChange} />

        </SResource>
    )
}   

export default Resource;
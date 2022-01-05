import { SPagination, SOptions, SFilters, SSorting, SPerPage, SPageInfo, SContent } from "components/styled/Pagination";

interface Props {
    children: JSX.Element
    
}

const Pagination = ({ children }: Props): JSX.Element => {
    return (
        <SPagination>
            <SOptions>
                <SFilters>
                    filters
                </SFilters>

                <SSorting>
                    sorting
                </SSorting>

                <SPerPage>
                    perpage
                </SPerPage>
            </SOptions>

            <SContent>
                {children}
            </SContent>

            <SPageInfo>
                pagiantion
            </SPageInfo>
        </SPagination>
    )
}   

export default Pagination;
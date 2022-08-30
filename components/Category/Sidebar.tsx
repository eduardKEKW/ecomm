import { SSide, SSideContent } from "components/styled/Layouts/Pages/Category"
import { PRICE_OPTIONS, REVIEWS_OPTIONS } from "helpers/local"
import { CategorySingleType } from "hooks/useCategory.hook"
import Filter from "./Filters/Filter"

interface Props {
    category: CategorySingleType 
    gridArea: string
    urlParamsPrefix?: string
    onFilterChange: (data: { code: string, value: any, checked: boolean, type: string }) => void
}

const Sidebar = ({
    category,
    gridArea,
    onFilterChange,
    urlParamsPrefix = ''
}: Props) => {
    return (    
        <SSide gridArea={gridArea}> 
            <SSideContent>
                {
                    [PRICE_OPTIONS({ maxPrice: category.categoryProductMaxPrice }), ...category.filterableAttributes, REVIEWS_OPTIONS].map((attribute) => {
                        return <Filter 
                            urlParamsPrefix={urlParamsPrefix}
                            key={attribute.id}
                            radio={! ['RATING', 'PRICE'].includes(attribute.adminName)} 
                            attribute={attribute} 
                            onFilterChange={onFilterChange} 
                        />
                    })
                }
            </SSideContent>
        </SSide>
    )
}

export default Sidebar

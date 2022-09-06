import { CategoryBreadcrumbs } from 'Graphql/generated/graphql'
import React from 'react'
import Link from '../helpers/LinkCustom'
import { SBreadcrumbs, SItem } from '../styled/Product/Breadcrumbs'

interface Props {
    paths: CategoryBreadcrumbs[]
    gridArea: string
}

function Breadcrumbs({ paths, gridArea }: Props) {
    if(! paths) return <></>;
    
    return (
        <SBreadcrumbs gridArea={gridArea}>
            {
                paths?.map(category => 
                    <SItem key={category.name}>
                        <Link href={category.urlPath}> 
                            {category.name}
                        </Link>
                    </SItem>
                )   
            }

            <SItem>
                <Link back={true} href="/#">
                    <> 
                        Back
                    </>
                </Link>
            </SItem>
        </SBreadcrumbs>
    )
}

export default Breadcrumbs

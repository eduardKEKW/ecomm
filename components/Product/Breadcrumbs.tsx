import React from 'react'
import Link from '../helpers/LinkCustom'
import { SBreadcrumbs, SItem } from '../styled/Product/Breadcrumbs'

interface Props {
    paths: string[]
    gridArea: string
}

function Breadcrumbs({ paths, gridArea }: Props) {
    return (
        <SBreadcrumbs gridArea={gridArea}>
            {
                paths.map(path => 
                    <SItem key={path}>
                        <Link href={path}> 
                            {path}
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

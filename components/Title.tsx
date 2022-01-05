import React from 'react'
import Link from './helpers/LinkCustom'
import { STitle } from './styled/Title'

interface Props {
    name: string 
    description?: string
    style?: React.CSSProperties
    gridArea?: string
    href?: string
}

function Title({ name, description, style, gridArea, href }: Props) {

    return (
        <STitle gridArea={gridArea} showAfter={!! description} style={style} >
            {
                href 
                ?
                    <Link href="#"><h3>{name}</h3></Link> 
                :    
                    <h3>{name}</h3>
            }
            {description && <p>{description}</p>}
        </STitle>
    )
}

export default Title

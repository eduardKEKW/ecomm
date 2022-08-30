import React from 'react'
import Link from './helpers/LinkCustom'
import { theme } from './styled/Theme'
import { STitle, STitleReverse } from './styled/Title'

interface Props {
    name: string 
    description?: string
    style?: React.CSSProperties
    gridArea?: string
    href?: string
    background?: string
    reverse?: boolean
}

function Title({ name, description, style, gridArea, href, background = theme.colors.background, reverse = false }: Props) {
    const TitleComponent = reverse ? STitleReverse : STitle;

    return (
        <TitleComponent background={background} gridArea={gridArea} showAfter={!! description} style={style} >
            <div>
                {
                    href 
                    ?
                        <Link href="#"><h2>{name}</h2></Link> 
                    :    
                        <h2>{name}</h2>
                }
            </div>

            {description && <p>{description}</p>}
        </TitleComponent>
    )
}

export default Title

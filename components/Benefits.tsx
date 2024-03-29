import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BENEFITS } from 'helpers/local'
import React from 'react'
import Tooltip from './helpers/Tooltip'
import { SBenefits, SBenefitsItem, STitledSection } from './styled/Benefits'

interface Props {
    gridArea?: string
}

function Benefits({ gridArea }: Props) {
    return (
        <STitledSection name="benefits" gridArea={gridArea} style={{ marginBottom: "0" }} >
            <SBenefits>
                <ul>
                    {
                        BENEFITS.map(({
                            name,
                            description,
                            icon
                        }) => (
                            <li key={name} >
                                <Tooltip 
                                    content={description}
                                    minWidth="15rem"
                                    contentStyle={{ 
                                        fontSize: ".9rem",
                                        padding: ".4rem"
                                    }}
                                >
                                    <SBenefitsItem>
                                        <i><FontAwesomeIcon icon={icon}></FontAwesomeIcon></i>
                                        
                                        <p>{name}</p>
                                    </SBenefitsItem>
                                </Tooltip>
                            </li>
                        ))
                    }
                </ul>
            </SBenefits>
        </STitledSection>
    )
}

export default Benefits

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

interface Props {
    rating?: number
    onChange?: (value: number) => void
}

function Stars({
    rating      = 0,
    onChange    = null
}: Props) {
    const [selected, setSelected] = useState<number>(rating);

    const onHover = (index: number) => {
        if(onChange) {
            setSelected(index);
        }
    }

    return (
        <>
            {
                new Array(5).fill(0).map((_, index) => {
                    const i     = index + 1;
                    const empty = onChange ? faStarRegular : faStar
                    const icon  = (i <= selected) ? faStar : empty
                    const color = (i <= selected) ? "#f9bf3b" : "#c2c2c2"

                    return (
                        <i key={i} style={{ marginRight: ".2rem" }}>
                            <FontAwesomeIcon 
                                onMouseEnter={() => onHover(i)}
                                onMouseLeave={() => onHover(rating)}
                                onClick={() => onChange && onChange(selected)}
                                icon={icon} 
                                style={{
                                    color,
                                    cursor: onChange ? 'pointer' : ''
                                }}
                            />
                        </i>
                    )
                })
                    
            } 
        </>
    )
}

export default Stars

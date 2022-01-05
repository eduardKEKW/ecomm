import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react'
import Loading from 'components/helpers/Loading';
import { FormContext } from 'components/Form';
import { SButton, SIcon, SMain } from 'components/styled/Buttons/Main';

interface Props {
    children?: any
    onClick?: () => void
    icon?: IconDefinition | null
    customStyles?: any
    styles?: React.CSSProperties
    style?: React.CSSProperties
    loading?: boolean
    disable?: boolean
    type?: string
    href?: string
    border?: string
    reverse?: boolean
    rounded?: boolean
}

const ButtonMain = ({ 
        children,
        onClick = () => null, 
        icon = null, 
        styles: customStyles, 
        style, 
        loading = false, 
        disable = false, 
        type, 
        border, 
        reverse = false,
        rounded = false
    }: Props) => {
    const [context, setContext] = useContext<any>(FormContext);
    
    const click = (e) => {
        e.preventDefault();
        onClick();

        if(type == "submit" && context) {
            setContext({ name: type })
        }
    }

    return (
        <SMain onClick={click} style={style} border={border} reverse={reverse} disable={disable} rounded={rounded}>
            <Loading loading={loading}>
                {
                    icon && (
                        <SIcon>
                            <i>
                                <FontAwesomeIcon icon={icon} />
                            </i> 
                        </SIcon>
                    )
                }
            </Loading>

            <SButton
                disabled={disable}
                style={customStyles}
                icon={!! icon}
            >
                {children}
            </SButton>
        </SMain>
    )
}

export default ButtonMain

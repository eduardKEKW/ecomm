import { FormContext } from 'components/Form';
import { SError, SInput, SInputContainer } from 'components/styled/Input'
import React, { useContext } from 'react'

interface Props {
    widht?: string
    height?: string
    width?: string
    placeholder?: string
    type: string
    style?: React.CSSProperties
    children?: JSX.Element
    name: string
}

function Input({ name, children, type, ...props }: Props) {
    const [formContext , setFormContext] = useContext<any>(FormContext);
    const { value, errors } = (formContext && formContext[name]) || { value: '', errors: [] };

    const onChange = (value) => {
        formContext && setFormContext({ name, value });
    }
    
    return (
        <SInputContainer>

            <SInput 
                onChange={({ target }) => onChange(type == "checkbox" ? target.checked : target.value)} 
                value={value}
                error={!! errors?.length}
                type={type}
                {...props} 
            />

            {children}
            
                {
                    !! errors?.length && errors.map((err) => (
                        <SError key={err} >
                            {err}
                        </SError>
                    ))
                }
        </SInputContainer> 
    )
}

export default Input

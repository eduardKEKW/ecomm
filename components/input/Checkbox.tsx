import { FormContext } from 'components/Form';
import { SError, SInput, SInputContainer } from 'components/styled/Input'
import React, { useContext, useEffect } from 'react'

interface Props {
    widht?: string
    height?: string
    width?: string
    placeholder?: string
    type: string
    style?: React.CSSProperties
    children?: JSX.Element
    name: string
    initialValue?: string
}

function Checkbox({ name, children, type, initialValue, ...props }: Props) {
    const [formContext , setFormContext] = useContext<any>(FormContext);
    const { value, errors } = (formContext && formContext[name]) || { value: '', errors: [] };

    const onChange = (value) => {
        formContext && setFormContext({ name, value });
    }

    useEffect(() => {
        if(!! initialValue) {
            onChange(initialValue)
        }
    }, [initialValue]);
    
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
                    <SError show={true} key={err} >
                        {err}
                    </SError>
                ))
            }
        </SInputContainer> 
    )
}

export default Checkbox

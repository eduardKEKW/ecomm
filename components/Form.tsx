import React, { createContext, useMemo, useState } from 'react'
import { SForm } from './styled/Form'

const validate = {
    required: (value: any, name: string) => {
        return value ? null : `${name} is required`
    }
}

interface Props {
    initialState?: IFormState
    children: JSX.Element
    onSubmit: (state: IFormState) => void
    gridArea?: string
}

type ValidationsTypes = keyof typeof validate;

type FormField = {
    value: any
    validation: ValidationsTypes[]
    errors?: string[]
}

export interface IFormState {
    [key: string]: FormField
}

export const FormContext = createContext({});

function Form({ initialState, children, onSubmit, gridArea}: Props) {
    const [state, setState] = useState<IFormState>(() => initialState);
    
    const changeForm = ({ name, value }) => {

        if(name == "submit") {
            const {isERR, state: newState} = validateForm(state);

            setState({ ...newState })
            
            if(! isERR) {
                onSubmit(state)
            }

        } else {
            setState((state) => {
                state[name].value = value;

                return { ...state }
            })
        }
    }

    const value = useMemo(() => [state, changeForm], [initialState, state, changeForm]);

    return (
        <FormContext.Provider value={ value as any }>
            <SForm gridArea={gridArea}>
                { children }
            </SForm>    
        </FormContext.Provider>
    )
}

const validateForm = (state) => {
    return Object.keys(state).reduce<{ isERR: boolean, state: IFormState }>((acc, key) => {
        const err = getErrors({ ...acc.state[key], name: key })

        acc.state[key].errors = err;

        if(err.length) {
            acc.isERR = true;
        }   

        return acc;
    }, { isERR: false, state });
}

const getErrors = ({ name, value, validation }) => {
    return validation.reduce((acc, curr) => {
        const error = validate[curr](value, name);

        if (error) {
            acc.push(error);
        }

        return acc;
    }, []);
}

export default Form
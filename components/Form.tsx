import React, { createContext, useMemo, useState } from 'react'
import { SForm } from './styled/Form'

interface Props<State> {
    initialState?: State
    children: JSX.Element
    onSubmit: (state: State) => void
    gridArea?: string
}

interface State {}

export const FormContext = createContext({});

function Form<State>({ initialState, children, onSubmit, gridArea}: Props<State>) {
    const [state, setState] = useState<State>(() => initialState);
    
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

const validate = {
    required: (value: any, name: string) => !! value ? null : `${name} is required`
}

const validateForm = (state) => {
    return Object.keys(state).reduce((acc, key) => {
        const err = getErrors({ ...acc.state[key], name: key })

        acc.state[key].errors = err
        acc.isERR = err.length

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
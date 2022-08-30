import { NotificationInterface } from 'components/Notification';
import produce from 'immer';
import { createContext, useContext, useReducer } from 'react';
import { DEFAULT_ACTION, ADD_NOTIFICATION_ACTION } from './Actions';

interface initialStateInterface {

}

interface defaultStateInterface {
    isLoggedIn: boolean
    notification: NotificationInterface | null
}

type State = initialStateInterface & defaultStateInterface;

interface Action {
    type: string
    payload: any | NotificationInterface
}

interface Props {
    children: JSX.Element 
    initialState?: initialStateInterface
}

const StateContext      = createContext(null);
const DispatchContext   = createContext(null);

const GlobalProvider = ({ children, initialState = {} }: Props): JSX.Element => {
    const [globalState, globalDispatch] = useReducer(reducer, { ...defaultState, ...initialState });

    return (
        <StateContext.Provider value={ globalState }>
            <DispatchContext.Provider value={ globalDispatch }>
                    { children }
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

const reducer = (state: State, action: Action): State => {
    const { type = DEFAULT_ACTION, payload = {} } = action;
 
    switch(type) {
        case ADD_NOTIFICATION_ACTION: return addNotificationAction(state, payload as NotificationInterface);
        default: return { ...state };
    }
}

const addNotificationAction = (state: State, payload: NotificationInterface): State => {
    return produce(state, draft => {
        draft.notification = { id: Math.random(), ...payload};
    });
}

const defaultState = {
    isLoggedIn: false,
    notification: null
}

const useGlobalState    = () => useContext<State>(StateContext); // read
const useGlobalDispatch = () => useContext<(data: Action) => State>(DispatchContext); // write
const useGlobal         = () => [ useContext<State>(StateContext), useContext<(data: Action) => State>(DispatchContext) ] as [State,(data: Action) => State ]; // read & write

export {
    useGlobalState,
    useGlobalDispatch,
    useGlobal,
    GlobalProvider
}
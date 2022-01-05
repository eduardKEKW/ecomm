import { NotificationInterface } from 'components/Notification';
import { createContext, useContext, useReducer } from 'react';
import { DEFAULT_ACTION, ADD_NOTIFICATION_ACTION, CANCEL_NOTIFICATION_ACTION } from './Actions';

interface initialStateInterface {

}

interface defaultStateInterface {
    isLoggedIn: boolean
    notifications: NotificationInterface[]
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
        case CANCEL_NOTIFICATION_ACTION: return cancelNotificationAction(state, payload as NotificationInterface);
        default: return { ...state };
    }
}

const addNotificationAction = (state: State, payload) => {
    state.notifications = [{ id: Math.random() ,...payload}, ...state.notifications]
    return { ...state };
}

const cancelNotificationAction = (state: State, payload) => {

    state.notifications = state.notifications.filter(({ id }) => payload.id !== id);
    return { ...state };
}

const defaultState = {
    isLoggedIn: false,
    notifications: []
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
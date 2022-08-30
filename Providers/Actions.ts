import { NotificationInterface } from "components/Notification";

export const DEFAULT_ACTION = 'DEFAULT';
export const ADD_NOTIFICATION_ACTION = 'ADD_NOTIFICATION';
export const CANCEL_NOTIFICATION_ACTION = 'CANCEL_NOTIFICATION';

export const addNotificationAction = (notification: NotificationInterface) => {
    return {
        type: ADD_NOTIFICATION_ACTION,
        payload: notification
    }
}

export const cancelNotificationAction = (id: symbol) => {
    return {
        type: CANCEL_NOTIFICATION_ACTION,
        payload: { id }
    }
}
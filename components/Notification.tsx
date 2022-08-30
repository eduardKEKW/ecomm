import { IconDefinition as IconDefinitionCore } from '@fortawesome/fontawesome-svg-core'
import { IconDefinition as IconDefinitionRegular } from '@fortawesome/free-regular-svg-icons'
import { IconDefinition as IconDefinitionSolid } from '@fortawesome/free-solid-svg-icons'
import produce from 'immer'
import { useGlobal } from 'Providers/GlobalProvider.provider'
import React, { useCallback, useEffect, useState } from 'react'
import SnackBar from './Snackbar'
import { SNotification } from './styled/Notification'

export interface NotificationInterface {
    icon: IconDefinitionCore | IconDefinitionRegular | IconDefinitionSolid
    status: boolean
    color?: string
    description?: string
    time: number
    title: string
    id?: number
}

function Notification() {
    const [notifications, setNotifications] = useState<NotificationInterface[]>([]);
    const [state, dispatchGlobalState]      = useGlobal();

    const onCloseItem = useCallback((id) => {
        setNotifications(not => [ ...not.filter((n) => n.id !== id) ])
    }, [])  

    useEffect(() => {
        if(state.notification) {
            setNotifications(produce(notifications, draft => {
                draft.push(state.notification);
            }));
        }
    }, [state.notification]);

    return (
        <SNotification>
            {
                notifications.map((n) => <SnackBar onClose={onCloseItem} notification={n} key={n.id} />)
            }
        </SNotification>
    )
}

export default Notification

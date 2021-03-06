import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cancelNotificationAction } from 'Providers/Actions'
import { useGlobal } from 'Providers/GlobalProvider.provider'
import React, { useCallback, useEffect, useState } from 'react'
import { SItem, SItemBody, SItemClose, SNotification } from './styled/Notification'

export interface NotificationInterface {
    icon: IconDefinition
    status: boolean
    color?: string
    description?: string
    time: number
    id?: number
}

function Notification() {
    const [notifications, setNotifications] = useState<NotificationInterface[]>([]);
    const [closeItem, setCloseItem]         = useState<number | null>(null);
    const [state, dispatchGlobalState]      = useGlobal();

    const onCloseItem = useCallback((id) => {
        setCloseItem(id);

        setTimeout(() => {
            dispatchGlobalState(
                cancelNotificationAction(id)
            )
        }, 400);
    }, [])

    useEffect(() => {
        const items = state?.notifications || [];

        setNotifications(items)
        
        items
        .filter(({ id }) => {
            return ! notifications.find(({ id: notId }) => notId == id)
        })
        .forEach(({ id, time }) => {
            setTimeout(() => {
                onCloseItem(id);
            }, time || 5000)
        })

    }, [state?.notifications, onCloseItem, notifications])

    return (
        <SNotification>
            {
                notifications.map(({
                    icon,
                    status,
                    description,
                    color,
                    id,
                    time
                }) => (
                    <SItem color={color} close={closeItem == id} status={status} key={id}>
                        <i><FontAwesomeIcon icon={icon} /></i>
                        <SItemBody>
                            <p>{status ? 'SUCCESS!' : 'FAILED!'}</p>
                            <p>{description}</p>
                        </SItemBody>
                        <SItemClose onClick={() => onCloseItem(id)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </SItemClose>
                    </SItem>
                ))
            }
        </SNotification>
    )
}

export default Notification

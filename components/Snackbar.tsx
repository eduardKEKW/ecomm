import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { NotificationInterface } from './Notification';
import { SSnackBar, SSnackBarBody, SSnackBarClose } from './styled/Notification';
import { theme } from './styled/Theme';

interface Props {
    notification: NotificationInterface
    onClose: (id: number) => void
}

function SnackBar({
    notification: {
        icon,
        status,
        color,
        description,
        time,
        title,
        id
    },
    onClose,
}: Props) {
    const [timeoutValue, setTimeoutValue]       = useState<NodeJS.Timeout>(null);
    const [closing, setClosing]                 = useState<boolean>(false);

    const clearTimeOutValue = () => clearTimeout(timeoutValue);

    const resetTimeOut = (resetDuration: number = time) => setTimeoutValue(
        setTimeout(() => {
            setClosing(true);
            setTimeout(() => {
                onClose(id);
            }, theme.animationDuration.notification)
        }, resetDuration)
    );

    useEffect(() => {
        resetTimeOut();
        return () => clearTimeOutValue()
    }, [])

    return (
        <SSnackBar
            onMouseEnter={() => clearTimeOutValue()}
            onMouseLeave={() => resetTimeOut()}
            close={closing}
            color={color}
            success={status}
        >
            <div>

                <i><FontAwesomeIcon icon={icon} /></i>

                <SSnackBarBody>
                    <p>{title}</p>
                    <p>{description}</p>
                </SSnackBarBody>

                <SSnackBarClose onClick={() => resetTimeOut(0)}>
                    <FontAwesomeIcon icon={faTimes} />
                </SSnackBarClose>

            </div>
        </SSnackBar>
    )
}

export default React.memo(SnackBar);
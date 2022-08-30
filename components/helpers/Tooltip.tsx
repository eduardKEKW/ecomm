import React, {ReactNode, useEffect, useState} from 'react'

import styles from 'styles/components/tooltip.module.scss';

interface Props {
    children?: ReactNode
    className?: any
    content: ReactNode
    minWidth?: string
    contentStyle?: React.CSSProperties
    position?: "bottom" | "left"
    contentClass?: React.CSSProperties
}

const Tooltip = ({ children, content, minWidth, contentStyle, position = "bottom", contentClass, ...props }: Props) => {
    const [contentHover, setContentHover] = useState<boolean>(false);
    const [parentHover, setParentHover] = useState<boolean>(false);    
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        // setTimeout(() => {
            setShow(contentHover || parentHover);
        // }, (contentHover || parentHover) ? 0 : 550)
    }, [contentHover, parentHover])

    if(! content) return <>{children}</>
    
    return (
        <div
            style={{ zIndex: 99 }}
            {...props}
            onMouseEnter={() => setParentHover(true)}
            onMouseLeave={() => setParentHover(false)}
        >
            {children}

            <div
                className={`
                    ${styles.tooltip}
                    ${show && (position == "left" ? styles.animation_tooltip_left : styles.animation_tooltip)}
                `}
                style={{ 
                    minWidth: minWidth,
                }}
                onMouseEnter={() => setContentHover(true)}
                onMouseLeave={() => setContentHover(false)}
            >
                <div className={styles.tooltip__content} style={contentClass} >
                    <div className={styles.tooltip__content__wrap} style={{ 
                            top: position == "left" ? "50%" : "0%",
                            left: position == "left" ? "100%" : "50%",
                         }} >
                        <div className={styles.tooltip__content__wrap_arrow} />
                    </div>
                    <div style={contentStyle} className={styles.tooltip__parent}>
                        {content}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Tooltip

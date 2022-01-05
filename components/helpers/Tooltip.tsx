import React, {useEffect, useState} from 'react'

import styles from 'styles/components/tooltip.module.scss';

interface Props {
    children?: JSX.Element | React.Component | string
    className?: any
    content: JSX.Element | React.Component | string
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
        setShow(contentHover || parentHover);
    }, [contentHover, parentHover])

    if(! content) return <>{children}</>
    
    return (
        <div
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
                    minWidth: minWidth ?? "",
                    transform: position == "left" ? "translateX(-95%)" : "translateX(-50%)",
                    borderRight: position == "left" ? "solid 1rem transparent" : ""
                }}
                onMouseEnter={() => setContentHover(true)}
                onMouseLeave={() => setContentHover(false)}
            >
                <div className={styles.tooltip__content} style={contentClass} >
                    <div className={styles.tooltip__content__wrap} style={{ 
                            top: position == "left" ? "50%" : "0%",
                            left: position == "left" ? "100%" : "50%",
                            transform: position == "left" 
                            ?
                                `translateX(-20%) translateY(15%) rotate(90deg)`
                            :
                                `translateX(-50%) translateY(15%)`
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

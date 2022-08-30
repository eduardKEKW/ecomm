import style from 'styles/components/spinner.module.scss';
import img from '/public/logosimple.png';
import Image from 'next/image';
import { CSSProperties } from 'react';

enum sizes {
    small = 50,
    medium = 70,
    big = 100
}

interface Props {
    children: JSX.Element
    loading: boolean
    minHeight?: string
    minWidth?: string
    showChildren?: boolean,
    pulsating?: boolean
    contentStyle?: CSSProperties
    size?: keyof typeof sizes
}

const Loading = ({ 
        children,
        loading,
        minHeight = "",
        minWidth = "",
        showChildren = true,
        pulsating = false,
        contentStyle = {},
        size = "small"
    }: Props) => {

    if(! loading) return <>{ children }</>

    return (
        <>
            <div 
                className={style.spinner}
                style={{ 
                    minHeight: minHeight,
                    minWidth: minWidth,
                 }}
            >
                <div className={style.spinner__content} style={{ background: 'rgba(255, 255, 255, 0.541)' }}>
                    {
                        pulsating 
                        ? 
                            <div className={[style.spinner__content__pulse].join(' ')}>
                                <Image
                                    src={img}
                                    alt="ecomm logo"
                                    width={sizes[size]}
                                    height={sizes[size]}
                                /> 
                            </div>
                        : 
                            <div className={style.spinner__content__animation} />
                    }
                </div>
            </div>
            
            { showChildren ? children : null}
        </>
    )
}

export default Loading

import style from 'styles/components/spinner.module.scss';
import img from '/public/logosimple.png';
import Image from 'next/image';

interface Props {
    children: JSX.Element
    loading: boolean
    minHeight?: string
    minWidth?: string
    showChildren?: boolean,
    pulsating?: boolean
}

const Loading = ({ 
        children,
        loading = false,
        minHeight = "",
        minWidth = "",
        showChildren = true,
        pulsating = false
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
                <div className={style.spinner__content}>
                    {
                        pulsating 
                        ? 
                            <Image
                                src={img}
                                alt="Ecomm Logo"
                                quality={100}
                                width={100}
                                height={100}
                                className={style.animation_pulsating}
                            /> 
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

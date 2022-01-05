import styles from 'styles/skeleton.module.scss';

interface Props {
    children: JSX.Element
    loading: boolean
    name: string
}

interface TextProps {
    name: string
    size?: number
}

const Text = ({ name, size = 1 }: TextProps) => {
    return (
        <div className={styles[name]}>
            {
                new Array(size).fill(0).map((_, i) => <div key={i} />)
            }
        </div>
    )
}

const ImageSquare = ({ name }) => {
    return (
        <div className={styles[name]} />
    )
}

const SKELETONS = {
    suggestion: (name) => {
        return (
            <div className={[styles.skeleton, styles[name]].join(' ')}> 
                <ImageSquare name="image_square" />
                <Text name="text" size={3} />
                <Text name="text_2" size={2} />
            </div> 
        )
    },
    card: (name) => {
        return (
            <div className={[styles.skeleton, styles[name]].join(' ')}> 
                <ImageSquare name="image_square" />
                <Text name="text"   size={2} />
                <Text name="text_2" size={1} />
                <Text name="text_3" size={2} />
                <Text name="text_4" size={4} />
                <ImageSquare name="image_square_2" />
            </div> 
        )
    },
    product: (name) => {
        return (
            <div className={[styles.skeleton, styles[name]].join(' ')}> 
                <ImageSquare name="image_square" />
                <Text name="text"   size={2} />
                <Text name="text_2" size={1} />
                <Text name="text_3" size={2} />
                <Text name="text_4" size={4} />
                <ImageSquare name="image_square_2" />
            </div> 
        )
    }
}

const Skeleton = ({ children, loading, name }: Props) => {

    if(! loading) return <> {children} </>;

    return SKELETONS[name](name);
}

export default Skeleton

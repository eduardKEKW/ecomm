import styles from 'styles/skeleton.module.scss';

enum Heights {
    small = "0.7rem",
    medium = "1.5rem",
    big = "2.5rem"
}

interface Props {
    children: JSX.Element
    loading: boolean
    name: string
    gridArea?: string
}

interface TextProps {
    gridArea: string
    className?: string
    size?: number
    height?: keyof typeof Heights
}

const Text = ({ gridArea, size = 1, className = 'text', height = 'small' }: TextProps) => {
    return (
        <div className={className} style={{ gridArea: gridArea }}>
            {
                new Array(size).fill(0).map((_, i) => <div key={i} style={{ height: Heights[height] }} />)
            }
        </div>
    )
}

const ImageSquare = ({ gridArea, className = 'image_square'}) => {
    return (
        <div className={className} style = {{ gridArea: gridArea }} />
    )
}

const SKELETONS = {
    suggestion: (name) => {
        return (
            <div className={[styles.skeleton, styles[name]].join(' ')}> 
                <ImageSquare gridArea="product-image" />
                <Text gridArea="name" size={3} />
                <Text gridArea="price" size={2} />
            </div> 
        )
    },
    card: (name) => {
        return (
            <div className={[styles.skeleton, styles[name]].join(' ')}> 
                <ImageSquare gridArea="product-image" />
                <Text gridArea="name"   size={2} />
                <Text gridArea="category" size={1} />
                <Text gridArea="reviews" size={2} />
                <Text gridArea="colors" size={4} />
                <ImageSquare gridArea="price" />
            </div> 
        )
    },
    product: (name, gridArea = '') => {
        return (
            <div className={[styles.skeleton, styles[name]].join(' ')} style={{ gridArea: gridArea }}> 
                <Text gridArea="breadcrumbs" size={1} height='medium' />
                <Text gridArea="title" size={4} />
                <ImageSquare gridArea="carousel" />
                <Text gridArea="text-price" size={3} height='medium' />
                <Text gridArea="text-offer" size={2} />
                <Text gridArea="text-actions" size={2} height='big' />
            </div> 
        )   
    }
}

const Skeleton = ({ children, loading, name, gridArea }: Props) => {
    return loading ? SKELETONS[name](name, gridArea) : <> {children} </>;
}

export default Skeleton

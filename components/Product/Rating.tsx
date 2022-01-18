import { ProductInterface } from 'apollo/querys/Product.query'
import { SRating } from 'components/styled/Product/Rating'
import React from 'react'
import Stars from './Stars'

interface Props {
    product: ProductInterface
    content?: JSX.Element
    tags?: ["discount" | "new" | "disponibility"] | null
}

function Review({
    product,
    content = null,
    tags = null
}: Props) {

    return (
        <SRating>
            <Stars rating={product.rating} />

            {
                product.rating && (
                    <>
                        &#160; {product.rating} ( {product.reviews_number} )
                    </>
                )
            }

            { 
                content && 
                    <div>
                        {content}
                    </div>
            }
            
            {
                tags && tags.includes("discount") && product.discount && (
                    <span id="off" style={{ 
                        marginLeft: product.rating && ".4rem"
                    }}>
                        -{product.discount}%
                    </span>
                )
            }

            {
                tags && tags.includes("disponibility") && product.disponibility && (
                    <span id="stoc" style={{ 
                        marginLeft: product.disponibility && ".4rem",
                        background: product.disponibility ? "green" : "red"
                    }}>
                        {product.disponibility ? "IN STOC" : "OUT OF STOCK"} 
                    </span>
                )
            }
        </SRating>
    )
}

export default Review

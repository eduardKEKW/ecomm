import Price from 'components/Product/Price'
import Rating from 'components/Product/Rating'
import { SInfo, SRating } from 'components/styled/Page/Product';
import { ProductInterface } from 'Interfaces/Product.interface'
import React from 'react'

interface Props {
    gridArea?: string
    product: ProductInterface
}

function Info({ gridArea, product }: Props) {
    
    return (
        <SInfo gridArea={gridArea}>

            <SRating>
                <Rating product={product} content={(<a href="#reviews">{product.reviews_number} Reviews</a>)} />
            </SRating>
            
            <Price 
                showTva={true} 
                price={product?.price ?? 0} 
                discount={product?.discount} 
                style={{ 
                    fontSize: "2.5rem"
                }} 
            />   
        </SInfo>
    )
}

export default Info

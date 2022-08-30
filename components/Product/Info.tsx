import Price from 'components/Product/Price'
import Rating from 'components/Product/Rating'
import { SInfo, SRating } from 'components/styled/Page/Product';
import { ProductFlatFragmentFragment } from 'Graphql/generated/graphql';
import React from 'react'

interface Props {
    gridArea?: string
    product: ProductFlatFragmentFragment
}

function Info({ gridArea, product }: Props) {
    
    return (
        <SInfo gridArea={gridArea}>

            <SRating>
                <Rating product={product} content={(<a href="#reviews">{product.reviewsCount} Reviews</a>)} />
            </SRating>
            
            <Price 
                showTva={true} 
                price={product?.price}
                specialPrice={product.specialPrice}
                showDiscount={true}
                style={{ 
                    fontSize: "2.5rem"
                }} 
            />   
        </SInfo>
    )
}

export default Info
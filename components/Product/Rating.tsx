import { SRating, STagItem, STags } from 'components/styled/Product/Rating'
import { ProductFlatFragmentFragment } from 'Graphql/generated/graphql'
import React from 'react'
import Stars from './Stars'

export interface TagInterface {
    value: string
    color: string
    name: string
    condition: boolean
};

interface Props {
    product: ProductFlatFragmentFragment
    content?: JSX.Element
    tags?: TagInterface[]
}

function Review({
    product,
    content = null,
    tags = []
}: Props) {

    return (
        <SRating>
            <Stars rating={product.averageRating} />

            {
                !! product.averageRating && (
                    <>
                        &#160; {product.averageRating} ( {product.reviewsCount} )
                    </>
                )
            }

            <STags>
               { 
                    tags.map(tag => {
                        return tag.condition && (
                            <STagItem  
                                color={tag.color}
                                key={tag.name} 
                            >
                                 {tag.value}
                            </STagItem>
                        )
                    })
               }
            </STags>
        </SRating>
    )
}

export default Review

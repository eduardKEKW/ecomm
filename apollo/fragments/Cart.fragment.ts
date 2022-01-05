import { gql } from '@apollo/client';

export interface CartItemInterface {
    id: number
	name?: string
	quantity?: number
	price?: number
    thumb?: string
    discount?: number
} 

export const CART_FIELDS = gql`
    fragment CartFields on Item {
        id
        name
        price
        quantity
        thumb
        discount
    }
`;
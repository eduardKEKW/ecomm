import { CartItemInterface, CART_FIELDS } from '../fragments/Cart.fragment';
import { gql } from '@apollo/client';

export interface CartInterface {
    items: CartItemInterface[]
    total?: number
    sub_total?: number
    tax_total?: number
    transport_tax?: number
    savings?: number
}

const GET_GUEST_CART = gql`
    ${CART_FIELDS}
    query cartItems($from: Int = 0, $size: Int = 10) {
        cartItems (
            from: $from
            size: $size
        ) {
            items {
                ...CartFields
            }
            total
            sub_total
            tax_total
            transport_tax
            savings
        }
    }
`;
  
export {
    GET_GUEST_CART
}


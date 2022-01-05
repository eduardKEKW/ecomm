import { CART_FIELDS } from '../fragments/Cart.fragment';
import { gql } from '@apollo/client';

interface MutateCartItemsInterface {
  message: string
  success: boolean
}

export interface CartQueryInterface {
  MutateCartItems: MutateCartItemsInterface
}

export interface CartQueryVarsInterface {
  items: number[]
  qty: number
  detach?: boolean
}

const MUTATE_CART_ITEMS = gql`
  mutation MutateCartItems($items: [ID], $detach: Boolean = false, $qty: Int = 1) {
      MutateCartItems (
            items: $items
            qty: $qty
            detach: $detach
        ) {
          message
    	    success
        }
    }
`;

export {
  MUTATE_CART_ITEMS
};
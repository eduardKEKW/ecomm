
import { CART_FIELDS } from '../fragments/Cart.fragment';
import { FAVORITES_FIELDS } from '../fragments/Favorite.fragment';
import { UserInterface, USER_FIELDS } from '../fragments/User.fragment';
import { gql } from '@apollo/client';

export interface UserQueryInterface {
    me: UserInterface | null
}

export interface UserQueryVarsInterface {
    id?: Number
    includeFavoriteProducts?: boolean
    includeCartProducts?: Boolean
}

const GET_USER_QUERY = gql`
    ${FAVORITES_FIELDS}
    ${CART_FIELDS}
    ${USER_FIELDS}
    query user(
        $includeFavoriteProducts: Boolean = true,
        $includeCartProducts: Boolean = true,
        $from: Float = 0,
        $size: Float = 10
    ) {
        me {    
            ...UserFields
            favorites (from: $from, size: $size) @include (if: $includeFavoriteProducts) {
                ...FavoritesFields
            }
            cart (from: $from, size: $size) @include (if: $includeCartProducts) {
                total
                sub_total
                tax_total
                transport_tax
                savings
                items {
                    ...CartFields
                }
            }
        }
    }
`;
  
export {
    GET_USER_QUERY
}


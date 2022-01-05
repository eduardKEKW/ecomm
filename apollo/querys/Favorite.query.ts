import { gql } from '@apollo/client';
import { ProductInterface } from './Product.query';

export interface FavoriteQueryInterface {
    favoriteItems: ProductInterface[]
}

export interface FavoriteQueryVarsInterface {
    id?: number
    from?: number
    size?: number
}

const FAVORITE_QUERY = gql`
    query favorites ($id: [ID], $from: Float, $size: Float) {
        favoriteItems (id: $id, from: $from, size: $size) {
            id
            name
            price
            category
            thumb
        }
    }
`;

export {
    FAVORITE_QUERY
}
import { gql } from '@apollo/client';

export const FAVORITES_FIELDS = gql`
    fragment FavoritesFields on Product {
        id
        name
        price
        category
        manufacturer
        brand
        color
        thumb
    }
`;
import { gql } from '@apollo/client';
import { CartInterface } from 'apollo/querys/Cart.query';
import { ProductInterface } from 'apollo/querys/Product.query';

export interface UserInterface {
    id: number
    name: string
    email: string
    api_token: string
    favorites?: ProductInterface[]
    avatar?: string
    cart?: CartInterface
}

export const USER_FIELDS = gql`
    fragment UserFields on User {
        id
        name
        email
        avatar
    }
`;
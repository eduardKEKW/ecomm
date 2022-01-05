import { UserInterface, USER_FIELDS } from './User.fragment';
import { gql } from '@apollo/client';

export interface CommentInterface {
    id: number
    body: string
    rating: number
    likes: number
    created_at: string
    userLike?: boolean
    userOwned?: boolean
    user: UserInterface
}

export const COMMENT_FIELDS = gql`
    ${USER_FIELDS}
    fragment CommentFields on Comment {
        id
        body
        likes
        rating
        created_at
        userLike @client
        userOwned @client
        user {
            ...UserFields
        }
    }
`;
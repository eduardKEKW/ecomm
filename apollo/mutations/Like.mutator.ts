import { gql } from '@apollo/client';

interface UserInterface {
  id: number
  name: string
}

export interface LikeMutationInterface {
  id: number
  body: string
  rating: number
  user: UserInterface
}

export interface LikeDataMutationInterface {
  LikeComment: LikeMutationInterface
}

export interface LikeMutationVarsInterface {
  commentId: number
}

const LIKE_MUTATION = gql`
    mutation LikeComment($commentId: ID) {
    LikeComment (
      commentId: $commentId
    ) {
      id
      body
      rating
      user {
        id
        name
      }
    }
  }
`;

export {
    LIKE_MUTATION
};
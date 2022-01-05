import { CommentInterface, COMMENT_FIELDS } from '../fragments/Comment.fragment';
import { gql } from '@apollo/client';

export interface CommentMutationInteraface {
  MutateComments: CommentInterface
}

export interface CommnetMutationVarsInterface {
  productId: number
  body: string
  detach: boolean
  rating: number
}

const COMMENT_MUTATION = gql`
  ${COMMENT_FIELDS}
  mutation MutateComments(
    $productId: ID
    $body: String
    $detach: Boolean = false
    $rating: Int
  ) {
    MutateComments(
        productId: $productId
        body: $body
        detach: $detach
        rating: $rating
    ) {
        ...CommentFields
    }
  }
`;

export {
  COMMENT_MUTATION
};
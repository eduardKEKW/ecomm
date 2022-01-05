import { gql } from '@apollo/client';

export interface FavoriteMutatorInterface {
  mutateFavoriteItems: number[]
}

export interface FavoriteMutatorVarsInterface {
  items: number[]
  detach?: boolean
}

const FAVORITE_MUTATION = gql`
  mutation mutateFavoriteItems($items: [ID], $detach: Boolean = false) {
    mutateFavoriteItems(items: $items, detach: $detach)
  }
`;

export {
  FAVORITE_MUTATION
};
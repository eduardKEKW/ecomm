import { gql } from '@apollo/client';

export interface SubscribeVarsInterface {
  email: string
}

export interface responseBodyInterface {
  message: string
  success?: boolean
}

export interface SubscribeInterface {
  Subscribe: responseBodyInterface
}

const SUBSCRIBE_MUTATION = gql`
  mutation Subscribe($email: String!) {
    Subscribe(email: $email) {
      message
      success
    }
  }
`;

export {
    SUBSCRIBE_MUTATION
};
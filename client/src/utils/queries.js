import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
query Users($userId: ID!) {
  user(userId: $userId) {
    username
    role
    expertise
  }
}
`;

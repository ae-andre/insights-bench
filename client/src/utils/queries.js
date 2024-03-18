import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql`
query Query($userId: ID!) {
  user(userId: $userId) {
    username
    conversation {
      conversationTitle
      conversationText
    }
  }
}
`;

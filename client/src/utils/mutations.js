import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($conversationId: ID!, $comment: String!) {
  addComment(conversationId: $conversationId, comment: $comment) {
    commentId
    comment
    username
    createdAt
  }
}
`;


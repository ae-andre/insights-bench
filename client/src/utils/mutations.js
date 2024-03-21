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

export const ADD_SHARER = gql`
mutation addListener($username: String!, $password: String!, $role: String!) {
  addUser(username: $username, password: $password, role: $role) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_LISTENER = gql`
mutation addListener($username: String!, $password: String!, $role: String!, $expertise: String!) {
  addUser(username: $username, password: $password, role: $role, expertise: $expertise) {
    token
    user {
      _id
      username
    }
  }
}
`;

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
    _id
    comments {
      comment
      username
      createdAt
    }
  }
}
`;

export const ADD_CONVERSATION = gql`
mutation addConversation($conversationTitle: String!, $conversationText: String!, $expertise: String!, $isPrivate: Boolean!) {
  addConversation(conversationTitle: $conversationTitle, conversationText: $conversationText, expertise: $expertise, isPrivate: $isPrivate) {
    conversationTitle
    conversationText
    expertise
  }
}
`

export const FIND_BUDDY = gql`
mutation findBuddy($expertise: String!) {
  findBuddy(expertise: $expertise) {
    username
    availability
    role
    expertise
    conversation {
      _id
      conversationTitle
    }
  }
}`
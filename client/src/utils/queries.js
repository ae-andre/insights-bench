import { gql } from '@apollo/client';


export const GET_ALL_CONVERSATIONS = gql`
  query GetAllConversations {
    conversations {
      _id
      conversationTitle
      username
      createdAt
      expertise
      commentCount
    }
  }
`;

export const GET_ALL_PUBLIC_CONVERSATIONS = gql`
  query GetAllPublicConversations {
    conversations(filter: { isPrivate: false }) {
      _id
      conversationTitle
      username
      createdAt
      expertise
      commentCount
    }
  }
`;

export const GET_ALL_PRIVATE_CONVERSATIONS = gql`
  query GetAllPrivateConversations {
    conversations(filter: { isPrivate: true }) {
      _id
      conversationTitle
      username
      createdAt
      expertise
      commentCount
    }
  }
`;



export const GET_CONVERSATION_BY_ID = gql`
  query GetConversationById($conversationId: ID!) {
    conversation(conversationId: $conversationId) {
      _id
      conversationTitle
      conversationText
      createdAt
      username
      isPrivate
      comments {
        commentId
        comment
        username
        createdAt
        isUpdated
        updatedTime
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      password
      buddy {
        _id
        username
        expertise
      }
      availability
      role
      expertise
      conversation {
        _id
        conversationTitle
        conversationText
        createdAt
        username
        comments {
          commentId
          comment
          username
          createdAt
        }
      }
    }
  }
`;

export const GET_ALL_USERNAMES = gql`
  query GetAllUsernames {
    users {
      username
    }
  }
`;


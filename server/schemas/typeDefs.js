const { gql } = require('graphql-tag');

const typeDefs = gql`
  input ConversationFilterInput {
    isPrivate: Boolean
  }
  type User {
    _id: ID!
    username: String
    password: String
    buddy: User
    availability: Boolean
    role: String
    expertise: String
    conversation: Conversation
  }

  type Conversation {
    _id: ID!
    conversationTitle: String
    conversationText: String
    expertise: String
    username: String
    listener: User
    comments: [Comment]
    createdAt: String
    is_closed: Boolean
    isPrivate: Boolean
    commentCount: Int
  }

  type Comment {
    commentId: ID!
    comment: String
    username: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    conversation(conversationId: ID!): Conversation
    conversations(filter: ConversationFilterInput): [Conversation]
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addConversation(conversationTitle: String!, conversationText: String!, expertise: String!, isPrivate: Boolean!): Conversation
    addComment(conversationId: ID!, comment: String!): Conversation
    addSharer(username: String!, role: String!, password: String!): Auth
    addListener(username: String!, password: String!, role: String!, expertise: String): Auth
  }
`;

module.exports = typeDefs;

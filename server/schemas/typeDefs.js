const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    buddy: ID
    availability: Boolean
    role: String
    expertise: String
    conversations: [Conversation]!
  }

  type Conversation {
    _id: ID!
    conversationTitle: String
    conversationText: String
    expertise: String
    username: String
    listener: User
    comments: [Comment]!
    createdAt: String
    is_closed: Boolean
  }

  type Comment {
    commentId: ID
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
    conversation(id: ID!): Conversation
  }

  type Mutation {
    addUser(username: String!, password: String!, role: String!, expertise: String): Auth
    login(username: String!, password: String!): Auth
    addConversation(conversationTitle: String!, conversationText: String!, expertise: String!): Conversation
    addComment(conversationId: ID!, comment: String!): Conversation
  }
`;

module.exports = typeDefs;

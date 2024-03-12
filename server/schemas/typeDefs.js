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
    conversationTitle: String
    conversationText: String
    expertise: String
    author: ID
    listener: ID
    comments: [Comment]!
    createdAt: String
    is_closed: Boolean
  }

  type Response {
    commentId: ID
    comment: String
    author: String
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
    login(email: String!, password: String!): Auth
    addConversation(conversationTitle: String!, conversationText: String!, expertise: String!): Conversation
    addComment(conversationId: ID!, comment: String!, author: ID!): Conversation
  }
`;

module.exports = typeDefs;

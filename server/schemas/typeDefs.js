const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    buddy: ID
    availability: Boolean
    role: String
    expertise: String
    conversation: Conversation!
  }

  type Conversation {
    _id: ID
    conversationTitle: String
    conversationText: String
    expertise: String
    username: ID
    listener: ID
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
    user(userId: ID!): User
    conversation(conversationId: ID!): Conversation
  }

  type Mutation {
    addUser(username: String!, password: String!, role: String!, expertise: String): User
    login(username: String!, password: String!): User
    addConversation(conversationTitle: String!, conversationText: String!, expertise: String!, userId: ID! ): Conversation
    addComment(conversationId: ID!, comment: String!, userId: ID!): Conversation
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;

const { User, Conversation } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('buddy conversation');
    },
    user: async (parent, { userId }) => {
      return await User.findById( userId ).populate('buddy conversation');
    },
    conversations: async (parent, { filter }) => {
      //User the filter argument to conditionally build the query
      const filterQuery = filter ? { isPrivate: filter.isPrivate } : {};

      // Fetch conversations and populate the necessary fields
      const conversations = await Conversation.find(filterQuery).populate('expertise comments.username')

      // Map over the conversation and handle potential null values
      const formattedConversations = conversations.map((conversation) => {
        return {
          _id: conversation._id,  
          conversationTitle: conversation.conversationTitle,
          // Added these:
          conversationText: conversation.conversationText,
          isPrivate: conversation.isPrivate || null,
          comments: conversation.comments || null,
          //
          username: conversation.username,
          createdAt: conversation.createdAt,
          expertise: conversation.expertise || null,
          is_closed: conversation.is_closed || false,
          commentCount: conversation.comments.length,  
        };
      });

      return formattedConversations
    },
    conversation: async (parent, { conversationId }) => {
      // Fetch conversation by ID and populate the listener field
      const conversation = await Conversation.findById(conversationId).populate('listener');

      // Handle potential null values
      if (!conversation) {
        // Conversation not found
        return null;
      }

      // Convert Mongoose document to plain Javascript object and return 
      return conversation.toObject();
    },
  },

  Mutation: {
    addUser: async (parent, { username, password, role, expertise }) => {
      const user = await User.create({ username, password, role, expertise });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ username });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw AuthenticationError
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw AuthenticationError
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },
    addConversation: async (parent, { conversationTitle, conversationText, expertise }, context) => {
      if (context.user) {
        const convo = await Conversation.create({ 
          conversationTitle, 
          conversationText, 
          expertise, 
          username: context.user.username
        })

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { conversation: convo._id } }
        )

        return convo; 
      }
      throw AuthenticationError;
      ('You need to be logged')
    },
    addComment: async (parent, { conversationId, comment, userId }) => {
      const convo = await Conversation.findOne(
        { _id: conversationId} );

      convo.comments.push({
        comment: comment,
        username: userId
      })

      const updatedConvo = await convo.save();

      return updatedConvo
    },
    // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },
  },
};

module.exports = resolvers;

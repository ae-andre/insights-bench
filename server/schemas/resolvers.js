const { User, Conversation } = require('../models');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('buddy conversation');
    },
    user: async (parent, { userId }) => {
      return await User.findById({ userId });
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
      return await User.create({ username, password, role, expertise });
    },
    addConversation: async (parent, { conversationTitle, conversationText, expertise, userId }) => {
      const convo = await Conversation.create({ conversationTitle, conversationText, expertise, userId })

      const  user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $set: { conversation: convo._id },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      
      return convo; 
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

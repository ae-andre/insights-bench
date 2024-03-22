const { User, Conversation } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const mongoose = require('mongoose');
const moment = require('moment');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('buddy conversation');
    },
    user: async (parent, { userId }) => {
      return await User.findById(userId).populate('buddy conversation');
    },
    conversations: async (parent, { filter }) => {
      // Use the filter argument to conditionally build the query
      const filterQuery = filter ? { isPrivate: filter.isPrivate } : {};
      
      // Fetch conversations and populate the necessary fields
      const conversations = await Conversation.find(filterQuery).populate('expertise comments.username');
    
      // Map over the conversations and handle potential null values
      const formattedConversations = conversations.map((conversation) => {
        return {
          _id: conversation._id,  
          conversationTitle: conversation.conversationTitle,
          conversationText: conversation.conversationText,
          username: conversation.username,
          createdAt: conversation.createdAt,
          isPrivate: conversation.isPrivate || null,
          expertise: conversation.expertise || null,
          is_closed: conversation.is_closed || false,
          commentCount: conversation.comments.length,  
        };
      });
    
      return formattedConversations;
    },
    conversation: async (parent, { conversationId }) => {
      // Fetch conversation by ID and populate the listener field
      const conversation = await Conversation.findById(conversationId).populate('listener');

      // Handle potential null values
      if (!conversation) {
          // Conversation not found
          return null;
      }
  
      // Manually format createdAt for conversation
      conversation.createdAt = moment(conversation.createdAt).format('MMM D, YYYY [at] h:mm a');
  
      // Manually format createdAt for each comment
      conversation.comments.forEach(comment => {
          comment.createdAt = moment(comment.createdAt).format('MMM D, YYYY [at] h:mm a');
      });
  
      return conversation;
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('buddy conversation');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    findBuddy: async (parent, {expertise}, context) => {

      const user = await User.findById(context.user._id);
      const convo = await Conversation.findById(user.conversation._id);

      const buddyList =  await User.find({
        role: 'listener',
        availability: true,
        expertise: expertise
      });

      let selectedBuddy;

      if (buddyList.length) {
        selectedBuddy = buddyList[0];
      } else {
        const generalBuddies = await User.find({
          role: 'listener',
          availability: true,
        });
        selectedBuddy = generalBuddies[0];
      }

      if (selectedBuddy) {
        return await User.findOneAndUpdate(
          {_id: selectedBuddy._id},
          { $set: {availability: false, conversation: convo._id}},
          { new: true }
          );
      } else {
        return null;
      }
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
    addConversation: async (parent, { conversationTitle, conversationText, expertise, isPrivate, buddy }, context) => {
      try {
        if (context.user) {
          const convo = await Conversation.create({ 
            conversationTitle,
            conversationText, 
            expertise,  
            username: context.user.username,
            isPrivate,
          });

         await User.findOneAndUpdate (
          { _id: context.user._id },
          { $set: { conversation: convo._id } }
         );

          return convo;
        }
        throw AuthenticationError;
      } catch (error) {
        console.error('Error adding comment:', error);
        throw new Error('Error adding comment');
      }
    },
    addPublicConversation: async (parent, { conversationTitle, conversationText, expertise }, context) => {
      try {
        if (context.user) {
          const convo = await Conversation.create({ 
            conversationTitle,
            conversationText, 
            expertise,  
            username: context.user.username,
          });

          return convo;
        }
        throw AuthenticationError;
      } catch (error) {
        console.error('Error adding comment:', error);
        throw new Error('Error adding comment');
      }
    },
    addSharer: async (parent, { username, password, role }) => {
      const user = await User.create({ username, password, role });
      const token = signToken(user);
      return { token, user };
    },
    addListener: async (parent, { username, password, expertise, role }) => {
      const user = await User.create({ username, password, expertise, role });
      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, { conversationId, comment }, context) => {
      console.log('Context:', context.user);
      try {
        if (context.user) {
          return Conversation.findOneAndUpdate(
            { _id: conversationId },
            {
              $push: {
                comments: { comment, username: context.user.username }
              },
            },
            {
              new: true,
              runValidators: true,
            }
          );
        }
        throw AuthenticationError;
      } catch (error) {
        console.error('Error adding comment:', error);
        throw new Error('Error adding comment');
      }
    },
  },
};


module.exports = resolvers;

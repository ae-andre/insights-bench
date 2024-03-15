const { User, Conversation } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId }).populate('conversation');
    },
    conversation: async (parent, { conversationId }) => {
      return await Conversation.findOne({ _id: conversationId }).populate('username')
    }
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

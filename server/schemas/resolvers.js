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
      return await Conversation.findOne({ _id: conversationId })
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
    // addComment: async (parent, { conversationId, comment, userId }) => {
    //   const com = await Comment.create({ conversationId, comment, userId})

    //   const convo = await findOneAndUpdate(
    //     { _id: conversationId },
    //     {
    //       $addToSet: { comments: com },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //     );

    //     return comment
    // },
    // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },
  },
};

module.exports = resolvers;

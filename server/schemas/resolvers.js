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
    // addUser: async (parent, { username, password, role, expertise }) => {
    //   const user = await User.create({ username, password, role, expertise });
    //   const token = signToken(user);
    //   return { token, user };
    // },
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
    addConversation: async (parent, { conversationTitle, conversationText, expertise, isPrivate }, context) => {
      try {
        if (context.user) {
          const convo = await Conversation.create({ 
            conversationTitle,
            conversationText, 
            expertise,  
            username: context.user.username,
            isPrivate
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
      // try {
      //   // Extract the user from the context
      //   const { user } = context;
      //   console.log('User:', user);
    
      //   // Check if the user is authenticated
      //   if (!user) {
      //     throw new AuthenticationError('User not authenticated');
      //   }
    
      //   // Find the conversation by its ID
      //   const convo = await Conversation.findById(conversationId);
      //   console.log('Conversation:', convo);
    
      //   // Check if the conversation exists
      //   if (!convo) {
      //     throw new Error('Conversation not found');
      //   }
    
      //   // Add the new comment to the conversation
      //   convo.comments.push({
      //     comment,
      //     username: user.username // Associate the comment with the authenticated user's username
      //   });
    
      //   // Save the updated conversation
      //   const updatedConvo = await convo.save();
      //   console.log('Updated Conversation:', updatedConvo);
    
      //   // Return the updated conversation
      //   return updatedConvo;
      // } catch (error) {
      //   console.error('Error adding comment:', error);
      //   throw new Error('Error adding comment');
      // }
    // },
    // removeUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },
  },
};


module.exports = resolvers;

// The resolver as Tiffany had it

// addComment: async (parent, { conversationId, comment, userId }) => {
//   const convo = await Conversation.findOne(
//     { _id: conversationId} );

//   convo.comments.push({
//     comment: comment,
//     username: userId
//   })

//   const updatedConvo = await convo.save();

//   return updatedConvo
// },
// // removeUser: async (parent, { userId }) => {
// //   return User.findOneAndDelete({ _id: userId });
// // },
// },
// };


// Karla's matching logic -- needs adapting, worked with a three schema system including category

// //createConversation: async (_, { title, conversationHeadText, expertiseCategory, preferredPersonality }, context) => {
//   try{
//     // Extract user information from the JWT token in the context
//     const { token } = context;

//     if (!token) {
//       // Handle unauthorized access, throw an error or return accordingly
//       throw new AuthenticationError('Unauthorized access');
//     }

//     //Verify and decode the JWT token
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

//     // Extract user information from the decoded token
//     const { userId, username } = decodedToken;

//     // Check if it's a public or a private conversation
//     let isPrivate = false;
//     let conversationPartner = null;
  
//     if (context.isAuthenticated && context.isPrivatePage) {
//       // If the user is logged in and initiating a conversation from the private page
//       isPrivate = true;

      
//       // Validate expertiseCategory
//       if (!mongoose.Types.ObjectId.isValid(expertiseCategory)) {
//         throw new Error('Invalid expertiseCategory');
//       }

//       // Validate preferredPersonality input for private conversations
//       const validPersonalities = ['O', '!O', 'C', '!C', 'E', '!E', 'A', '!A', 'N', '!N', null];
  
//       // Ensure that preferredPersonality is an array and has exactly 5 elements
//       if (!Array.isArray(preferredPersonality) || preferredPersonality.length !== 5) {
//         throw new Error('preferredPersonality must be an array with exactly 5 values.');
//       }
  
//       // Validate each element in the preferredPersonality array
//       preferredPersonality.forEach((value) => {
//         if (!validPersonalities.includes(value)) {
//       throw new Error(`Invalid personality value: ${value}`);
//       }
//     });

//       // Call the matching algorithm function to find a matching counselor
//       const counselorMatch = await findMatchingCounselor(preferredPersonality, expertiseCategory);

//       // Update user fields for private conversations
//       await User.updateOne({ _id: user._id }, { $set: { isAvailable: false, conversationPartner: counselorMatch.userId } });
//       await User.updateOne({ _id: counselorMatch.userId }, { $set: { isAvailable: false, conversationPartner: user._id } });

//       conversationPartner = counselorMatch.userId;
//     }

//     // Create the conversation
//     const conversationInput = {
//       title,
//       conversationHeadText,
//       expertiseCategory: expertiseCategory,
//       isPrivate,
//       conversationPartner: conversationPartner,
//     };

//     const conversation = await Conversation.create(conversationInput);

//     // Update user with the new privateConversation
//     if (isPrivate) {
//       await User.updateOne({ _id: userId }, { $set: { privateConversation: conversation._id } });
//     }

//     return conversation;
//   } catch (error) {
//     // Handle token verification error
//     throw new AuthenticationError('Invalid or expired token');
//   }
// },

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations'; 
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Conversation.css';

const Conversation = ({ onClose }) => {
  const [commentText, setCommentText] = useState('');
  const conversationId = localStorage.getItem('selectedConversationId');
  console.log(typeof(conversationId))

  // Check if the user is logged in (because a user shouldn't be able to leave a comment if not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const navigate = useNavigate(); // Initialize navigate function so I can use it to redirect non-logged in users trying to leave comments to the login page

  // Function to handle checking the user's authentication status and displaying an alert if not logged in
  const checkAuthentication = () => {
    if (!isLoggedIn) {
      // Display toast notification
      toast.info("You must be logged in to participate the the conversation. Redirecting you to login...", {
        onClose: () => navigate('/login'), // Redirect to login page when the toast is closed or autoClose after 2.5 seconds.
        autoClose: 2500,
        position: 'top-center'
      });
    }
  };

  const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
    variables: { conversationId: conversationId },
  });

  const [addComment, { commentError }] = useMutation(ADD_COMMENT);

  const handleChange = (event) => {
    const { value } = event.target;

    setCommentText(value);
  
  };

  useEffect(() => {
    if (conversationId) {
      refetch();
    }
  }, [conversationId, refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { conversation: fetchedConversation } = data;
  if (!fetchedConversation) {
    return <p>Loading...</p>;
  }
  
  console.log("fetched Convo:", fetchedConversation)
  
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!commentText) {
      alert(`Oops! It seems like your message is empty. Please take a moment to share your thoughts.
      `);
      return;
    } 
    console.log("Im reaching here")
    
    // Added function call to Check authentication status before adding comment
    checkAuthentication();

    try {
      console.log("Im reaching here")
      const { newComment } = await addComment({
        variables: {
          conversationId: conversationId,
          comment: commentText,
          username: Auth.getProfile().data.username
        },
      });

      setCommentText(''); // Clear the comment text after submitting
      refetch(); // Refetch conversation data to update comments
    } catch (commentError) {
      console.error('Error adding comment:', commentError);
    }
  };
  
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          '--toastify-icon-color-info': '#55828b', 
          '--toastify-color-progress-info': '#55828b', 
        }} 
      />
    <div className="conversation-container">
      <div className="conversation-title">{fetchedConversation.conversationTitle}</div>
      <div className="conversation-text-and-attribution">
        <div className="conversation-text">{fetchedConversation.conversationText}</div>
        <p className="conversation-attribution">
          Conversation opened by <span>{fetchedConversation.username}</span> <br /> <span>{fetchedConversation.createdAt}</span>
        </p>
      </div>
      <div className="comment-container">
        <div className="comment-list">
          {fetchedConversation.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-text">{comment.comment}</p>
              <p className="comment-attribution"><span>{comment.username}</span> <span>{comment.createdAt}</span></p>
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <textarea 
          className="form-control" 
          rows="3" 
          placeholder="Type your comment..."
          value={commentText}
          onChange={handleChange}
          onFocus={checkAuthentication} //Checks if user is authenticated when they first click into the field, and if not will redirect them to login
        ></textarea>
        <button 
          type="button" 
          className="btn btn-primary comment-submit-btn"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>
    </div>
    </div>
  );
};

export default Conversation;



// This code is for another version I was trying in order to get it to update commentCount in the ConversationsList
// However changes in this version were throwing errors about inconsistent numbering of hooks between the fetch and refetch -- means I have conditional blocks where state is being managed resulting in the discrepancy. Need to take the hooks outside the conditional blocks.
// For now I am commenting this out and making active the code that works for everything except updating commentCount. Not a big issue.  New commentCount will be reflected after user refreshes of returns to the site.
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Auth from '../utils/auth';
// import { useMutation, useQuery } from '@apollo/client';
// import { ADD_COMMENT } from '../utils/mutations'; 
// import { GET_CONVERSATION_BY_ID, GET_ALL_PUBLIC_CONVERSATIONS } from '../utils/queries';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Conversation.css';

// const Conversation = ({ onClose }) => {
//   const [commentText, setCommentText] = useState('');
//   const conversationId = localStorage.getItem('selectedConversationId');
//   console.log(typeof(conversationId))

//   // Initialize navigate function so I can use it to redirect non-logged in users trying to leave comments to the login page and
//   // Check if the user is logged in (because a user shouldn't be able to leave a comment if not logged in)
//   const navigate = useNavigate(); 
//   const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

//   // Function to handle checking the user's authentication status and displaying an alert if not logged in
//   const checkAuthentication = () => {
//     if (!isLoggedIn) {
//       // Display toast notification
//       toast.info("You must be logged in to participate the the conversation. Redirecting you to login...", {
//         onClose: () => navigate('/login'), // Redirect to login page when the toast is closed or autoClose after 2.5 seconds.
//         autoClose: 2500,
//         position: 'top-center'
//       });
//     }
//   };

//   // Fetch conversation data
//   const { loading, error, data, refetch: refetchConversation } = useQuery(GET_CONVERSATION_BY_ID, {
//     variables: { conversationId: conversationId },
//   });

//   // Refetch conversation when conversationId changes
//   useEffect(() => {
//     if (conversationId) {
//       refetchConversation();
//     }
//   }, [conversationId, refetchConversation]);

//   // Mutation to add a comment
//   const [addComment, { commentError }] = useMutation(ADD_COMMENT);

//   const handleChange = (event) => {
//     const { value } = event.target;
//     setCommentText(value);
//   };
  
//   const handleCommentSubmit = async (event) => {
//     event.preventDefault();
//     if (!commentText) {
//       alert(`Oops! It seems your message is empty. Please add your thoughts.
//       `);
//       return;
//     } 
//     console.log("Im reaching here")
    
//     // Added function call to Check authentication status before adding comment
//     checkAuthentication();

//     try {
//       console.log("Im reaching here")
//       const { newComment } = await addComment({
//         variables: {
//           conversationId: conversationId,
//           comment: commentText,
//           username: Auth.getProfile().data.username
//         },
//       });

//       setCommentText(''); // Clear the comment text after submitting
//       refetchConversation(); // Refetch conversation data to update comments
//       refetchPublicConversations(); //Refetch all the conversations to update the list with the commentCount  
//     } catch (commentError) {
//       console.error('Error adding comment:', commentError);
//     }
//   };

//   useEffect(() => {
//     // Redirect non-logged in users when the component mounts
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [isLoggedIn, navigate]);

  
  
  


//   // Query to refetch all public conversations (to update the commentCount in the ConversationsList)
//   const { refetch: refetchPublicConversations } = useQuery(GET_ALL_PUBLIC_CONVERSATIONS);

//   return (
//     <div>
//       <ToastContainer
//         position="top-center"
//         autoClose={2500}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         style={{
//           '--toastify-icon-color-info': '#55828b', 
//           '--toastify-color-progress-info': '#55828b', 
//         }} 
//       />
//     <div className="conversation-container">
//       <div className="conversation-title">{fetchedConversation.conversationTitle}</div>
//       <div className="conversation-text-and-attribution">
//         <div className="conversation-text">{fetchedConversation.conversationText}</div>
//         <p className="conversation-attribution">
//           Conversation opened by <span>{fetchedConversation.username}</span> <br /> <span>{fetchedConversation.createdAt}</span>
//         </p>
//       </div>
//       <div className="comment-container">
//         <div className="comment-list">
//           {fetchedConversation.comments.map((comment, index) => (
//             <div key={index} className="comment">
//               <p className="comment-text">{comment.comment}</p>
//               <p className="comment-attribution"><span>{comment.username}</span> <span>{comment.createdAt}</span></p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="input-container">
//         <textarea 
//           className="form-control" 
//           rows="3" 
//           placeholder="Type your comment..."
//           value={commentText}
//           onChange={handleChange}
//           onFocus={checkAuthentication} //Checks if user is authenticated when they first click into the field, and if not will redirect them to login
//         ></textarea>
//         <button 
//           type="button" 
//           className="btn btn-primary comment-submit-btn"
//           onClick={handleCommentSubmit}
//         >
//           Add Comment
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Conversation;

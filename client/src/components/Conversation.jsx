import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT, DELETE_CONVERSATION } from '../utils/mutations'; 
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';
import './Conversation.css';

// const Conversation = ({ //conversationId, 
//   onClose }) => {
//   // Create a state to manage the posting of comments by users
//   const [commentText, setCommentText] = useState('');
//   const [addComment] = useMutation(ADD_COMMENT);
//   const navigate = useNavigate(); 
//   //console.log("Value of conversationId that is being passed from the homepage parent component:", conversationId);
//   let conversationId = localStorage.getItem('selectedConversationId');
//   console.log ('Value of conversationId retrieved from localStorage:', conversationId);
//   // Ensure conversationId is a string
//   const conversationIdString = conversationId.toString();

//   const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
//       variables: { conversationId: conversationIdString },
//   });

//   useEffect(() => {
//     if (data && data.conversation) {
//       setFetchedConversation(data.conversation); // Update fetchedConversation state when data is available
//     }
//   }, [data]);

//   useEffect(() => {
//       if (conversationId) {
//           refetch();
//       }
//   }, [conversationId, refetch]);

//   const handleCommentSubmit = async () => {
//     if (!Auth.loggedIn()) {
//       console.log('User not logged in. Redirecting to login page...');
//       navigate('/login');
//       return;
//     }

//     try {
//       const { data: { addComment: newComment } } = await addComment({
//         variables: {
//           conversationId: conversationIdString,
//           comment: commentText,
//         },
//       });

//       // Clear the comment textarea
//       setCommentText('');
//     } catch (error) {
//       console.error('Error adding comment:', error);
//     }
//   };

//     if  (loading) return <p>Loading...</p>;
//     if  (error) return <p>Error...</p>;

//     const { conversation: fetchedConversation } = data;
//     console.log ('Fetched conversation value:', fetchedConversation);
//     if (!fetchedConversation) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="conversation-container">
//         <div className="conversation-title">{fetchedConversation.conversationTitle}</div>
//         <div className="conversation-text-and-attribution">
//         <div className="conversation-text">{fetchedConversation.conversationText}</div>
//         <p className="conversation-attribution">
//           Conversation opened by <span>{fetchedConversation.username}</span> <br></br> <span>{fetchedConversation.createdAt}</span>
//         </p>
//         </div>
//         <div className="comment-container">
//           <div className="comment-list">
//             {fetchedConversation.comments.map((comment, index) => (
//               <div key={index} className="comment">
//                 <p className="comment-text">{comment.comment}</p>
//                 <p className="comment-attribution"><span>{comment.username}</span> <span>{comment.createdAt}</span></p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="input-container">
//           <textarea 
//             className="form-control" 
//             rows="3" 
//             placeholder="Type your comment..."
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//           ></textarea>
//           <button 
//             type="button" 
//             className="btn btn-primary comment-submit-btn"
//             onClick={handleCommentSubmit}
//           >
//             Add Comment
//           </button>
//         </div>
//       </div>
//     );
// };

// export default Conversation;

// import React, { useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_CONVERSATION_BY_ID } from '../utils/queries';
// import './Conversation.css';

// const Conversation = ({ //conversationId, 
//   onClose }) => {
//   //console.log("Value of conversationId that is being passed from the homepage parent component:", conversationId);
//   let conversationId = localStorage.getItem('selectedConversationId');
//   console.log ('Value of conversationId retrieved from localStorage:', conversationId);
//   // Ensure conversationId is a string
//   const conversationIdString = conversationId.toString();

//   const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
//       variables: { conversationId: conversationIdString },
//   });

//   useEffect(() => {
//       if (conversationId) {
//           refetch();
//       }
//   }, [conversationId, refetch]);

//     if  (loading) return <p>Loading...</p>;
//     if  (error) return <p>Error...</p>;

//     const { conversation: fetchedConversation } = data;
//     console.log ('Fetched conversation value:', fetchedConversation);
//     if (!fetchedConversation) {
//       return <p>Loading...</p>;
//     }

//     return (
//       <div className="conversation-container">
//         <div className="conversation-title">{fetchedConversation.conversationTitle}</div>
//         <div className="conversation-text-and-attribution">
//         <div className="conversation-text">{fetchedConversation.conversationText}</div>
//         <p className="conversation-attribution">
//           Conversation opened by <span>{fetchedConversation.username}</span> <br></br> <span>{fetchedConversation.createdAt}</span>
//         </p>
//         </div>
//         <div className="comment-container">
//           <div className="comment-list">
//             {fetchedConversation.comments.map((comment, index) => (
//               <div key={index} className="comment">
//                 <p className="comment-text">{comment.comment}</p>
//                 <p className="comment-attribution"><span>{comment.username}</span> <span>{comment.createdAt}</span></p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="input-container">
//           <textarea className="form-control" rows="3" placeholder="Type your comment..."></textarea>
//           <button type="button" className="btn btn-primary comment-submit-btn">Add Comment</button>
//         </div>
//       </div>
//     );
// };

// export default Conversation;

// import React, { useState, useEffect } from 'react';
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_CONVERSATION_BY_ID } from '../utils/queries';
// import { ADD_COMMENT } from '../utils/mutations';
// import './Conversation.css';

const Conversation = ({ onClose }) => {
  const [commentText, setCommentText] = useState('');
  const conversationId = localStorage.getItem('selectedConversationId');
  console.log(typeof(conversationId))

  const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
    variables: { conversationId: conversationId },
  });

  const [addComment, { commentError }] = useMutation(ADD_COMMENT);

  const [deleteConversation] = useMutation(DELETE_CONVERSATION);

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
  
  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    console.log("Im reaching here")
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
  
  // const handleEndConvo = async (event) => {
  //   event.preventDefault();
  //   console.log("Im reaching here - end convo")
  //   try {
  //     await deleteConversation({
  //       variables: {
  //         conversationId: conversationId,
  //         username: Auth.getProfile().data.username
  //       },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
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
        ></textarea>
        <button 
          type="button" 
          className="btn btn-primary comment-submit-btn"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
        {/* <button 
          type="button" 
          className="btn btn-primary end-convo-btn"
          onClick={handleEndConvo}
        >
          End Conversation

        </button> */}
      </div>
    </div>
  );
};

export default Conversation;

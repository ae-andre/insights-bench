import { userEffect } from 'react'
import { Link } from 'react-router-dom';
import './NewConversation.css';
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';

// ONCE THE POST REQUEST HAS BEEN SUBMITTED TO THE DATABASE AND THERE IS A NEW ID ASSIGNED WE CAN PASS IN, 
// WE DO A QUERY FOR A CONVERSATION BY ID AND PUSH ITS VALUES TO THE ELEMENTS

// const Conversation = ({ //conversationId, 
//   onClose }) => {
//   //console.log("Value of conversationId that is being passed from the homepage parent component:", conversationId);
//   let conversationId = ...;
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

    return (
      <div className="conversation-container">
        <div className="conversation-title">{fetchedConversation.conversationTitle}</div>
        <div className="conversation-text-and-attribution">
        <div className="conversation-text">{fetchedConversation.conversationText}</div>
        <p className="conversation-attribution">
          Conversation opened by <span>{fetchedConversation.username}</span> <br></br> <span>{fetchedConversation.createdAt}</span>
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
          <textarea className="form-control" rows="3" placeholder="Type your comment..."></textarea>
          <button type="button" className="btn btn-primary comment-submit-btn">Add Comment</button>
        </div>
      </div>
    );
};

export default Conversation;
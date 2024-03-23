import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations'; 
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';
import './Conversation.css';

const Conversation = ({ onClose }) => {
  const [commentText, setCommentText] = useState('');
  const conversationId = localStorage.getItem('selectedConversationId');
  console.log(typeof(conversationId))

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
      </div>
    </div>
  );
};

export default Conversation;

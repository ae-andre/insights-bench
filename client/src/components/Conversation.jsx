import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';
import './Conversation.css';

const Conversation = ({ //conversationId, 
  onClose }) => {
  //console.log("Value of conversationId that is being passed from the homepage parent component:", conversationId);
  let conversationId = localStorage.getItem('selectedConversationId');
  console.log ('Value of conversationId retrieved from localStorage:', conversationId);
  // Ensure conversationId is a string
  const conversationIdString = conversationId.toString();

  const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
      variables: { conversationId: conversationIdString },
  });

  useEffect(() => {
      if (conversationId) {
          refetch();
      }
  }, [conversationId, refetch]);

    if  (loading) return <p>Loading...</p>;
    if  (error) return <p>Error...</p>;

    const { conversation: fetchedConversation } = data;

    if (!fetchedConversation) {
      return <p>Loading...</p>;
    }

    return (
      <div className="conversation-container">
        <div className="conversation-title">{fetchedConversation.conversationTitle}</div>
        <div className="conversation-text">{fetchedConversation.conversationText}</div>
        <div className="comment-container">
          <div className="comment-list">
            {fetchedConversation.comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment.comment}</p>
                <p>{comment.createdAt}</p>
                <p>{comment.username}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="input-container">
          <textarea className="form-control" rows="3" placeholder="Type your message..."></textarea>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </div>
    );
};

export default Conversation;
import React from 'react';
import { Link } from 'react-router-dom';
import './ConversationsList.css';

const ConversationsList = ({ conversations, expertise, onConversationClick }) => {
  console.log('Received expertise:', expertise);
  console.log('Conversations:', conversations);
  
  return (
    <div className='conversations-list-container'>
      <ul className="list-group list-group-numbered">
        {conversations.map((conversation) => {
          console.log('Mapping Conversation:', conversation);
          return (
            <li key={conversation._id} className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                {/* Use Link component for navigation to a new conversation_id endpoint whenever a particular conversation.title is clicked */}
                <Link to={`/conversation/${conversation._id}`}
                onClick={() => onConversationClick(conversation._id)}
                >
                  <div className="fw-bold">{conversation.conversationTitle}</div>
                </Link>
              </div>
              <span className="badge rounded-pill">{conversation.commentCount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ConversationsList;
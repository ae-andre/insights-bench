import { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT, DELETE_CONVERSATION } from '../utils/mutations'; 
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';
import { GET_USER_BY_ID } from '../utils/queries';
import './Conversation.css';

const UserConversation = ({ onClose }) => {
  const [commentText, setCommentText] = useState("");
  const userProfile = Auth.getProfile(); 
  const userId = userProfile.data._id; 
  console.log(userId)
  // console.log(userProfile.data.conversation._id)
  
  // Fetch the user's conversation ID
  const {
    loading: userLoading,
    error: userError,
    data: userData,
  } = useQuery(GET_USER_BY_ID, {
    variables: { userId },
    skip: !userId,
  });

  const conversationId = userData?.user?.conversation?._id;
  console.log(userData)


  const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
    skip: !conversationId,
    variables: { conversationId },
  });

  const [addComment, { error: commentError }] = useMutation(ADD_COMMENT);

  const [deleteConversation] = useMutation(DELETE_CONVERSATION);

  useEffect(() => {
    if (conversationId) {
      refetch();
    }
  }, [conversationId, refetch]);

  const handleChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!conversationId) return;

    try {
      await addComment({
        variables: {
          conversationId,
          comment: commentText,
          username: userProfile.username,
        },
      });

      setCommentText("");
      refetch();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleEndConvo = async (event) => {
    event.preventDefault();
    console.log("Im reaching here - end convo")
    try {
      await deleteConversation({
        variables: {
          conversationId: conversationId,
          username: Auth.getProfile().data.username
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || userLoading) return <p>Loading...</p>;
  if (error || userError) return <p>Error...</p>;

  const fetchedConversation = data?.conversation;
  if (!fetchedConversation) {
    return <p className="font-light">We're finding a listener for you to share a bench with. Your thoughts are worth sharing. In the meanwhile, you can head over to the pavilion to check out some of the public conversations.</p>;
    
  }

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
        {fetchedConversation.isPrivate ? (
            <button 
            type="button" 
            className="btn btn-primary end-convo-btn"
            onClick={handleEndConvo}
          >
            End Conversation
  
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserConversation;

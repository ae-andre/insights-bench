import { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations'; 
import { useQuery } from '@apollo/client';
import { GET_CONVERSATION_BY_ID } from '../utils/queries';
import { GET_USER_BY_ID } from '../utils/queries';
import './Conversation.css';

const UserConversation = ({ onClose }) => {
  const [commentText, setCommentText] = useState("");
  const userProfile = Auth.getProfile(); 
  const userId = userProfile._id; 

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
  console.log(conversationId)

  const { loading, error, data, refetch } = useQuery(GET_CONVERSATION_BY_ID, {
    skip: !conversationId, // Skip this query until conversationId is obtained
    variables: { conversationId },
  });

  const [addComment, { error: commentError }] = useMutation(ADD_COMMENT);

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

  if (loading || userLoading) return <p>Loading...</p>;
  if (error || userError) return <p>Error...</p>;

  const fetchedConversation = data?.conversation;
  if (!fetchedConversation) {
    return <p>No conversation available.</p>;
  }

  return (
    <div className="conversation-container">
      <div className="conversation-title">
        {fetchedConversation.conversationTitle}
      </div>
      <div className="conversation-text-and-attribution">
        <div className="conversation-text">
          {fetchedConversation.conversationText}
        </div>
        <p className="conversation-attribution">
          Conversation opened by <span>{fetchedConversation.username}</span>{" "}
          <br /> <span>{fetchedConversation.createdAt}</span>
        </p>
      </div>
      <div className="comment-container">
        <div className="comment-list">
          {fetchedConversation.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p className="comment-text">{comment.comment}</p>
              <p className="comment-attribution">
                <span>{comment.username}</span> <span>{comment.createdAt}</span>
              </p>
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

export default UserConversation;
import {
    SIGN_UP,
    LOG_IN,
    LOG_OUT,
    UPDATE_USERNAME,
    UPDATE_PASSWORD,
    UPDATE_BUDDY,
    UPDATE_AVAILABILITY,
    UPDATE_USERS_CONVERSATION_FIELD,
    DELETE_USER_UNSUBSCRIBE,
    CREATE_CONVERSATION,
    UPDATE_CONVERSATION_TITLE,
    UPDATE_CONVERSATION_TEXT,
    CREATE_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
    UPDATE_LISTENER,
    TOGGLE_IS_CLOSED,
    TOGGLE_IS_PRIVATE,
    CLOSE_CONVERSATION
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_UP':
        return {
          ...state,
          isAuthenticated: true,
          currentUser: action.user,
        };
  
      case 'LOG_IN':
        return {
          ...state,
          isAuthenticated: true,
          currentUser: action.user,
        };
  
      case 'LOG_OUT':
        return {
          ...state,
          isAuthenticated: false,
          currentUser: null,
        };
  
      case 'UPDATE_USERNAME':
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            username: action.username,
          },
        };
  
      case 'UPDATE_PASSWORD':
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            password: action.password,
          },
        };
  
      case 'UPDATE_BUDDY':
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            buddy: action.buddy,
          },
        };
  
      case 'TOGGLE_AVAILABILITY':
        return {
          ...state,
          currentUser: {
            ...state.currentUser,
            availability: action.availability,
          },
        };
  
       case 'UPDATE_USERS_CONVERSATION_FIELD':
          return {
            ...state,
            currentUser: {
              ...state.currentUser,
              conversation: action.conversation,
              },
            };
  
      case 'DELETE_USER_UNSUBSCRIBE':
        return {
          ...state,
          currentUser: null,
          isAuthenticated: false,
        };
  
      case 'CREATE_CONVERSATION':
        return {
          ...state,
          conversations: [...state.conversations, action.conversation],
        };
  
      case 'UPDATE_CONVERSATION_TITLE':
        return {
          ...state,
          conversations: state.conversations.map(conversation => {
            if (conversation._id === action.conversationId
                ) {
              return {
                ...conversation,
                conversationTitle: action.title,
              };
            }
            return conversation;
          }),
        };
  
      case 'UPDATE_CONVERSATION_TEXT':
        return {
          ...state,
          conversations: state.conversations.map(conversation => {
            if (conversation._id === action.conversationId) {
              return {
                ...conversation,
                conversationText: action.text,
              };
            }
            return conversation;
          }),
        };
  
      case 'CREATE_COMMENT':
        return {
          ...state,
          comments: [...state.comments, action.comment],
        };
  
      case 'UPDATE_COMMENT':
        return {
          ...state,
          comments: state.comments.map(comment => {
            if (comment._id === action.commentId) {
              return {
                ...comment,
                comment: action.text,
              };
            }
            return comment;
          }),
        };
  
      case 'DELETE_COMMENT':
        return {
          ...state,
          comments: state.comments.filter(comment => comment._id !== action.commentId),
        };
  
      case 'UPDATE_LISTENER':
        return {
          ...state,
          listener: action.listener,
        };
  
      case 'TOGGLE_IS_CLOSED':
        return {
          ...state,
          conversations: state.conversations.map(conversation => {
            if (conversation._id === action.conversationId) {
              return {
                ...conversation,
                is_closed: !conversation.isClosed,
              };
            }
            return conversation;
          }),
        };
  
      case 'TOGGLE_IS_PRIVATE':
        return {
          ...state,
          conversations: state.conversations.map(conversation => {
            if (conversation._id === action.conversationId) {
              return {
                ...conversation,
                isPrivate: !conversation.isPrivate,
              };
            }
            return conversation;
          }),
        };
  
      case 'CLOSE_CONVERSATION':
        return {
          ...state,
          conversations: state.conversations.map(conversation => {
            if (conversation._id === action.conversationId) {
              return {
                ...conversation,
                is_closed: true,
              };
            }
            return conversation;
          }),
        };
  
      default:
        return state;
    }
  };
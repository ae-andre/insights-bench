import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PUBLIC_CONVERSATION } from '../utils/mutations';
import { GET_ALL_PUBLIC_CONVERSATIONS } from '../utils/queries';
import Auth from '../utils/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ConversationsFormPublic.css'
import Conversation from './Conversation';


const ConversationsFormPublic = (props) => {

  const [convoForm, setConvoForm] = useState({ expertise: '', conversationTitle: '', conversationText: ''})
  const [conversationStarted, setConversationStarted] = useState(false); 
  
  const [addPublicConversation, { error }] = useMutation(ADD_PUBLIC_CONVERSATION);
  const { refetch: refetchConversations } = useQuery (GET_ALL_PUBLIC_CONVERSATIONS);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setConvoForm({
      ...convoForm,
      [name]: value,
    })
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Character limit for conversation title
    if (convoForm.conversationTitle.length > 50) {
      toast.info('Conversation title must be 50 characters or less.');
      return;
    }

    // Character limit for conversation text
    if (convoForm.conversationText.length > 500) {
      toast.info('Details must be 500 characters or less.');
      return;
    }

    try {
      const { data } = await addPublicConversation({
        variables: {
            conversationTitle: convoForm.conversationTitle,
            conversationText: convoForm.conversationText,
            expertise: convoForm.expertise,
            username: Auth.getProfile().data.username,
            isPrivate: false,
          }
      });

      console.log(data)
      localStorage.setItem('selectedConversationId', data.addPublicConversation._id);
      setConversationStarted(true)
      setConvoForm({ expertise: '', conversationTitle: '', conversationText: '' });
      // Refetch conversations data to update the ConversationsList
      refetchConversations();
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={true}
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
      {conversationStarted ? (
        <Conversation />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-10 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center mb-0 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Start a Conversation in the Pavilion
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
            <div>
                <label
                  htmlFor="expertise"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  What's on your mind:
                </label>
                <select
                  id="expertise"
                  name="expertise"
                  className="bg-gray-50 border-1 input-option text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={convoForm.expertise}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an area you would like to discuss
                  </option>
                  <option value="financial">Financial Problems</option>
                  <option value="personal">
                    Personal/Relationship Problems
                  </option>
                  <option value="career">
                    Career-related Problems
                  </option>
                </select>
            </div>

            <div>
              <label
                htmlFor="conversationTitle"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                I would like to talk about:
              </label>
              <div className="mt-2">
                <input
                  id="conversationTitle"
                  name="conversationTitle"
                  type="text"
                  required
                  value={convoForm.conversationTitle}
                  onChange={handleChange}
                  placeholder="  Topic of the discussion"
                  className="block w-full rounded-md border-1 input-option py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="pt-2 inset-y-0 right-0 pr-2 flex items-center text-sm text-gray-400">{convoForm.conversationTitle.length}/50</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="conversationText"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                And some more details...
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="conversationText"
                  id="conversationText"
                  placeholder="  Your story goes here.."
                  value={convoForm.conversationText}
                  onChange={handleChange}
                  className="block mb-0 w-full rounded-md border-1 input-option py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="pt-2 inset-y-0 right-0 pr-2 flex items-center text-sm text-gray-400">{convoForm.conversationText.length}/500</span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="button flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                // onClick={ refreshPage }
              >
                Take a Seat!
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


export default ConversationsFormPublic;
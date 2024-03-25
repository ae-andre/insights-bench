import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_CONVERSATION, FIND_BUDDY, DELETE_CONVERSATION } from '../utils/mutations';
import Auth from '../utils/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserConversation from './UserConversation';

const ConversationsForm = (propms, action) => {

  const navigate = useNavigate(); // Initialize the navigate function using the useNavigate hook
    
  //Define handleNavigate function to navigate to the specified URL
  const handleNavigation = (url) => {
    
      navigate(url); // Use the navigate function to navigate to the specified URL
      window.location.reload();
  };

  const [convoForm, setConvoForm] = useState({ expertise: '', conversationTitle: '', conversationText: ''})
  const [haveBuddy, setHaveBuddy] = useState(false)
  const [conversationStarted, setConversationStarted] = useState(false); 
  const [failedMatch, setFailedMatch] = useState(false)
  
  const [addConversation, { error }] = useMutation(ADD_CONVERSATION)
  const [findBuddy] = useMutation(FIND_BUDDY)
  const [deleteConversation] = useMutation(DELETE_CONVERSATION)

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
      const { data } = await addConversation({
        variables: {
            conversationTitle: convoForm.conversationTitle,
            conversationText: convoForm.conversationText,
            expertise: convoForm.expertise,
            username: Auth.getProfile().data.username,
            isPrivate: true,
          }
      });

      // console.log(data)
      // console.log(data.addConversation._id)

      const bud = await findBuddy({
        variables: {expertise: convoForm.expertise},
      });

      console.log(bud)

      console.log(bud.data.findBuddy)
      if (bud.data.findBuddy === null) {
        // console.log(data.addConversation._id)
        // console.log(haveBuddy)
        // console.log(conversationStarted)
        await deleteConversation({
          variables: {
            conversationId: data.addConversation._id,
            username: Auth.getProfile().data.username
        }});
        setHaveBuddy(false);
        setConversationStarted(false);
        setFailedMatch(true);
        setConvoForm({ expertise: '', conversationTitle: '', conversationText: '' });
      } else {
        setHaveBuddy(true);
        setConversationStarted(true)
      }
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
      {failedMatch ? (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-card bg-white rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-0">Sorry!</h2>
              <p>We apologize for the inconvenience, but it seems our listeners are currently experiencing a high volume of requests, 
                making it difficult to find an available match at the moment. However, why not take this opportunity to explore the 
                Pavilion? It's a great place to while waiting. We appreciate your patience and understanding,
                 and we'll do our best to connect you as soon as possible.</p>
            </div>
            <div className="button-and-p-container flex justify-center mt-6 space-y-4 flex-col md:flex-row md:space-x-8">
              <div id="button-and-p-column-pavilion" className="button-and-p-column flex flex-col items-center">
                <button id="pavilion-button" className="button btn btn-secondary" onClick={() => handleNavigation('/')}>Pavilion</button>
                <p className="text-sm text-gray-500">(public conversation)</p>
              </div>
              <div id="button-and-p-column-my-bench" className="button-and-p-column flex flex-col items-center">
                <button id="my-bench-button" className="button btn btn-primary" onClick={() => handleNavigation('/my-bench')}>MyBench</button>
                <p className="text-sm text-gray-500">(private conversation)</p>
              </div>
              <div id="button-and-p-column-playground" className="button-and-p-column flex flex-col items-center">
                <button id="playground-button" className="button btn btn-primary" onClick={() => handleNavigation('/resources')}>Playground</button>
                <p className="text-sm text-gray-500">(resources page)</p>
              </div>
            </div>
          </div>
        </div>
      ) : !conversationStarted && !haveBuddy ? (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Your bench awaits...
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
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
                  required
                  className="input-option bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    Work/School Problems
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
                  className="pl-2 input-option block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  required
                  placeholder="  Your story goes here.."
                  value={convoForm.conversationText}
                  onChange={handleChange}
                  className="mb-0 input-option block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="pt-2 inset-y-0 right-0 pr-2 flex items-center text-sm text-gray-400">{convoForm.conversationText.length}/500</span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md private-submit px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
                Find a Bench!
              </button>
            </div>
          </form>
        </div>
      </div>
      ) : (
        <UserConversation />
      )}
    </>
  );
}


export default ConversationsForm;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_CONVERSATION, FIND_BUDDY } from '../utils/mutations';
import Auth from '../utils/auth';

const ConversationsForm = (props) => {

  function refreshPage(){ 
    window.location.reload(); 
  }

  const [convoForm, setConvoForm] = useState({ expertise: '', conversationTitle: '', conversationText: ''})
  
  const [addConversation, { error }] = useMutation(ADD_CONVERSATION)
  const [findBuddy] = useMutation(FIND_BUDDY)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setConvoForm({
      ...convoForm,
      [name]: value,
    })
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

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

      const { buddy } = await findBuddy({
        variables: {expertise: convoForm.expertise}
      });

      console.log(data)
      console.log(buddy)
      setConvoForm({ expertise: '', conversationTitle: '', conversationText: '' });
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Let's put things to bench
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                  className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={ refreshPage }
              >
                Find a Bench!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default ConversationsForm;
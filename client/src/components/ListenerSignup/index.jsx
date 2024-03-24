import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_LISTENER } from '../../utils/mutations';
import { GET_ALL_USERNAMES } from '../../utils/queries';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ListenerSignup.css';
import ModalAfterLogin from '../ModalAfterLogin';
import Auth from '../../utils/auth';

const signUpListener = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    expertise: '', //database is expecting a string, not an array, so we only allow one box to be selected
  });
  const [addListener, { error, data }] = useMutation(ADD_LISTENER);
  const [showModal, setShowModal] = useState(false); // state to control the modal visibility, initially set to false (modal is not showing)
  const { loading, error: queryError, data: queryData } = useQuery(GET_ALL_USERNAMES);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    // Validate if at least one checkbox is checked
    if (!formState.expertise) {
      toast.info('Please select the area you would like to help others with.');
      return;
    }

    //Check password length
    if (formState.password.length < 8) {
      toast.info('Please enter a longer password. 8 characters minimum.');
      return;
    }

    console.log('Form state:', formState);

    if (queryError) {
      console.log('Query error:', queryError);
      return;
    }

    if (queryData) {
      console.log('Query data:', queryData);
      // Check if username already exists
      const existingUser = queryData.users.find(user => {
        console.log('Checking username:', user.username);
        return user.username ===formState.username;
      });
      if (existingUser) {
        toast.info('Your great username already belongs to another user. Please choose another.');
        return;
      }
    }

    try {
      const { data } = await addListener({
        variables: { 
          ...formState, 
          role: "listener"}
      });

      Auth.login(data.addListener.token);

      // After successful signup, set showModal to true to display the modal
      setShowModal(true);
    } catch (e) {
      console.error(e);
    }
  };

  console.log('showModal:', showModal);

    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={2000}
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
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
            {showModal ? (
              <ModalAfterLogin onClose={() => setShowModal(false)} action="signup" />
            ) : (
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Become a Listener Today
                </h2>
      
                <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="username" className="block text-base font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
            <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-900">
                    I want to help others with: 
                  </label>
                </div>
            </div>

            <fieldset >
                <legend className="sr-only">Expertise</legend>
                <div className="space-y-5">
                    <div className="relative flex items-start">
                      <input
                        id="financial"
                        name="expertise"
                        type="radio" //changed from checkboxes to radio buttons because radios permit only one choice, checkboxes permit multiples and we want only one expertise because database is expecting a string, not an array
                        value="financial"
                        onChange={handleChange}
                        className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-600"
                      />
                      <label htmlFor="financial" className="ml-3 text-sm leading-6">
                        Financial Problems
                      </label>
                    </div>
                    <div className="relative flex items-start">
                      <input
                          id="personal"
                          name="expertise"
                          type="radio"
                          value="personal"
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-600"
                      />
                      <label htmlFor="personal" className="ml-3 text-sm leading-6">
                        Personal Problems
                      </label>
                    </div>
                    <div className="relative flex items-start">
                      <input
                          id="career"
                          name="expertise"
                          type="radio"
                          value="career"
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 focus:ring-indigo-600"
                      />
                      <label htmlFor="career" className="ml-3 text-sm leading=6">
                        Career-related Problems
                      </label>
                    </div>
                </div>
            </fieldset>

            <div>
                <h1 className="font-bold text-sm py-2">Disclaimer:</h1>
                <p className="text-xs">As a listener on this platform, it's important to understand that while we're here to offer support and lend an empathetic ear,
                    we are not trained therapists or counselors. Our intention is to provide a safe space for others to express themselves and 
                    share your thoughts and feelings. However, we may not have the expertise to offer professional advice or solutions 
                    to complex issues.
                </p>
            </div>
        
            <div>
                <button
                  type="submit"
                  className="change-world-button flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Start Changing the World Today!
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Want to be a sharer? {' '}
              <Link to="/sharer-signup" className="sharer-instead font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Become a sharer instead
              </Link>
            </p>
          </div>
        </div>
      )}
      </div>
      </>
    );
  };

export default signUpListener;
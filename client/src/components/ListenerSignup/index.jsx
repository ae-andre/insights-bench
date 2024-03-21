import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_LISTENER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const signUpListener = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    // financial: false,
    // personal: false,
    // career: false,
  });
  const [addListener, { error, data }] = useMutation(ADD_LISTENER);

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

    try {
      const checkedValue = document.querySelector('.expertiseCheckbox:checked').value;
      console.log(checkedValue)
      const { data } = await addListener({
        variables: { 
          ...formState, 
          expertise: checkedValue ,
          role: "listener"}
      });

      Auth.login(data.addListener.token);
    } catch (e) {
      console.error(e);
    }
  };
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Become a Listener Today
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                <legend className="sr-only">Notifications</legend>
                <div className="space-y-5">
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="financial"
                                type="checkbox"
                                value="financial"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 expertiseCheckbox"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                                Financial Problems
                            </label>{' '}
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="personal"
                                type="checkbox"
                                value="personal"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 expertiseCheckbox"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                                Personal/Relationship Problems
                            </label>{' '}
                        </div>
                    </div>
                    <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                            <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="career"
                                type="checkbox"
                                value="career"
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 expertiseCheckbox"
                            />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                                Work/School Problems
                            </label>{' '}
                        </div>
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
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Start Changing the World Today!
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Want to be a sharer? {' '}
              <Link to="/sharer-signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Become a sharer instead
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }

export default signUpListener;
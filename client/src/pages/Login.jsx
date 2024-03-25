import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from "react-router-dom"; 
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalAfterLogin from '../components/ModalAfterLogin';
import './Login.css';

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: ''});
  const [showModal, setShowModal] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    })
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log("Mutation data:", data);

      Auth.login(data.login.token);
      // Show modal upon successful login
    } catch (e) {
      console.error(e)
      toast.info('Sorry, we couldn\'t log you in. Please check for errors and try again.');
    }

    // clear form values 
    setFormState({
      username: '',
      password: '',
    })
  };

  const handleNavigation = (redirectUrl) => {
    navigate(redirectUrl);
  };

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
    <main className="flex min-h-full flex-1 justify-center px-6 py-12 lg:px-8">
      {/* <div className="mt-14 sm:mx-auto sm:w-full sm:max-w-sm"> */}
        {data && data.login.token ? (
          <ModalAfterLogin onClose={() => setShowModal(false)} />
        ) : (
          <div className="sm:mx-auto sm:w-full sm:max-w-sm get-started">
              <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Welcome Back!
              </h2>
              <div className="col image-column-left">
                <img className="login-image" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1711236602/ed00a3363254967682613287d9777213_nsf7sy.jpg" alt="simple line drawing of a pavilion with perimeter bench seating" />
              </div>
            </div>
          )}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm my-12">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formState.username}
                    required
                    onChange={handleChange}
                    className="block w-full rounded-md input-color border-1 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md input-color border-1 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <br></br>
              <div>
                <button
                  type="submit"
                  className="submit-button flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            {console.log("Data:", data)}
            <p className="not-a-member mt-10 text-center text-sm text-gray-500">
              Not a member?&nbsp;&nbsp;&nbsp;
              <Link to="/role" className="link-to-signup font-semibold leading-6" > Sign Up</Link>
            </p>
          </div>
        </main>
          </>
)}
  

export default Login;
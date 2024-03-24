import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_SHARER } from '../../utils/mutations';
import "./SharerSignup.css"
import ModalAfterLogin from '../ModalAfterLogin';
import Auth from '../../utils/auth';


const signUpSharer = (props) => {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });
  const [addSharer, { error, data }] = useMutation(ADD_SHARER);
  const [showModal, setShowModal] = useState(false); // state to control the modal visibility, initially set to false (modal is not showing)

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
      const { data } = await addSharer({
        variables: { ...formState, role: "sharer" },
      });

      console.log(data)

      Auth.login(data.addSharer.token);

      // After successful signup, set showModal to true to display the modal
      setShowModal(true);
    } catch (e) {
      console.error(e);
    }
  };

  console.log('showModal:', showModal);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {showModal ? (
          <ModalAfterLogin onClose={() => setShowModal(false)} action="signup" />
        ) : (
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Become a Sharer Today
            </h2>
          </div>
        )}
  
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
              <h1 className="font-bold text-sm py-2">Disclaimer:</h1>
              <p className="text-xs">Before you proceed to share your thoughts and experiences, 
                please note that this platform does not provide professional therapy or counseling services. 
                While listeners are here to listen and offer support, they are not trained therapists.
              </p>
            </div>
  
            <div>
              <button
                type="submit"
                className="share-today-button flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Sharing Today!
              </button>
            </div>
          </form>
  
          <p className="mt-10 text-center text-sm text-gray-500">
            Want to be a listener? {' '}
            <Link to="/listener-signup" className="listener-instead font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Become a listener instead
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default signUpSharer;
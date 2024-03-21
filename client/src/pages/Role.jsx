import { useState, React } from 'react';
import { useMutation } from '@apollo/client';
import SharerSignUp from '../components/SharerSignup/index';
import ListenerSignUp from '../components/ListenerSignup/index';

// import { ADD_ } from '../utils/mutations';
// import Auth from '../utils/auth';

// const signupRoleSelect = () => {
//     const [roleSelect, setRoleSelect] = useState({
//       sharer: false,
//       email: '',
//       password: '',
//     });
  
//     const handleChange = (event) => {
//       const { name: value } = event.target;
  
//       setFormState({
//         ...formState,
//         [name]: value,
//       });
//     };



const RoleSelection = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const isListener = true;


    const handleRender = () => {
        setSelectedRole({
            listener: true,
            sharer: false,
        })
        if (isListener) {
            return <ListenerSignUp />
        } else {
            return <SharerSignUp />
        }
    };

    return (
        <div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6 text-center">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900">Choose a seat on the bench!</h3>
                <br></br>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 text-sm mt-2 max-w-xs border-r">
                        <p className="sharer-description my-9">
                            Express thoughts, experiences, and emotions in a safe and supportive environment. 
                            By sharing, individuals have the opportunity to be heard, validated, and understood by others in the community. Sharing can be a 
                            powerful tool for self-expression and personal growth, but it's crucial to prioritize mental health and seek professional help when needed.
                        </p>
                        <button
                            type="button"
                            value={selectedRole.sharer}
                            name="sharer"
                            className="inline-flex mx-6 my-7 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={() => handleRender()}
                            >
                            Sharer
                        </button>
                    </div>
                    <div className="p-4 text-sm mt-2 max-w-xs">
                        <p className="listener-description my-9">
                            Provide empathetic and nonjudgmental support to those who choose to share their thoughts 
                            and experiences. Listeners offer their time and attention to actively engage with the sharer, demonstrating care and understanding. By actively 
                            listening and offering support, listeners play a vital role in fostering a sense of community and connection within the platform.
                        </p>
                        <button
                            type="button"
                            value={selectedRole.listener}
                            name="listener"
                            className="inline-flex mx-6 my-7 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            onClick={() => handleRender()}
                            >
                            Listener
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
  }

export default RoleSelection;
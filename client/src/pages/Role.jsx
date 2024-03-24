import { useState, React } from 'react';
import { useMutation } from '@apollo/client';
import SharerSignUp from '../components/SharerSignup/index';
import ListenerSignUp from '../components/ListenerSignup/index';
import './Role.css';

const RoleSelection = () => {
    const [selectedRole, setSelectedRole] = useState('');

// const RoleSelection = (prop) => {
//     const [selectedRole, setSelectedRole] = useState('');

    const handleRender = (role) => {
        setSelectedRole(role);
    }; 


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

    return (
        <div>
            {/* <div className="fixed inset-0 z-10 w-screen overflow-y-auto"> */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 items-center">
                {selectedRole ? (
                    selectedRole === 'sharer' ? <SharerSignUp /> : <ListenerSignUp />
                ) : (
                    <div className="bg-white shadow sm:rounded-lg">
                        <div className="overall-card px-4 py-4 sm:p-6 text-center">
                            <h3 className="title text-2xl font-semibold leading-6 text-gray-900 mb-0">Choose a seat on the bench!</h3>
                            <br />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="sharer-card-body p-4 text-sm mt-2 max-w-xs border-r">
                                    <div>
                                        <img className="sharer-image" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1711238290/sharer_g9dvcp.png" alt="simple line drawing of a pavilion with perimeter bench seating" />
                                    </div>
                                    <p className="sharer-description mb-7">
                                        Express thoughts, experiences, and emotions in a safe and supportive environment. 
                                        By sharing, individuals have the opportunity to be heard, validated, and understood by others in the community. Sharing can be a 
                                        powerful tool for self-expression and personal growth, but it's crucial to prioritize mental health and seek professional help when needed.
                                    </p>
                                    <button
                                        type="button"
                                        // value={selectedRole.sharer}
                                        // name="sharer"
                                        id="sharer-submit-button"
                                        className="inline-flex mx-6 my-7 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        onClick={() => handleRender('sharer')}
                                    >
                                        &nbsp;Sharer&nbsp;
                                    </button>
                                </div>
                                <div className="listener-card-body p-4 text-sm mt-2 max-w-xs">
                                    <div>
                                        <img className="listener-image" src="https://res.cloudinary.com/dsdsdv6zj/image/upload/v1711238289/listener_ou6luo.png" alt="simple line drawing of a pavilion with perimeter bench seating" />
                                    </div>
                                    <p className="listener-description mt-1/2">
                                        Provide empathetic and nonjudgmental support to those who choose to share their thoughts and experiences
                                        . Listeners offer their time and attention to actively engage with the sharer, demonstrating care and understanding. By actively 
                                        listening and offering support, listeners fosters a sense of community and connection within the platform.
                                    </p>
                                    <button
                                        type="button"
                                        // value={selectedRole.listener}
                                        // name="listener"
                                        id="listener-submit-button"
                                        className="inline-flex mx-6 my-7 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm "
                                        onClick={() => handleRender('listener')}
                                    >
                                        Listener
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
             {/* </div> */}
             {/*selectedRole === 'sharer' && <SharerSignUp />*/}
             {/*selectedRole === 'listener' && <ListenerSignUp />*/}
        </div>
      );
    }

export default RoleSelection;
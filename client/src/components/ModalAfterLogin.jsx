import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalAfterLogin.css'

const ModalAfterLogin = ({ onClose, action }) => {
    const navigate = useNavigate(); // Initialize the navigate function using the useNavigate hook
    
    //Define handleNavigate function to navigate to the specified URL
    const handleNavigation = (url) => {
        navigate(url); // Use the navigate function to navigate to the specified URL
      };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-card bg-white rounded-lg p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-0">Success!</h2>
          {action === 'login' ? (
              <p>Your login was successful. <br />Where would you like to go now?</p>
          ) : (
              <p>Your sign up was successful. <br />Where would you like to go now?</p>
          )}
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
  );
};

export default ModalAfterLogin;
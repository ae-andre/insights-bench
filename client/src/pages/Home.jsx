// This file contains code that will render the Home page/landing page
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ConversationsList from '../components/ConversationsList';
import Conversation from '../components/Conversation';
import ConversationsFormPublic from '../components/ConversationsFormPublic';
import { GET_ALL_PUBLIC_CONVERSATIONS } from '../utils/queries';
import AuthService from '../utils/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'

const Home = () => {
    // Use state to manage the display of conversations and the conditional rendering of the welcome blurb, start a conversation dialogue or detailed conversation view
    const [conversationsByCategory, setConversationsByCategory] = useState(new Map());
    const [selectedConversationId, setSelectedConversationId] = useState(null);
    console.log("What the homepage (parent component) is passing to Conversation component as selectedConversationId:", selectedConversationId);
    const [isStartingPublicConversation, setIsStartingPublicConversation] = useState(false);
    const location = useLocation(); // Use the useLocation hook to get the current location
    const isStartConversationPage = location.pathname ==='/start-conversation'; 

    // Expect that conversations will be an array of fetched conversation objects
    const { loading, error, data } = useQuery(GET_ALL_PUBLIC_CONVERSATIONS);

    // Installation logic
    const [showInstallButton, setShowInstallButton] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setShowInstallButton(true);
            window.deferredPrompt = event;
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        const promptEvent = window.deferredPrompt;
        if (promptEvent) {
            promptEvent.prompt();
            const userChoice = await promptEvent.userChoice;
            if (userChoice.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            window.deferredPrompt = null;
            setShowInstallButton(false);
        }
    };

    const handleConversationClick = (conversationId) => {
      console.log('Clicked conversation ID:', conversationId);
      localStorage.setItem('selectedConversationId', conversationId);
      setSelectedConversationId(conversationId);
      setIsStartingPublicConversation(false)
      console.log('Selected conversation ID after update:', selectedConversationId);
    };

    const navigate = useNavigate();

    const handleStartPublicConversation = () => {
        if (AuthService.loggedIn()) {
            setIsStartingPublicConversation(true);
            navigate('/start-conversation');
        } else {
            toast.info("You must be logged in to start a conversation. Redirecting you to login...", {
                autoClose: 2500,
                onClose: () => navigate('/login'),
                position: 'top-center'
            });
        }
    };

    useEffect(() => {
        if (data && data.conversations) {
            const categorizedConversations = new Map();

            data.conversations.forEach((conversation) => {
                const category = conversation.expertise;
                if (!categorizedConversations.has(category)) {
                    categorizedConversations.set(category, []);
                }
                categorizedConversations.get(category).push(conversation);
            });

            setConversationsByCategory(categorizedConversations);
        }
    }, [data]);

  return (
    <div className="main-content container">
        <div className="row">
          {isStartConversationPage || isStartingPublicConversation ? (
            <ConversationsFormPublic />
          ) : selectedConversationId ? (
            <Conversation
              conversationId={selectedConversationId}  
              onClose={() => setSelectedConversationId(null)}
            />
          ) : (
                <>
                    <div className="col">
                        <div className="welcome-blurb-public-conversation-forum">
                            <h2 className="main-page-title pacifico-regular">Welcome to Soul Bench</h2>
                            <h2 className="byline-quote reenie-beanie-regular">~Remember: even when life feels unstable, there's always a bench nearby to support you!</h2>
                            <p className="jost-uniquifier">
                            Ever find yourself on a bench, pouring out your problems to a complete stranger? Ever marvelled at how patiently a stranger 
                            listens and what apt counsel they can give? Do you regularly find yourself being that listener? In a world of increasing social 
                            isolation, and unprecedented demand for costly mental health resources, Soul Bench offers a free virtual forum for talking through 
                            life's perplexities with anonymous others.
                            </p>
                            < div className="">
                                <a href ="#welcome-to-pavilion"><button className="goto-pavilion">Explore the pavilion</button></a>
                                <button id="install-button" className="install-button">Install Soul Bench</button>
                                <img className="homepage-img" src='https://res.cloudinary.com/dsdsdv6zj/image/upload/v1711305274/homepage_sno7jy.png' alt="Line drawing of a street light, bench, and tree" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
        <div className="row public-conversations-section">
          <h3 id="welcome-to-pavilion">Grab a bench in the pavilion</h3>
          <div className="public-conversations-header-section">
            <div className="row">
              {/* <div className="col image-column-left">
                <img className="pavilion-image" src="https://res.cloudinary.com/dqtpaispt/image/upload/v1710690242/eliptical_pavilion_gym6bm.png" alt="simple line drawing of a pavilion with perimeter bench seating" />
              </div> */}
              <div className="col title-and-blurb-column-middle">
                {/* <h3 id="welcome-to-pavilion-title">Grab a bench in the pavilion</h3> */}
                <p id="welcome-to-pavilion-blurb">There are always ongoing conversations here in the pavilion. Click to view. Login to participate. Logged in users can start a new public conversation here or a private conversation on their own bench at login. </p>
              </div>
              <div className="col button-column-right">
              <a href ="#conversation"><button id="start-public-conversation-btn" onClick={handleStartPublicConversation}>+ New Public Conversation</button></a>
              </div>
            </div>
          </div>
          <div className="public-conversations-list-section">
            <div className="row">
              <div className="col">
                <h3 className="conversations-list-header">Financial</h3>
                <ConversationsList
                  conversations={conversationsByCategory.get('financial') || []}
                  expertise="Financial"
                  onConversationClick={handleConversationClick}
                />
              </div>
              <div className="col">
                <h3 className="conversations-list-header">Personal</h3>
                <ConversationsList
                  conversations={conversationsByCategory.get('personal') || []}
                  expertise="Personal"
                  onConversationClick={handleConversationClick}
                />
              </div>
              <div className="col">
                <h3 className="conversations-list-header">Career</h3>
                <ConversationsList
                  conversations={conversationsByCategory.get('career') || []}
                  expertise="Career"
                  onConversationClick={handleConversationClick}
                />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={2500}
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
        <Outlet />
    </div>
);
};

export default Home;

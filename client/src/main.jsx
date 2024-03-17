import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css';
import Home from './pages/Home'
import Conversation from './components/Conversation.jsx'
// import Profile from './pages/Profile'
// import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/conversation/:id', // The route for an individual conversation, using the Conversation component for display
        element: <Home />,
      },
      {
        path: '/start-conversation', // The route for starting a conversation
        element: <StartConversation />, // You need to create StartConversation component
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import MyBench from './pages/MyBench.jsx'
import Role from './components/Role/index.jsx' 
import SharerSignup from './components/SharerSignup/index.jsx' 
import ListenerSignup from './components/ListenerSignup/index.jsx' 
//import Conversation from './components/Conversation.jsx
import Error from './pages/Error'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/conversation/:id', // The route for an individual conversation, using the Conversation component for display
        element: <Home />, //Although a different component (Conversation) is displaying thanks to conditional rendering, it is still the Home page.
      },
      {
        path: '/start-conversation', // The route for starting a conversation
        element: <Home />, // Although this is a different view thanks to conditional rendering, the ConversationsForm component still displays on the Home page
      },
      {
        path: '/login', // The route to the Login page
        element: <Login />,
      },
      {
        path: '/role', // Route for the Role component
        element: <Role />,
      },
      {
        path: '/sharer-signup', // Route for the SharerSignup component
        element: <SharerSignup />,
      },
      {
        path: '/listener-signup', // Route for the ListenerSignup component
        element: <ListenerSignup />,
      },
      {
        path: '/my-bench', // Route for the ListenerSignup component
        element: <MyBench />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

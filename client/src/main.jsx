import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Role from './pages/Role'
import Dashboard from './pages/Dashboard'
import Conversation from './components/Conversation.jsx'

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
        element: <Home />, //Although a different component (Conversation) is displaying thanks to conditional rendering, it is still the Home page.
      },
      {
        path: '/start-conversation', // The route for starting a conversation
        element: <Home />, // Although this is a different view thanks to conditional rendering, the ConversationsForm component still displays on the Home page
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Role',
        element: <Role />,
      },
      {
        path: '/myBench',
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import Login from './pages/Login'
import Role from './pages/Role'
import Dashboard from './pages/Dashboard'
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

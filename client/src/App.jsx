import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';


import Nav from './components/Navbar';

import Dashboard from './pages/Dashboard';

import Login from './pages/Login';

import Footer from './components/Footer'

const httpLink = createHttpLink({
  uri: '/graphql',
});


// import ListenerSignup from './components/ListenerSignup'

// import Header from './components/Header';
// import Footer from './components/Footer';

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // uri: '/graphql',
  // cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <div>
    // <Nav />

    // <Login />
    // </div>



    <ApolloProvider client={client}>
      <div>
        <Nav />
        <div>
          {/* <Outlet /> */}
          <Login />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Nav from './components/Navbar';

import Dashboard from './pages/Dashboard';

// import ListenerSignup from './components/ListenerSignup'

// import Header from './components/Header';
// import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
    <Nav />

    <Dashboard />
    </div>



    // <ApolloProvider client={client}>
    //   <div className="flex-column justify-flex-start min-100-vh">
    //     <Header />
    //     <div className="container">
    //       <Outlet />
    //     </div>
    //     <Footer />
    //   </div>
    // </ApolloProvider>
  );
}

export default App;
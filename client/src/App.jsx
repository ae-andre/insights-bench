import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Nav from './components/Navbar';
// import Header from './components/Header';
// import Footer from './components/Footer';
import SharerSignup from './components/SharerSignup'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
        <Nav />
        <SharerSignup />
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

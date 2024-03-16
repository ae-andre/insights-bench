import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header/index';
import Nav from './components/Navbar';
import Footer from './components/Footer/index';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


// import ListenerSignup from './components/ListenerSignup'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
          <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;






// function App() {
//   return (
//     <div>
//     <Nav />

//     <Dashboard />
//     </div>



    // <ApolloProvider client={client}>
    //   <div className="flex-column justify-flex-start min-100-vh">
    //     <Header />
    //     <div className="container">
    //       <Outlet />
    //     </div>
    //     <Footer />
    //   </div>
    // </ApolloProvider>
//   );
// }


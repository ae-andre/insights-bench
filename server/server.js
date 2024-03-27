const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
require('dotenv').config();

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();

// app.use('/graphql', cors({
//   origin: 'http://localhost:3001',
//   credentials: true
// }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  app.use('/images', express.static(path.join(__dirname, '../client/images')));

  // Basic route handler for the root path
  // app.get('/', (req, res) => {
  // res.send('Hello, this is your GraphQL server!');
  // });

   // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server
   app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));
  
  // Important for MERN Setup: When our application runs from production, it functions slightly differently than in development
  // In development, we run two servers concurrently that work together
  // In production, our Node server runs and delivers our client-side bundle from the dist/ folder 
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  
  // Important for MERN Setup: Any client-side requests that begin with '/graphql' will be handled by our Apollo Server

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();

const db = require('../config/connection'); 
const { User, Conversation } = require('../models'); 
const userSeeds = require('./userSeeds.json');
const conversationSeeds = require('./conversationSeeds.json');
const cleanDB = require('./cleanDB'); 

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');

    await cleanDB('Category', 'categories');

    await cleanDB('Conversation', 'conversations');

    await User.create(userSeeds);

    await Conversation.create(conversationSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeding complete! 🌱');
  process.exit(0);
});
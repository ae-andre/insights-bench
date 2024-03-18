const db = require('../config/connection');
const { User, Conversation } = require('../models');
const userSeeds = require('./userSeeds.json');
const conversationSeeds = require('./conversationSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Conversation', 'conversations');

    await cleanDB('User', 'users');
    
    await User.create(userSeeds);

    for (let i = 0; i < conversationSeeds.length; i++) {
      const { _id, username } = await Conversation.create(conversationSeeds[i])
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $set: {
            conversation: _id,
          }
        }
      )
    }

    console.log('All seeded 🌱');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

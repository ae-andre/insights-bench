
const db = require('../config/connection');
const { User, Conversation } = require('../models');
const userSeeds = require('./userSeeds.json');
const conversationSeeds = require('./conversationSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Conversation', 'conversations');

    await cleanDB('User', 'users');

    await cleanDB('Category', 'categories');

    await cleanDB('Conversation', 'conversations');

    await User.create(userSeeds);

//     for (let i = 0; i < conversationSeeds.length; i++) {
//       const { _id, username } = await Conversation.create(conversationSeeds[i])
//       const user = await User.findOneAndUpdate(
//         { username: username },
//         {
//           $set: {
//             conversation: _id,
//           }
//         }
//       )
//     }

    await Conversation.create(conversationSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeding complete! 🌱');
  process.exit(0);
});
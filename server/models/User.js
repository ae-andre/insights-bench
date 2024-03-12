const {Schema, model, Types} = require('mongoose')

const userSchema = new Schema({
    username: {
      type: String, 
      required: true, // Could possibly be false if we randomly generate
      unique: true,
      trim: true,
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   match: [/.+@.+\..+/, 'Must match an email address!'],
    // },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    buddy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    availability: {
        type: Boolean
    },
    // We'll assign "listener" or "speaker"
    role: {
        type: String, 
        trim: true,
    },
    expertise: {
        type: String,
        trim: true,
    },
    conversation:
      {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
      },
});

const User = model('User',  userSchema);

module.exports = User;
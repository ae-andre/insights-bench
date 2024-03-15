const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {
      type: String, 
      required: true, // Could possibly be false if we randomly generate
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    buddy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // Added a default to this, will be switched to true when a user enters a conversation 
    availability: {
        type: Boolean,
        default: true
    },
    // We'll assign "listener" or "sharer"
    role: {
        type: String, 
        trim: true,
    },
    // Right now listeners only have a single expertise.  We could change this to an array. Sharers have an empty string.
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
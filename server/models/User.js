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
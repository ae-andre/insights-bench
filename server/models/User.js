const userSchema = new Schema({
    username: {
      type: String, 
      required: true, // Could possibly be false if we randomly generate
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
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
    role: {
        type: String, // We'll assign "listener" or "speaker"
    },
    expertise: {
        type: String
    },
    personality: {
        type: Schema.Types.ObjectId,
        ref: 'Personality'
    },
    Conversation: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Conversation',
      },
    ],

  });
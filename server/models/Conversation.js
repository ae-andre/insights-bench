const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const conversationSchema = new Schema({
    conversationText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 500,
      trim: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [commentSchema],
    is_closed: {
      type: Boolean
    },
    expertise
  });
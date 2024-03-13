const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  comment: {
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
  },
});

const conversationSchema = new Schema({
  conversationTitle: {
    type: String,
    required: true,
  },
  conversationText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
    trim: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  listener: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [commentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  is_closed: {
    type: Boolean,
  },
});

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;
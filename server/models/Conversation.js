const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const commentSchema = new Schema({
  commentId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  comment: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => moment(createdAt).format('MMM D, YYYY [at] h:mm:a')
  },
});

const conversationSchema = new Schema({
  conversationTitle: {
    type: String,
    maxlength: 50,
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
  username: {
    type: String,
    required: true,
  },
  // Should this be string too
  listener: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [commentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => moment(createdAt).format('MMM D, YYYY [at] h:mm:a')
  },
  is_closed: {
    type: Boolean,
    default: false
  },
  isPrivate: {
    type: Boolean,
    default: false
  }
});

// Virtual property to calculate the comment count
conversationSchema.virtual('commentCount').get(function () {
  return this.comments.length;
})

// toJSON settings to include getters, virtuals and exclude _id
conversationSchema.set('toJSON', { getters: true, virtuals: true, id: false })

const Conversation = model('Conversation', conversationSchema);

module.exports = Conversation;
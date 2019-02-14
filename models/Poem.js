const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'posts',
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    text: {
      type: String,
      required: true,
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
      },
    ],
    hashtags: [
      {
        type: String,
        post: {
          type: Schema.Types.ObjectId,
          ref: 'posts',
        },
      },
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'users',
        },
        text: {
          type: String,
          required: true,
        },
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('poem', poemSchema);

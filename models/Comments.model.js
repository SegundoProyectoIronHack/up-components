const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  }
}, {
  timestamps: true
});

const Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;

const mongoose = require('../db/db')

const Schema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  avatar: String,
  content: String,
  replies:[
    {
      replyUserName: {
        type: String,
        require: true
      },
      replyAvatar: {
        type: String,
        require: true
      },
      replyContent: {
        type: String,
        require: true
      }
    }
  ]
}, { timestamps: true })

const Comment = mongoose.model('comment', Schema)

module.exports = Comment
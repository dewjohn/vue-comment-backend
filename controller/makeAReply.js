const comment = require('../models/comment')

async function makeAReply(data){
  const { username, content, id } = data
  console.log(username, content, id, 'this is controller');
  const randomAvatar = Math.floor(Math.random()*10 +1)
  const avatar = `images/${randomAvatar}.png`
  // const reply = { replyUserName: username, replyContent: content, replyAvatar: avatar }
  const newReply = await comment.findByIdAndUpdate(
    { _id: id },
    {
      $push:{
        "replies": {
          replyUserName: username,
          replyContent: content,
          replyAvatar: avatar
        }
      }
    },
    {upsert: true, new : true}
  )
  console.log(newReply, 'this is newReply');
  return newReply
}

module.exports = { makeAReply }
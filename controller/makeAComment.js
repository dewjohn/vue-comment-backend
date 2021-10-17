const comment = require('../models/comment')

/**
 * 
 * @param {Object} data 评论数据
 * @returns 新评论
 */
async function makeAComment(data = {}){
  console.log(data.username, 'this is controller');
  const { username, content, replies } = data
  const randomAvatar = Math.floor(Math.random()*10 +1)
  const newComment = await comment.create({
    username,
    content,
    avatar: `images/${randomAvatar}.png`,
    replies
  })
  return newComment
}

module.exports = { makeAComment }
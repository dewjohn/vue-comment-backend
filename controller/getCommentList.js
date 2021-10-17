const comment = require('../models/comment')

/**
 * 获取评论列表
 * @returns 评论列表
 */
async function getCommentList(){
  const list = await comment.find().sort({ updateAt:-1 })
  return list
}

module.exports = { getCommentList }
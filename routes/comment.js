const router = require('koa-router')()
const { successModel } = require('./../res-model/index')
const { getCommentList } = require('./../controller/getCommentList')
const { makeAComment } = require('./../controller/makeAComment')
const { makeAReply } = require('./../controller/makeAReply')

router.prefix('/api/comments')

// 获取评论列表
router.get('/', async function(ctx, next) {
  const commentList = await getCommentList()
  ctx.body = new successModel(commentList)
})

// 发表一条评论
router.post('/', async function(ctx, next){
  const data = ctx.request.body
  try {
    const newComment = await makeAComment(data)
    ctx.body = new successModel(newComment)
  } catch (error) {
    console.log(error);
  }
})

// 发表一条回复
router.post('/reply', async function(ctx, next){
  const data = ctx.request.body
  console.log(data, 'this is router');
  try {
    const newReply = await makeAReply(data)
    ctx.body = new successModel(newReply)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router
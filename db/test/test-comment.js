
const Comment = require('../../models/comment')

!(async () => {
  await Comment.create({
    username: 'smith',
    avatar: 'http://localhost:3000/images/face3.jpg',
    content: '时间对了没？？？',
    replies: [
      // {
      //   replyUserName: '老王',
      //   replyAvatar: 'http://localhost:3000/images/face3.jpg',
      //   replyContent: '俺是老王'
      // },
      // {
      //   replyUserName: '小李',
      //   replyAvatar: 'http://localhost:3000/images/face2.png',
      //   replyContent: '牛了个大B'
      // }
    ]
  })
  // const list = await Comment.find().sort({ updateAt: -1 })
  // console.log(list)
})()
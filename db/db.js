const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'Comment'

mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', err => {
  console.error('mongoose connect error', err)
})
db.once('open', () => {
  // 用以测试数据库连接是否成功
  console.log('mongoose connect success')
})

module.exports = mongoose
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const index = require('./routes/index')
const users = require('./routes/users')
const comment = require('./routes/comment')

// error handler
onerror(app)

app.use(cors({
  origin:['http://localhost:8081'], 
  credentials: true //允许跨域带cookie
}))

app.use(koaBody({
  multipart: true, // 支持文件上传
  formidable: {
    maxFieldsSize: 200*1024*1024 // 最大2M
  }
}))


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

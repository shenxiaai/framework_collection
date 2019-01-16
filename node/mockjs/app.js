const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const ejs = require('ejs')
const handlebars = require('handlebars')
const index = require('./routes/index')
const users = require('./routes/users')
const miniapp = require('./routes/miniapp')
const smartDcs = require('./routes/smartDcs')
const EDUCloud = require('./routes/EDUCloud')
const reader = require('./routes/reader')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  // extension: 'pug',
  // map : {html: 'ejs'}      // 使用ejs的html模板
  map: {hbs: 'handlebars'},
  extension: 'hbs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// cross-origin
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'X-Requested-With');
  await next();
});

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(miniapp.routes(), miniapp.allowedMethods())
app.use(smartDcs.routes(), smartDcs.allowedMethods())
app.use(EDUCloud.routes(), EDUCloud.allowedMethods())
app.use(reader.routes(), reader.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

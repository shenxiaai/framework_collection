const router = require('koa-router')()
const svgCaptcha = require('svg-captcha')

router.get('/', async (ctx) => {
  await ctx.render('index.html')
})

router.post('/addUser', async (ctx) => {
  ctx.body = {data: {
    id: '1111'
  }, success: true}
})

/**
 * @desc {生成验证码图片}
 * @type {string}
 */
let currentCodeText = ''
router.post('/checkCode', async (ctx, next) => {
  await next()
  currentCodeText = svgCaptcha.create().text
  ctx.body = svgCaptcha.create().data
})

router.post('/login', async (ctx, next) => {
  await next()
  console.log('params: ', ctx.params)
  console.log('query: ', ctx.query)
  ctx.body = {success: true}
})

module.exports = router

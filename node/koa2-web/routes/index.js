const router = require('koa-router')()

router.get('/', async (ctx) => {
  await ctx.render('index.html')
})

router.post('/addUser', async (ctx) => {
  ctx.response.body = {data: {
    id: '1111'
  }, success: true};
})

module.exports = router

const router = require('koa-router')()
const db = require('../config/db')

router.prefix('/users')

router.get('/', async (ctx, next) => {
  ctx.body = 'user get response'
})

router.get('/bar', async (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

module.exports = router

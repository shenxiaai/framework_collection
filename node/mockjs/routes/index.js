const router = require('koa-router')()
const Mock = require('mockjs')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Mock Service!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  let res = Mock.mock({
    'list|1-10': [{       // list: 数组，其中含有 1 到 10 个元素
      'id|+1': 1,        // id: 自增数，起始值为 1，每次增 1
      'order|1-100': 43,
      'arr|0-10': ['a', 'b', 'c', 'd']
    }]
  })

  ctx.body = res
})

module.exports = router

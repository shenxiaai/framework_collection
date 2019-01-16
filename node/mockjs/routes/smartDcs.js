const router = require('koa-router')()
const Mock = require('mockjs')

router.prefix('/smartDcs')

router.post('/queryList', async ctx => {
  let res = Mock.mock({
    'records|10-15': [{
      'orderNo|100000-999999': 12,
      'getterName': '@FIRST',
      'getterMobile': /^1\d{10}$/,
      'status|1': ['备货中', '可提货', '备货中', '备货中', '备货中'],
    }]
  })
  ctx.body = res
})

module.exports = router

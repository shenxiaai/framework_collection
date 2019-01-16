const router = require('koa-router')()
const conn = require('../config/db')

router.prefix('/reader')

router.get('/', async (ctx, next) => {
  let res = {}

  async function selectAllData() {
    let sql = 'SELECT * FROM book'
    let dataList = await conn(sql)
    return dataList
  }
  try {
    res = {
      code: 200,
      message: 'success',
      data: await selectAllData()
    }
  } catch (err) {
    res = {
      code: 500,
      message: 'error'
    }
  }
  ctx.body = res
})

router.get('/bar', async (ctx, next) => {
  ctx.body = 'this is a users/bar response'
})

module.exports = router

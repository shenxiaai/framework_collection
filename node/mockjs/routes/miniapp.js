const router = require('koa-router')()
const Mock = require('mockjs')

router.prefix('/miniapp')

router.get('/login', (ctx, next) => {
  let res = Mock.mock({
    'list|1-10': [{
      'code|100000-999999': 43
    }]
  })
  ctx.body = res
})

router.get('sendVerifyCode', ctx => {
  ctx.body = ''
})

router.post('/user/sendVerifyCode', ctx => {
  let res = Mock.mock({
    'list|0-1': [{
      'code|100000-999999': 43
    }]
  })
  ctx.body = res
});

router.post('/car/sign/queryQueue', ctx => {
  let res = {
    'data': {
      'hubId': '95c0ede0-d008-4b50-97af-099b8bac4fa4',
      'planDtos': [],
      'seqNo': '10',
      'status': '1'
    },
    'success': true,
    'symbol': 'RESULT_SYSBOL'
  }

  res = {
    errorMessage: {
      code: 'ED1000',
      message: '当前车辆被占用'
    },
    'success': false
  }

  ctx.body = res
});

router.post('/car/sign/sign', ctx => {
  let res = {"errorMessages":[{"code":"E1000","message":"您的手机号或车牌号正在任务中"}],"success":false}

  ctx.body = res
});

module.exports = router

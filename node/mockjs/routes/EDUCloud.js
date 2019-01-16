const router = require('koa-router')()
const Mock = require('mockjs')

router.prefix('/EDUCloud')

let coursesList = []

router.get('/courses', ctx => {
// router.get('/courses?start=0&count=15&sort=created', ctx => {
  let res = Mock.mock({
    'data|4-12': [{
      'course-id|+1': 1, // string 课程ID
      'name': Mock.Random.cword(5, 10), // string 课程名称
      'type|1': [0, 1], // integer 课程类型 0：精品课 1：班级课
      'description': Mock.Random.csentence(7, 17), // string 课程描述
      'outline': '', // string 课程大纲
      'created': Mock.Random.date('yyyy-MM-dd HH:mm:ss'), // string 创建时间
      'subject|1': ['语文', '数学', '英语', '物理', '化学', '生物', '地理', '政治', '历史', '计算机', '体育'], // string 课程学科
      'grade|1': ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '七年级', '八年级', '九年级', '高一', '高二', '高三', '大一', '大二', '大三', '大四'], // string 年级
      'icon-resource-id': null, // string 肖像资源ID
      'icon-file': null, // string 肖像路径
      'last-modify': Mock.Random.date('yyyy-MM-dd HH:mm:ss'), // string 最后修改时间
      'thumbup-count|0-100000': 10, // integer 点赞数
      'comment-count|0-100000': 10, // integer 评论数
      'view-count|0-100000': 10, // integer 浏览次数
      'score|0-100': 10, // number 评分
      'publish-status|1': [0, 1], // integer 发布状态 0：不发布 1：发布
      'is-recommand|1': [0, 1], // integer 是否推荐 0：不推荐 1：推荐
      'user-id|+1': 1 // string 拥有者
    }]
  })
  coursesList = res // 把mock生成的课程列表赋值给全局变量
  ctx.body = res.data
})

router.get('/courses/:courseId', ctx => {
  let res = {}
  for (let i = 0; i < coursesList.length; i++) {
    if (ctx.params.courseId.toString() === coursesList[i]['course-id'].toString()) {
      res = coursesList[i]
      break
    }
  }
  ctx.body = res
})

router.get('/course-periods', ctx => {
  let res = [
    {
      'period-id': 'p1',
      'type': ctx.query.type,
      'name': '第一章',
      'course-id': ctx.query['course-id'],
      'parent-id': '2012',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p2',
      'type': 0,
      'name': '第二章',
      'course-id': '2012',
      'parent-id': '2012',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p3',
      'type': 1,
      'name': '第一章第一节',
      'course-id': '2012',
      'parent-id': 'p1',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p4',
      'type': 1,
      'name': '第一章第二节',
      'course-id': '2012',
      'parent-id': 'p1',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p5',
      'type': 1,
      'name': '第二章第一节',
      'course-id': '2012',
      'parent-id': 'p2',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p6',
      'type': 1,
      'name': '第二章第二节',
      'course-id': '2012',
      'parent-id': 'p2',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p1',
      'type': 0,
      'name': '第一章',
      'course-id': '3',
      'parent-id': '3',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p2',
      'type': 0,
      'name': '第二章',
      'course-id': '3',
      'parent-id': '3',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p3',
      'type': 1,
      'name': '第一章第一节',
      'course-id': '3',
      'parent-id': 'p1',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p4',
      'type': 1,
      'name': '第一章第二节',
      'course-id': '3',
      'parent-id': 'p1',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p5',
      'type': 1,
      'name': '第二章第一节',
      'course-id': '3',
      'parent-id': 'p2',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    },
    {
      'period-id': 'p6',
      'type': 1,
      'name': '第二章第二节',
      'course-id': '3',
      'parent-id': 'p2',
      'created': 'string',
      'duration': 'string',
      'key-points': [
        {
          'id': 'string',
          'course-id': 'string',
          'period-id': 'string',
          'user-id': 'string',
          'time-point': 0,
          'cotent': 'string'
        }
      ],
      'resources': [
        {
          'resource-id': 'string',
          'is-main': true,
          'resource-file-type': 0,
          'resource-style': 0,
          'name': 'string',
          'created': 'string',
          'duration': 'string',
          'files': [
            {
              'file-id': 'string',
              'file-type': 0,
              'name': 'string',
              'path': 'string',
              'created': 'string',
              'duration': 'string'
            }
          ]
        }
      ]
    }
  ]
  ctx.body = res
})

module.exports = router


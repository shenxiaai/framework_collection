import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home'
import question from '@/pages/question/question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/question/:type',    // type=1: 顺序模式   type=2: 随机模式    type=3: 模拟考试
      name: 'question',
      component: question
    }
  ]
})

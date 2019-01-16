import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import List from '@/pages/list';
import Article from '@/pages/article';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/list/:menu1No/:menu2No',
      name: 'List',
      component: List
    }, {
      path: '/article/:menu1No/:menu2No/:noticeId',
      name: 'Article',
      component: Article
    }
  ]
});

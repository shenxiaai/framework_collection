import Vue from 'vue';
import Router from 'vue-router';
import open from '@/components/open';
import into from '@/components/into';
import home from '@/components/home';
import selfCenter from '@/components/selfCenter';
import newPost from '@/components/newPost';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'open',
      component: open
    },
    {
      path: '/into',
      name: 'into',
      component: into
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/selfCenter',
      name: 'selfCenter',
      component: selfCenter
    },
    {
      path: '/newPost',
      name: 'newPost',
      component: newPost
    }
  ]
});

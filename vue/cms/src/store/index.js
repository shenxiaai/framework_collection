import Vue from 'vue';
import vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import menu1 from './modules/menu1';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    firstMenu: menu1
  },
  actions,
  mutations
});
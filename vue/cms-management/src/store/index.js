import Vue from 'vue';
import vuex from 'vuex';
import dialogStore from './dialog-store.js';

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    dialog: dialogStore
  }
});
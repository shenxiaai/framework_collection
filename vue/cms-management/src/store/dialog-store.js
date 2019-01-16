export default {
  state: {
    show: false,
    title: 'Hello world'
  },
  mutations: {
    switchDialog (state) {
      state.show = !state.show;
    },
    changeTitle (state, _obj) {
      state.title = 'aslkl' + new Date().getTime() + _obj.a;
    }
  }
};
const SET_MENU = 'SET_MENU';

export default {
  [SET_MENU] (state, payload) {
    state.list = payload;
  }
};
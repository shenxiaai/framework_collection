const ADD_USER = 'ADD_USER';

export default {
  [ADD_USER](state, payload) {
    state.localId = payload.localId;
  }
}
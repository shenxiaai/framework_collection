import axios from 'axios';

export default {
    addUser({commit}, payload) {
      axios.post('http://10.100.12.159:3000/addUser', { 'nickname': payload }).then(res => {
        commit('ADD_USER', {localId: res.data.id});
      }).catch(error => {
        console.log(error);
      });
    }
}
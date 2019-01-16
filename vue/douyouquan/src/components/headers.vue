<template>
  <div class="headers">
    <div class="dyq-header" v-if="!headerType">
        <a class="ui-back" @click="backUrl"></a>
        <div class="ui-title">豆友圈</div>
        <!-- <a class="ui-search"></a> -->
    </div>

    <div class="dyq-header" v-if="(headerType === 'post')">
      <button @click="backUrl">取消</button>
      <div class="ui-title">说一说</div>
      <button @click="addPost">发布</button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'headers',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  props: ['headerType', 'postData'],
  methods: {
    backUrl () {
      this.$router.go(-1);
    },
    addPost () {
      axios.post('http://10.100.12.159:3000/addPost', {userId: this.$store.state.localId, data: this.postData }).then(res => {
        if(res.data.obj === 'success') {
          this.$router.push({path: '/home'});
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

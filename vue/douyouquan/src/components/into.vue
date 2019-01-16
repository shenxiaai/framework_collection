<template>
  <div class="into">
    <div class="dyq-welcome">
      <h2 class="tac">请设置昵称</h2>
      <img class="dyq-head-img" src="../assets/images/ddcash@2x.png"/>
      <div class="dyq-setname">
        <input type="text" placeholder="请设置您的昵称" v-model="nickname" />
        <div class="orange dyq-ipt-tip">*4-20个字符，支持中文、英文、数字</div>
      </div>
			</div>
			<div class="dyq-btn" @click="validate">进入豆友圈</div>
      <pop :popData="popData"></pop>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import pop from './pop';

export default {
  name: 'into',
  components: { pop },
  data() {
    return {
      nickname: '',
      popData: {
        msg: '昵称不能为空！',
        show: 0
      }
    };
  },
  created() {
    this.init();
  },
  computed: mapState({
    localId: state => state.localId
  }),
  methods: {
    init() {
      document.body.style.background = '#feb74f';
    },
    validate() {
      var This = this;
      if(This.nickname === '') {
        This.popData.show = 1;
        setTimeout(function () {
          This.popData.show = 0;
        }, 1000);
      }else {
        This.$store.dispatch('addUser', This.nickname);
        // This.$router.push({path: '/home'});
      }
    }
  },
  watch: {
    localId: function(newValue, oldValue) {
      if(newValue) {
        var storage = window.localStorage;
        storage.setItem('localId', newValue);
        this.$router.push({path: '/home'});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

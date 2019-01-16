<template>
  <div class="open">
    <div class="dyq-welcome">
      <img class="dyq-head-img" src="../assets/images/ddcash@2x.png"/>
      <img class="mb50" src="../assets/images/text.png" width="62.4%"/>
      <router-link to="/into" class="dyq-btn">开启豆友圈</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'open',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      /* eslint-disable */
      document.body.style.background = '#feb74f';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

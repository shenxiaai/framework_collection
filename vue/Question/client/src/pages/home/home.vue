<template>
  <div class="home">
    <router-link to="/question/1">
      <mt-button type="primary" class="mt1" size="large">顺序答题</mt-button>
    </router-link>
    <router-link to="/question/2">
      <mt-button type="primary" class="mt1" size="large">随机答题</mt-button>
    </router-link>
    <router-link to="/question/3">
      <mt-button type="primary" class="mt1" size="large" disabled>模拟考试</mt-button>
    </router-link>
    <router-link to="/">
      <mt-button type="primary" class="mt1" size="large" disabled>考试记录</mt-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt1{
  margin-top: 1rem;
}
.home{
  padding: 0 1rem;
  box-sizing: border-box;
}
</style>

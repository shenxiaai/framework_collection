<template>
  <div class="footer">
    <section class="ui-border-t dyq-footer">
      <ul class="dyq-menu">
        <li><router-link to="/home"><i class="dyq-icon dyq-icon-see-b"></i><span>看帖</span></router-link></li>
        <li><router-link to="/newPost"><i class="dyq-icon dyq-icon-say"></i><span>说一说</span></router-link></li>
        <li><router-link to="/selfCenter"><i class="dyq-icon dyq-icon-me"></i><span>我的</span></router-link></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

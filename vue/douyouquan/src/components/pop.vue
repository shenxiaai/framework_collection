<template>
  <div class="pop">
    <div class="ui-popcenter" :class="{show: popData.show}">
      <div class="ui-popcenter-cnt">
        {{popData.msg}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pop',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  props: ['popData']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

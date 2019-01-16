<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <a>{{value1}}</a>
    <router-link to="/">
      <el-button type="success">back</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      msg: 'demo',
      value1: ''
    };
  },
  mounted () {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #fefefe;
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $color;
}
</style>

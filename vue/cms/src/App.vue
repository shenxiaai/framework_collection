<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style>
.center{
  margin: 0 auto;
  width: 1200px;
}
.flex{
  display: flex;
}
.space-between{
  justify-content: space-between;
}
</style>

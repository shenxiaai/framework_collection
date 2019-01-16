<template>
  <div class="nav">
    <div class="center flex space-between">
      <router-link class="logo" to="/">
        <img src="../assets/images/logo.png" alt="">
        <span>卡行规则</span>
      </router-link>
      <div class="search" v-show="false">
        <input type="text">
        <button>搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
    };
  },
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
.nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background: #fff;
  .logo{
    display: flex;
    align-items: center;
    color: #FF8400;
    font-size: 22px;
    span{
      margin-left: 10px;
      color: #333;
      font-size: 16px;
    }
  }
  .search{
    display: flex;
    width: 340px;
    height: 40px;
    line-height: 40px;
    input{
      padding: 0 5px;
      width: 270px;
      height: 40px;
      border: 2px solid #FF8400;
      border-right: none;
      box-sizing: border-box;
    }
    button{
      width: 70px;
      height: 40px;
      background: #FF8400;
      border: none;
      font-size: 18px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      &:active{
        background: #FF9900;
      }
    }
  }
}
</style>

<template>
  <div class="index">
    <top-nav></top-nav>
    <div class="banner">
      <div class="center rel">
        <div class="menu">
          <ul>
            <li>
              <p>加盟规则</p>
              <div class="tip">
                <span><router-link to="/list/RC10004/RC10006">加盟介绍</router-link></span>
                <span><router-link to="/list/RC10004/RC10006">成员加盟</router-link></span>
                <span><router-link to="/list/RC10004/RC10006">枢纽合作</router-link></span>
              </div>
            </li>
            <li>
              <p>增值服务</p>
              <div class="tip">
                <span><router-link to="/list/RC10004/RC10006">保险保价</router-link></span>
                <span><router-link to="/list/RC10004/RC10006">金融业务</router-link></span>
                <span><router-link to="/list/RC10004/RC10006">商学院</router-link></span>
                <span><router-link to="/list/RC10004/RC10006">园区业务</router-link></span>
              </div>
            </li>
            <li>
              <p>枢纽管理</p>
              <div class="tip">
                <span><router-link to="/list/RC10004/RC10006">业务介绍</router-link></span>
              </div>
            </li>
            <li>
              <p>成员管理</p>
              <div class="tip">
                <span><router-link to="/list/RC10004/RC10006">运作标准</router-link></span>
              </div>
            </li>
            <li>
              <p>系统规则</p>
              <div class="tip">
                <span><router-link to="/list/RC10004/RC10006">交易规则</router-link></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="board center">
      <div class="title">
        <img src="../assets/images/sound.png" alt=""> &nbsp;&nbsp;最新公告
        <span>更多&nbsp;&nbsp;<img src="../assets/images/more_icon.png" alt=""></span>
      </div>
      <div class="board-cont">
        <ul>
          <li v-for="item in post" :key="item.id">{{item.title}}<span>{{item.publishTime}}</span></li>
        </ul>
      </div>
    </div>
    <div class="waiting center">
      <img src="../assets/images/jiamengliucheng.png" alt="">
      <img src="../assets/images/shoufeibiaozhun.png" alt="">
      <img src="../assets/images/jiaoyiliucheng.png" alt="">
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import topNav from '@/components/top';
import bottom from '@/components/bottom';
export default {
  name: 'Index',
  data () {
    return {
      post: [] // 公告列表
    };
  },
  components: { topNav, bottom },
  mounted () {
    const PostConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    this.$axios.post('/notice/findNoticesByType?noticeType=11', {
      params: {
        currentPage: 1,
        pageSize: 4
      }
    }, PostConfig).then(res => {
      if (res.data.success) {
        this.post = res.data.data.records;
      }
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    search (e) {
    }
  }
};
</script>

<style lang="scss" scoped>
$orange: #FF8400;
.center{
  margin: 0 auto;
  width: 1200px;
}
.rel{
  position: relative;
}
.banner{
  height: 630px;
  background: url('~@/assets/images/banner.png') #5D99F8 center top no-repeat;
  .menu{
    padding: 20px;
    position: absolute;
    top: 25px;
    left: 0;
    width: 280px;
    height: 580px;
    background: #fff;
    box-sizing: border-box;
    li{
      padding-bottom: 7px;
      margin-bottom: 7px;
      list-style-type: none;
      border-bottom: 1px solid #E6E6E6;
      &:last-child{
        border-bottom: none;
      }
      p{
        font-size: 16px;
        font-weight: bold;
        line-height: 25px;
        color: #333;
      }
      .tip{
        width: 80%;
        span{
          display: inline-block;
          width: 30%;
          font-size: 14px;
          line-height: 24px;
          color: #333;
          &:nth-child(2n){
            margin-left: 60px;
          }
          a{
            color: #333;
          }
        }
      }
    }
  }
}
.board{
  .title{
    width: 100%;
    height: 70px;
    line-height: 70px;
    span{
      float: right;
    }
  }
  .board-cont{
    padding: 20px 25px;
    width: 100%;
    background: #F7F7F7;
    box-sizing: border-box;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        display: flex;
        justify-content: space-between;
        width: 50%;
        font-size: 14px;
        line-height: 25px;
        color: #333;
        box-sizing: border-box;
        &:nth-child(1), &:nth-child(3){
          padding-right: 30px;
        }&:nth-child(2n){
          padding-left: 30px;
        }
        span{
          color: #666;
        }
      }
    }
  }
}
.waiting{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  img{
    width: 390px;
    height: 240px;
  }
}
</style>

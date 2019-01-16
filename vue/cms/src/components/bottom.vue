<template>
  <div class="bottom">
    <div class="center flex">
      <div class="href-left">
        <div class="part1">
          <img src="../assets/images/logo.png" alt="">
          <a href="https://www.baidu.com">货运圈</a>&nbsp;&nbsp;/&nbsp;&nbsp;
          <a href="https://www.baidu.com">中金物联</a>&nbsp;&nbsp;/&nbsp;&nbsp;
          <a href="https://www.baidu.com">智能园区</a>
        </div>
        <div class="part2">
          <ul>
            <li class="bottom-line"><span><a href="/">关于我们</a></span></li>
            <li class="bottom-line"><span><a href="/">卡行新闻</a></span></li>
            <li class="bottom-line"><span><a href="/">入职卡行</a></span></li>
            <li class="bottom-line"><span><a href="/">联系我们</a></span></li>

            <li class="before-arrow"><a href="/">公司简介</a></li>
            <li class="before-arrow"><a href="/">媒体报道</a></li>
            <li class="before-arrow"><a href="/">校园招聘</a></li>
            <li>总部地址：上海市长宁区通协路558号汤泉国际大厦B幢</li>

            <li class="before-arrow"><a href="/">发展历程</a></li>
            <li class="before-arrow"><a href="/">新闻公告</a></li>
            <li class="before-arrow"><a href="/">社会招聘</a></li>
            <li>全国客服热线：<span class="orange">4001-816-816</span></li>

            <li class="before-arrow"><a href="/">公司文化</a></li>
            <li></li>
            <li></li>
            <li>更多&gt;</li>
          </ul>
        </div>
      </div>
      <div class="href-right">
        <div class="img">
          <img src="../assets/images/home-wx.jpg" alt="">
          <p>货运圈APP下载</p>
        </div>
        <div class="img">
          <img src="../assets/images/weixin_code.jpg" alt="">
          <p>微信公众号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data () {
    return {
    };
  },
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
$orange: #FF8400;
.bottom{
  padding-top: 30px;
  width: 100%;
  height: 310px;
  background: #3D3C3C;
  border-top: 10px solid $orange;
  box-sizing: border-box;
  .href-left{
    padding-right: 235px;
    width: 700px;
    overflow: hidden;
    .part1{
      display: flex;
      align-items: center;
      color: #fff;
      img{
        margin-right: 30px;
      }
      a{
        color: #fff;
        font-size: 18px;
        text-decoration: none;
      }
    }
    .part2{
      margin-top: 20px;
      color: #fff;
      font-size: 12px;
      li{
        float: left;
        padding-left: 6px;
        list-style-type: none;
        width: 120px;
        line-height: 22px;
        box-sizing: border-box;
        &:nth-child(4n){
          width: 335px;
        }
        &.bottom-line{
          margin-bottom: 5px;
          span{
            position: relative;
            padding-bottom: 5px;
            display: inline-block;
            border-bottom: 1px solid #4B4A4A;
          }
        }
        &.before-arrow{
          background: url('~@/assets/images/more_icon.png') 0px 7px no-repeat;
          background-size: 4px auto;
        }
        .orange{
          color: $orange;
        }
        a{
          color: #fff;
        }
      }
    }
  }
  .href-right{
    width: 265px;
    display: flex;
    justify-content: space-between;
    .img{
      display: flex;
      flex-direction: column;
      img{
        width: 120px;
        height: 120px;
      }
      p{
        margin-top: 20px;
        font-size: 14px;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>

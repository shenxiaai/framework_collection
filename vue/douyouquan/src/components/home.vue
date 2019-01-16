<template>
  <div class="home">
    <headers></headers>

    <div class="search-btn">
      <button>有疑问 搜一搜</button>
    </div>

    <!-- <ul class="dyq-tab ui-border-b">
      <li class="ui-border-r active"><i class="dyq-icon dyq-icon-time"></i><span>实时</span></li>
      <li class="ui-border-r"><i class="dyq-icon dyq-icon-activity"></i><span>活动</span></li>
      <li><i class="dyq-icon dyq-icon-guide">攻略</i><span>攻略</span></li>
    </ul> -->

    <div class="heigh20"></div>

    <div class="dyq-tab-list">
      <div class="ui-border-t">
        <div class="ui-border-b dyq-tab-list-hd">
          <img class="user-head" src="../assets/images/ddcash@2x.png">
          <div class="dyq-list-info">
            <span class="col555">毛小毛毛小毛</span><span class="loans-tags">贷款2笔，已还0笔</span><i class="dyq-icon dyq-icon-top">置顶</i><i class="dyq-icon dyq-icon-good">精华</i>
            <p class="col999 mb10">2016-09-30 12:35</p>
            <div class="dyq-Mycoll-text line-clamp3">
              <h3>[豆豆钱公告]</h3>
              <p>豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？</p>
            </div>
            <!--2016.10.25增加定位信息-->
            <div class="dyq-edit-icon GPS-text">
              <div class="dyq-icon dyq-icon-gps active"></div><!--灰色变蓝色 加类名active-->
              <div class="orange gps-address">法蓝桥园区</div>
            </div>
          </div>
        </div>
        <div class="ui-border-b dyq-tab-list-ft">
          <div class="ui-boxflex-1 tar"><i class="dyq-icon dyq-icon-comment"></i></div>
          <div class="ui-boxflex-1 ui-border-r">回复</div>
          <div class="ui-boxflex-1 tar"><i class="dyq-icon dyq-icon-zan1 active"></i></div>
          <div class="ui-boxflex-1 orange">赞</div>   <!--选中后字变黄加类名orange-->
        </div>
      </div>

      <div class="heigh10"></div>

      <div class="ui-border-t">
        <div class="ui-border-b dyq-tab-list-hd">
          <img class="user-head" src="../assets/images/ddcash@2x.png">
          <div class="dyq-list-info">
            <span class="col555">毛小毛</span><i class="dyq-icon dyq-icon-top">置顶</i><i class="dyq-icon dyq-icon-good">精华</i>
            <span class="loans-tags">贷款2笔，已还0笔</span>
            <p class="col999 mb10">2016-09-30 12:35</p>
            <div class="dyq-Mycoll-text line-clamp3">
              <p>豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？</p>
            </div>
            <div class="dyq-img">
              <div><img src="../assets/images/banner@2x.png"/></div>
              <div><img src="../assets/images/banner@2x.png"/></div>
              <div><img src="../assets/images/banner@2x.png"/></div>
            </div>
          </div>
        </div>
        <div class="ui-border-b dyq-tab-list-ft">
          <div class="ui-boxflex-1 tar"><i class="dyq-icon dyq-icon-comment"></i></div>
          <div class="ui-boxflex-1 ui-border-r">回复</div>
          <div class="ui-boxflex-1 tar"><i class="dyq-icon dyq-icon-zan1"></i></div>
          <div class="ui-boxflex-1">赞</div>
        </div>
      </div>

      <div class="heigh10"></div>

      <div class="ui-border-t">
        <div class="ui-border-b dyq-tab-list-hd">
          <img class="user-head" src="../assets/images/ddcash@2x.png">
          <div class="dyq-list-info">
            <span class="col555">毛小毛</span>
            <span class="loans-tags">贷款2笔，已还0笔</span>
            <p class="col999 mb10">2016-09-30 12:35</p>
            <div class="dyq-Mycoll-text line-clamp3">
              <p>豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？豆豆钱什么时候放款啊？</p>
            </div>
          </div>
        </div>
        <div class="ui-border-b dyq-tab-list-ft">
          <div class="ui-boxflex-1 tar"><i class="dyq-icon dyq-icon-comment"></i></div>
          <div class="ui-boxflex-1 ui-border-r">回复</div>
          <div class="ui-boxflex-1 tar"><i class="dyq-icon dyq-icon-zan1"></i></div>
          <div class="ui-boxflex-1">赞</div>
        </div>
      </div>

      <div class="heigh10"></div>
    </div>

    <footers></footers>
    
    <div class="Dialog-img">
      <img src="../assets/images/bg@2x.png"/>
    </div>
  </div>
  
</template>

<script>
import headers from './headers'
import footers from './footer'
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: { headers, footers }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

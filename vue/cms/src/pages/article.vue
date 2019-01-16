<template>
  <div class="content">
    <top-nav></top-nav>
    <div class="main center">
      <sub-nav :menu1p="routeMenu1" :menu2p="routeMenu2"></sub-nav>
      <div class="content">
        <div class="breadcrumb">
          <router-link to="/">加盟规则</router-link>
          <img src="../assets/images/more_icon.png" alt="">
          <router-link to="/" class="active">加盟介绍</router-link>
        </div>
        <div class="article">
            <div class="title">
              {{article.title}}
              <span class="sub-title">发布时间：{{article.publishTime}}</span>
            </div>
            <div class="words" v-html="article.content"></div>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import topNav from '@/components/top';
import subNav from '@/components/sub';
import bottom from '@/components/bottom';
export default {
  name: 'Content',
  data () {
    return {
      article: {} // 文章内容信息
    };
  },
  components: { topNav, subNav, bottom },
  mounted () {
    this.loadArticle(this.$route.params.noticeId);
  },
  computed: {
    routeMenu1 () {
      return this.$route.params.menu1No;
    },
    routeMenu2 () {
      return this.$route.params.menu2No;
    }
  },
  methods: {
    loadArticle (_id) {
      const PostConfig = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      this.$axios.post('/notice/findNoticesByType?noticeType=10&id=' + _id, {
        params: {
          currentPage: 1,
          pageSize: 15
        }
      }, PostConfig).then(res => {
        if (res.data.success) {
          this.article = res.data.data.records[0];
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
</script>

<style lang="scss">
.content{
    background: #F4F4F4;
    .main{
        display: flex;
        justify-content: space-between;
        padding-top: 25px;
        margin-bottom: 30px;
        .content{
            width: 980px;
            background: #fff;
            .breadcrumb{
                display: flex;
                align-items: center;
                padding: 0 20px;
                width: 100%;
                height: 50px;
                border-bottom: 1px solid #DFDFDF;
                box-sizing: border-box;
                a{
                    font-size: 14px;
                    color: #999;
                    &.active{
                        color: #333;
                    }
                }
                img{
                    margin: 0 5px;
                    width: 6px;
                }
            }
            .article{
                padding: 30px;
                box-sizing: border-box;
                .title{
                    margin-top: 10px;
                    margin-bottom: 30px;
                    position: relative;
                    width: 100%;
                    text-align: center;
                    font-size: 18px;
                    line-height: 18px;
                    color: #333;
                    box-sizing: border-box;
                    .sub-title{
                        position: absolute;
                        right: 0;
                        font-size: 14px;
                        color: #999;
                    }
                }
                .words{
                  img{
                    text-align: center;
                    width: 100%;
                  }
                  p{
                    font-size: 14px;
                    line-height: 30px;
                    text-indent: 2em;
                    color: #333;
                  }
                }
            }
        }
    }
}
</style>

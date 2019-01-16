<template>
  <div class="list">
    <top-nav></top-nav>
    <div class="main center">
      <sub-nav :menu1p="routeMenu1" :menu2p="routeMenu2" @setList="getArticlesList" @putMenu1Data="getMenuName"></sub-nav>
      <div class="content">
        <div class="breadcrumb">
          <router-link to="/">{{menu1Name}}</router-link>
          <img src="../assets/images/more_icon.png" alt="">
          <router-link to="/" class="active">{{menu2Name}}</router-link>
        </div>
        <div class="list-box">
          <ul>
            <li v-for="item in articleList" :key="item.id">
              <router-link :to="'/article/' + routeMenu1 + '/' +  routeMenu2 + '/' + item.noticeId">{{item.noticeTitle}}</router-link>
            </li>
          </ul>
          <div class="pagination">
            <span @click="jumpTo($event, 0, 2, 0)"><img src="../assets/images/more_icon_left.png" alt=""></span>
            <span v-for="(item, index) in totalPage" :key="index" :class="{active: (index + 1) === currentPage}" @click="jumpTo($event, index + 1, 1)">{{index+1}}</span>
            <span @click="jumpTo($event, 0, 2, 1)"><img src="../assets/images/more_icon.png" alt=""></span>
            跳至
            <input type="text" v-model="pageIpt" @keyup.enter="jumpTo">
            页
          </div>
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
  name: 'List',
  data () {
    return {
      menu1Name: '',
      menu2Name: '',
      articleList: [], // 文章列表
      totalPage: '', // 总页码数
      currentPage: 1, // 当前页的页码
      pageIpt: '' // 跳转至某页码
    };
  },
  components: { topNav, subNav, bottom },
  mounted () {
    this.getArticlesList(this.$route.params.menu2No);
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
    /*  @description {获取文章列表}
      * @date 2018-06-21
      * @author yuanbao
      * @param {String} value: 一级菜单No
               {String} _menu1Name: 一级菜单Name
               {String} _menu2Name: 二级菜单Name
               {String} pageNum: 当前页码
      * @returns 无
    */
    getArticlesList (value, _menu1Name, _menu2Name, pageNum) {
      this.menu1Name = _menu1Name;
      this.menu2Name = _menu2Name;
      this.currentPage = pageNum || this.currentPage;
      this.$axios.get('/rulecatalog/getContentsList', {
        params: {
          ruleCatalogNo: value,
          currentPage: this.currentPage,
          pageSize: 15
        }
      }).then(res => {
        if (res.data.success) {
          const result = res.data.data.records;
          if (result && result.length === 1) { // 当返回对列表只有一条数据时，直接打开文章内容页
            this.$router.push({path: '/article/' + this.menu1Name + '/' + this.menu2Name + '/' + result[0].noticeId});
          } else {
            this.articleList = result;
          }
          this.totalPage = res.data.data.totalPage;
        }
      }).catch(error => {
        console.log(error);
      });
    },
    /*  @description {根据sub子组件传递来的一级菜单值获取route中一级菜单和二级菜单的name}
      * @date 2018-06-22
      * @author yuanbao
      * @param {Object} data: 一级菜单的值
      * @returns 无
    */
    async getMenuName (menu1Data) {
      for (let i = 0; i < menu1Data.length; i++) {
        if (this.$route.params.menu1No === menu1Data[i].ruleCatalogNo) {
          this.menu1Name = menu1Data[i].ruleCatalogName;
          break;
        }
      }
      let menu2Data = await this.loadSecondMenu(this.$route.params.menu1No);
      for (let j = 0; j < menu2Data.length; j++) {
        if (this.$route.params.menu2No === menu2Data[j].ruleCatalogNo) {
          this.menu2Name = menu2Data[j].ruleCatalogName;
          break;
        }
      }
    },
    /*  @description {加载二级菜单}
      * @date 2018-06-21
      * @author yuanbao
      * @param {String} orderNo: 一级菜单No
               {Number} ind: 当前点击的一级菜单序列号
      * @returns 无
    */
    loadSecondMenu (orderNo) {
      return new Promise((resolve, reject) => {
        this.$axios.get('/rulecatalog/getCatalogByType', {
          params: {
            ruleCatalogNo: orderNo,
            ruleCatalogLevel: 2,
            ruleCatalogType: 10
          }
        }).then(res => {
          if (res.data.success) {
            resolve(res.data.data);
          }
        }).catch(error => {
          console.log(error);
        });
      });
    },
    /*  @description {分页控件：输入页码按enter键跳转至响应页}
      * @date 2018-06-25
      * @author yuanbao
      * @param {Object} eve: 事件
               {Number} ind: 页码值
               {Boolean} span: 是否是span传递的值,1: span传值；2: span传arrow
               {Boolean} arrow: 左右箭头, 0: 左箭头; 1: 右箭头
      * @returns {boolean} 无
    */
    jumpTo (eve, pageNum, span, arrow) {
      if (span && span === 1) {
        this.getArticlesList(this.$route.params.menu2No, this.menu1Name, this.menu2Name, pageNum || this.pageIpt);
      } else if (span && span === 2) {
        if (arrow) { // 右箭头
          if (this.currentPage < this.totalPage) {
            this.currentPage++;
          } else {
            this.currentPage = this.totalPage;
          }
        } else { // 左箭头
          if (this.currentPage > 1) {
            this.currentPage--;
          } else {
            this.currentPage = 1;
          }
        }

        this.getArticlesList(this.$route.params.menu2No, this.menu1Name, this.menu2Name, this.currentPage);
      } else if (eve.keyCode === 13) {
        this.getArticlesList(this.$route.params.menu2No, this.menu1Name, this.menu2Name, this.pageIpt);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list{
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
      .list-box{
        padding: 20px 40px;
        width: 100%;
        box-sizing: border-box;
        li{
          width: 100%;
          font-size: 14px;
          line-height: 36px;
          color: #333;
          border-bottom: 1px dashed #E8E8E8;
          cursor: pointer;
          box-sizing: border-box;
          &:last-child{
            border-bottom: none;
          }
          a{
            color: #333;
          }
        }
        .pagination{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin: 10px 0;
          width: 100%;
          height: 24px;
          left: 24px;
          span{
            margin-right: 6px;
            width: 24px;
            height: 24px;
            line-height: 24px;
            border: 1px solid #999;
            border-radius: 2px;
            box-sizing: border-box;
            color: #666;
            font-size: 14px;
            text-align: center;
            cursor: pointer;
            &.active{
              border-color: #FF8400;
              background: #FF8400;
              color: #fff;
            }
            &:last-child{
              margin-right: 0;
            }
          }
          input{
            margin: 0 6px;
            width: 40px;
            height: 24px;
            line-height: 24px;
            font-size: 14px;
            text-align: center;
            border: 1px solid #999;
            border-radius: 2px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>

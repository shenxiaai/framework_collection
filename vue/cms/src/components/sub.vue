<template>
  <div class="sub-nav">
    <div class="menu-box" v-for="(menu1, index) in menuList" :key="menu1.ruleCatalogNo" @click="loadSecondMenu(menu1.ruleCatalogNo, index)">
      <div class="menu" :class="{open: currentOpenMenuIndex === index}">{{menu1.ruleCatalogName}}</div>
      <div class="second-menu" :class="{active: menu2p === menu2.ruleCatalogNo}" v-if="index === currentOpenMenuIndex" :show="showSecondMenu" v-for="menu2 in secondMenuList" :key="menu2.ruleCatalogNo" @click="loadArticleList(menu2.ruleCatalogNo, menu1.ruleCatalogName, menu2.ruleCatalogName)">
        <router-link :to="'/list/' + menu1.ruleCatalogNo + '/' + menu2.ruleCatalogNo">{{menu2.ruleCatalogName}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sub',
  props: ['menu1p', 'menu2p'],
  data () {
    return {
      menuList: [], // 一级菜单列表
      secondMenuList: [], // 二级菜单列表
      showSecondMenu: false, // 是否展开二级菜单列表
      currentOpenMenuIndex: 0, // 当前被展开的menu的序号
      defaultMenu1Name: '', // 默认的一级菜单名
      defaultMenu2Name: '' // 默认的二级菜单名
    };
  },
  mounted () {
    this.loadFirstdMenu(() => {
      this.getMenu1Index();
      this.loadSecondMenu(this.menu1p, 0); // 初始默认第一个一级菜单展开,传0
      this.$emit('putMenu1Data', this.menuList); // 向父级组建List.vue传递一级菜单的值
    });
  },
  methods: {
    /*  @description {初始化一级菜单}
      * @date 2018-06-21
      * @author yuanbao
      * @param 无
      * @returns 无
    */
    loadFirstdMenu (callback) {
      // const PostConfig = {
      //   headers: {
      //     // 'Content-Type': 'application/x-www-form-urlencoded'
      //     'Content-Type': 'application/json;charset=UTF-8'
      //   }
      // };
      this.$axios.get('/rulecatalog/getCatalogByType', {
        params: {
          ruleCatalogLevel: 1,
          ruleCatalogType: 10
        }
      }).then(res => {
        this.menuList = res.data.data;
        // this.$store.dispatch('setMenu', res.data.data);
        if (callback) {
          callback();
        }
      }).catch(error => {
        console.log(error);
      });
    },
    /*  @description {加载二级菜单}
      * @date 2018-06-21
      * @author yuanbao
      * @param {String} orderNo: 一级菜单No
               {Number} ind: 当前点击的一级菜单序列号
      * @returns 无
    */
    loadSecondMenu (orderNo, ind) {
      this.$axios.get('/rulecatalog/getCatalogByType', {
        params: {
          ruleCatalogNo: orderNo,
          ruleCatalogLevel: 2,
          ruleCatalogType: 10
        }
      }).then(res => {
        if (res.data.success) {
          this.showSecondMenu = true;
          this.currentOpenMenuIndex = ind || 0;
          this.secondMenuList = res.data.data;
        }
      }).catch(error => {
        console.log(error);
      });
    },
    /*  @description {点击二级菜单加载文章列表}
      * @date 2018-06-21
      * @author yuanbao
      * @param {String} catalogNo: 一级菜单No
               {String} menu1Name: 一级菜单Name
               {String} menu2Name: 一级菜单Name
      * @returns 无
    */
    loadArticleList (catalogNo, menu1Name, menu2Name) {
      this.$emit('setList', catalogNo, menu1Name, menu2Name);
    },
    /*  @description {根据route中的一级菜单No获取此一级菜单在当前subNav上的序列号}
      * @date 2018-06-21
      * @author yuanbao
      * @param 无
      * @returns 无
    */
    getMenu1Index () {
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.menu1p === this.menuList[i].ruleCatalogNo) {
          this.currentOpenMenuIndex = i;
          break;
        }
      }
    },
    /*  @description {用menuNo匹配menu的name}
      * @date 2018-06-21
      * @author yuanbao
      * @param {String} _no: 传入的No值
      *        {String} menuLevel: 当前menu的级别
      * @returns {boolean} 无
    */
    matchMenuName (_no, menuLevel) {
      let list = menuLevel ? this.secondMenuList : this.menuList;

      for (let i = 0; i < list.length; i++) {
        if (_no === list[i]) {
          if (menuLevel) {
            this.defaultMenu2Name = list[i].ruleCatalogName;
          } else {
            this.defaultMenu1Name = list[i].ruleCatalogName;
          }
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$orange: #FF8400;
.sub-nav{
    width: 200px;
    .menu-box{
      .menu{
        padding: 0 32px;
        margin-bottom: 4px;
        position: relative;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: url('~@/assets/images/down_arrow.png') 168px 22px #fff no-repeat;
        cursor: pointer;
        box-sizing: border-box;
      }
      .open{
        background: url('~@/assets/images/up_arrow.png') 168px 22px #fff no-repeat;
      }
      .second-menu{
        padding: 0 45px;
        width: 100%;
        height: 50px;
        font-size: 14px;
        color: #333;
        line-height: 50px;
        background: #EFEFEF;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        box-sizing: border-box;
        &:last-child{
          border-bottom: none;
        }
        a{
          color: #333;
        }
        &.active{
          a{
            color: $orange;
          }
        }
      }
    }
}
</style>

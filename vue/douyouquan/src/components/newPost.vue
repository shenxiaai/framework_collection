<template>
  <div class="newPost">
    <headers :header-type="headerType" :post-data="postData"></headers>
    <section class="ui-border-tb mb20">
      <div class="dyq-say-content">
        <textarea class="dyp-reply-txtframe" placeholder="我想说..." v-model="postData.postContent"></textarea>
        <ul class="dyq-edit-img" v-if="imgList">
          <li>
            <img :src="postData.postImg">
            <i class="dyq-icon dyq-icon-delete"></i>
          </li>
          <li>
            <input class="viewFiles" size="6" type="file" />
            <img src="../assets/images/add.png"/>
          </li>
        </ul>
        <div class="dyq-edit-icon">
          <div class="dyq-icon dyq-icon-img"><input type="file" name="fileToUpload" @change="filePreview($event)"/></div>
          <div class="dyq-icon dyq-icon-gps" :class="{active: postData.position}" @click="getPosition"></div><!--灰色变蓝色 加类名active-->
          <div class="orange gps-address">{{postData.position}}</div>
        </div>
      </div>
    </section>
    <section class="bgwhite">
      <!--所属板块选择前-->
      <div class="dyq-posts-sorts ui-border-b dyq-select">
        <div><i class="dyq-icon dyq-icon-plate"></i><span>所属板块</span></div>
        <div>
          <select class="orange" v-model="postData.postType">
            <option value="" selected>请选择</option>
            <option value="豆豆钱">豆豆钱</option>
            <option value="豆豆花">豆豆花</option>
            <option value="豆豆借">豆豆借</option>
          </select>
          <i class="dyq-icon dyq-icon-arrow-r"></i>
        </div>
      </div>
      <!--贷款信息-->
      <div class="dyq-posts-sorts ui-border-t ui-border-b dyq-select">
        <div><i class="dyq-icon dyq-icon-money"></i><span>贷款信息</span></div>
        <div class="dyq-switch-txt">显示</div>
        <label class="ui-switch">
          <input type="checkbox" checked="">
        </label>
      </div>
    </section>
    <pop :popData="popData"></pop>
  </div>
</template>

<script>
import headers from './headers'
import pop from './pop'
export default {
  name: 'newPost',
  data() {
    return {
      headerType: 'post',
      popData: {
        msg: '',
        show: 0
      },
      postData: {
        postTime: '',
        postContent: '',
        postImg: '',
        position: '',
        postType: '请选择'
      },
      imgList: false,
      img1Src: ''
    };
  },
  components: { headers, pop },
  methods: {
    getPosition () {
      let This = this;
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      }else {
          This.postData.position = "浏览器不支持获取地理位置。";
      }
      function showPosition(position) { 
        This.postData.position = "纬度: " + parseFloat(position.coords.latitude.toFixed(2)) + "  经度: " + parseFloat(position.coords.longitude.toFixed(2));
      }
    },
    filePreview (e) {
      let This = this;
			var file = e.currentTarget.files[0],
				  imageType = /^image\//;

			if(window.FileReader) {		//判断是否支持FileReader
				var reader = new FileReader();
			}else {
        This.popData.msg = '您的设备不支持图片预览功能，如需该功能请升级您的设备！';
        This.popData.show = 1;
			}
			if(!imageType.test(file.type)) {	//是否是图片
				alert('请选择图片！');
				return;
			}
			reader.onload = function(e) {	//读取完成
        This.imgList = true;    // 展示图片列表
				This.postData.postImg = e.target.result;	//图片路径设置为读取的图片
			};
			reader.readAsDataURL(file);   // readAsDataURL:文件转化成base64编码的方法
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dyq-icon-arrow-r{margin-left: 0rem;}
</style>

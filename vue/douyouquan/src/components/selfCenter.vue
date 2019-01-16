<template>
  <div class="selfCenter">
    <headers></headers>
			<section class="col666 bgbuff">
				<div class="dyq-homepage-h">
					<img src="../assets/images/ddcash@2x.png"/>
					<div class="dyq-personal-data">
						<p>豆版主</p>
						<p>贷款信息：贷款2笔，已还0笔</p>
					</div>
				</div>
				<div class="ui-form-item-switch ui-border-b">
          <p>信息是否公开</p>
          <label class="ui-switch">
              <input type="checkbox" checked="">
          </label>
          <div class="dyq-switch-txt">是</div>
        </div>
			</section>
			<div class="heigh20"></div>
			
			<section>
				<div class="dyq-posts-sorts ui-border-tb">
					<i class="dyq-icon dyq-icon-see-s"></i><span>我的帖子</span>
				</div>
				
				<div class="dyq-posts">
					<!--暂无帖子显示-->
					<!--<div class="dyq-posts-no">
						<img src="../assets/images/icon1@2x.png" width="24.8%"/>
						<div class="col999">暂无帖子</div>
					</div>-->
					<!--帖子列表-->
					<ul class="dyq-list">
						<li class="ui-border-b">
							<div class="dyq-list-info font16">
								<h2>[豆豆钱公告] <em class="colblue ml2">待审核</em></h2>
								<div class="dyq-Mycoll-text line-clamp3 mb10">
									<p>微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步微信app同步</p>
								</div>
								<div class="dyq-img">
									<div><img src="../assets/images/banner@2x.png"/></div>
									<div><img src="../assets/images/banner@2x.png"/></div>
									<div><img src="../assets/images/banner@2x.png"/></div>
								</div>
								<p class="col999 font15">2016-09-30 12:35</p>
							</div>
							<div class="dyq-list-arrow"></div>
						</li>
						<li class="ui-border-b">
							<div class="dyq-list-info font16">
								<h2>
									[豆豆钱公告] <em class="colred ml2">审核未通过</em>
								</h2>
								<div class="dyq-Mycoll-text line-clamp3 mb10">
									<p>同步微信app同步微信app同步微</p>
								</div>
								<div class="dyq-img">
									<div><img src="../assets/images/banner@2x.png"/></div>
									<div><img src="../assets/images/banner@2x.png"/></div>
									<div><img src="../assets/images/banner@2x.png"/></div>
								</div>
								<p class="col999 font15">2016-09-30 12:35</p>
							</div>
							<div class="dyq-list-arrow"></div>
						</li>
						<li class="ui-border-b">
							<div class="dyq-list-info font16">
								<h2>
									[豆豆钱公告] <em class="colred ml2">审核未通过</em>
								</h2>
								<div class="dyq-Mycoll-text line-clamp3 mb10">
									<p>同步微信app同步微信app同步微</p>
								</div>
								<p class="col999 font15">2016-09-30 12:35</p>
							</div>
							<div class="dyq-list-arrow"></div>
						</li>
						<li class="ui-border-b">
							<div class="dyq-list-info font16">
								<h2>
									[豆豆钱公告] <em class="colred ml2">审核未通过</em>
								</h2>
								<div class="dyq-Mycoll-text line-clamp3 mb10">
									<p>同步微信app同步微信app同步微</p>
								</div>
								<p class="col999 font15">2016-09-30 12:35</p>
							</div>
							<div class="dyq-list-arrow"></div>
						</li>
						<li class="ui-border-b">
							<div class="dyq-list-info font16">
								<h2>
									[豆豆钱公告] <em class="colred ml2">审核未通过</em>
								</h2>
								<div class="dyq-Mycoll-text line-clamp3 mb10">
									<p>同步微信app同步微信app同步微</p>
								</div>
								<p class="col999 font15">2016-09-30 12:35</p>
							</div>
							<div class="dyq-list-arrow"></div>
						</li>
					</ul>
				</div>
			</section>
			
			<footers></footers>
  </div>
</template>

<script>
import headers from './headers'
import footers from './footer'
export default {
  name: 'selfCenter',
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

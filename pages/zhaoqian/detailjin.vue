<template>
	<div class="dazong_detail">
		<Headersub></Headersub>
		<div class="container">
			<div class="dazong_detail_main">
				<div class="left">
					<div class="tit pointer">
						<nuxt-link to='/zhaoqian'>
							<span>项目融资</span>
						</nuxt-link>
						<nuxt-link to="/zhaoqian?id=2">
							<span class="choose">优选资金</span>
						</nuxt-link>
					</div>
					<div class="content">
						<h1>{{ ownerDetailed.title }}</h1>
						<p><span>编号：{{ ownerDetailed.projectNum }}</span>&nbsp&nbsp&nbsp&nbsp<span>发布时间：{{ ownerDetailed.date }}</span>&nbsp&nbsp&nbsp&nbsp<span>浏览量：{{ ownerDetailed.totalViews }}</span></p>
						<div class="f_swiper">
							
							<div class="info">
								<p>{{ ownerDetailed.name }}
									<span v-show="ownerDetailed.identity==1" class="wei">未认证金主</span>
									<span v-show="ownerDetailed.identity!=1">已认证金主</span>
								</p>
								<p style="visibility: hidden;">吉林省优格信息科技有限责任公司</p>
								<button>联系方式</button>
							</div>
						</div>
					</div>
					<div class="content">
						<h5>基础信息</h5>
						<p class="cs_p">资金主体 ：<span>{{ ownerDetailed.funding }}</span></p>
						<p class="cs_p">业务方式 ：<span>{{ ownerDetailed.way }}</span></p>
						<p class="cs_p">投资区域 ：<span>{{ ownerDetailed.province }} {{ ownerDetailed.city }}</span></p>
                        <p class="cs_p">城市规划 ：<span>{{ ownerDetailed.lineId }}</span></p>
                        <p class="cs_p">资金规模 ：<span>{{ ownerDetailed.amountId }}</span></p>
						<!-- <p class="cs_p">交易金额 ：<span>{{ ownerDetailed.amountId }}</span></p> -->
					</div>
					<nuxt-link to='/pinpai'>
						<img src="@/assets/img/zhitongche.png" class="mt_30">
					</nuxt-link>
					<div class="content">
						<!-- <Share :showShare = 'show_share'></Share> -->
						<h5>项目描述</h5>
						<div class="text mt_30" v-html="ownerDetailed.describes">
							
						</div>
						<div class="share">
							<span><img src="/img/follow.png" class="mr">关注</span>
							<span @click = 'show_share = !show_share'><img class="mr" src="/img/share.png">分享到</span>
							<nuxt-link to='/call'><span><img src="/img/connect.png" class="mr">联系地金宝宝</span></nuxt-link>
							<div v-show='showShare' class="social-share" data-sites="weibo, qq, wechat"></div>
						</div>
					</div>
					<div class="content">
						<h5>补充资料</h5>
						<div class="buchong">
							<span>中国房地产金融2018年第04期中国房地产金融第04期中国房地产金融.pdf</span>
							<b><img src="/img/down.png" alt="">资料下载</b>
						</div>
						<div class="buchong nth">
							<span>中国房地产金融2018年第04期中国房地产金融第04期中国房地产金融.pdf</span>
							<b><img src="/img/down1.png" alt="">资料下载</b>
						</div>
						<div class="buchong">
							<span>中国房地产金融2018年第04期中国房地产金融第04期中国房地产金融.pdf</span>
							<b><img src="/img/down.png" alt="">资料下载</b>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="d_t">
						<nuxt-link :to='modulAdvertising.urlOne'>
							<img :src="modulAdvertising.pictureOne" alt="">
						</nuxt-link>
						<nuxt-link :to='modulAdvertising.urlTwo'>
							<img :src="modulAdvertising.pictureTwo" alt="">
						</nuxt-link>
					</div>
					<nuxt-link :to='detailAdvertising.url'><img :src="detailAdvertising.picture" alt="" style="width:100%;height:105px;"></nuxt-link>
					<img src="@/assets/img/pointpro.png" alt="" class="pro">

					<div class="img_list" v-for="(item,index) in keyProjects.list" :key="index">
						<nuxt-link :to="{path:'/zhaoqian/detailjin',query:{id:item.id,nav:'1'}}">
							<img :src="item.picture" alt="">
							<p>{{ item.title }}</p>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Headersub from '~/components/headersub.vue';
import Footer from '~/components/footer.vue';
// import Share from '~/components/share.vue';
import D from '../../api/dazongDetail'
export default {
	watchQuery: true,
	data(){
		return {
			choose:2,
			show_share:false,
			swiperOption: {
				loop: true,
				slidesPerView: 'auto',
				centeredSlides: true,
				navigation: {
					nextEl: '.next',
					prevEl: '.prev',
				},
			},
		}
	},
	async asyncData (context) {
		// console.log(context.route.query.id)
		let[
			modulAdvertising,
			detailAdvertising,
			keyProjects,
			ownerDetailed,
		]
		= await Promise.all([
			D.modulAdvertising(),
			D.detailAdvertising({'type':'1'}),
			D.keyProjects({'type':'3','sort':'1'}),
			D.ownerDetailed({'type':'3','pid':context.route.query.id+''})
		])
		return {
			modulAdvertising: modulAdvertising.data,
			detailAdvertising: detailAdvertising.data,
			keyProjects: keyProjects.data,
			ownerDetailed: ownerDetailed.data
		}
	},
	components:{
		Headersub,
		Footer,
		// Share
	},
	created(){
		this.choose = this.$route.query.nav || 1
		// console.log(this.$route.query.nav)
	},
	beforeRouteUpdate (to, from, next) {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
		next()
  },
	mounted(){

	}
}
</script>
<style scoped>
.mt_30{
	margin-top: 30px;
}
div.info{
	padding: 0!important;
}
div.info button{
	background-color: #cda550!important;
}
</style>
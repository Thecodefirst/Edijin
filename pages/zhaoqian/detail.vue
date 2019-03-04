<template>
	<div class="dazong_detail">
		<Headersub></Headersub>
		<div class="container">
			<div class="dazong_detail_main">
				<div class="left">
					<div class="tit pointer">
						<nuxt-link to='/zhaoqian'>
							<span class="choose">项目融资</span>
						</nuxt-link>
						<nuxt-link to='/zhaoqian?id=2'>
							<span>优选资金</span>
						</nuxt-link>
					</div>
					<div class="content">
						<h1>{{ tradingDetailed.projectName }}</h1>
						<p><span>编号：{{ tradingDetailed.projectNum }}</span>&nbsp&nbsp&nbsp&nbsp<span>发布时间：{{ tradingDetailed.date }}</span>&nbsp&nbsp&nbsp&nbsp<span>浏览量：{{ tradingDetailed.totalViews }}</span></p>
						<div class="f_swiper">
							<div v-swiper:mySwiper="swiperOption" class="swiperB"> 
								<div class="swiper-wrapper">
									<div class="swiper-slide" v-for="(item,index) in tradingDetailed.imgList">
										<img :src="item">
									</div>
								</div>
								<b class="next">></b>
			               	  	<b class="prev"><</b>
							</div>
							<div class="info">
								<p>{{ tradingDetailed.name }}
									<span v-show="tradingDetailed.identity==1" class="wei">未认证交易师</span>
									<span v-show="tradingDetailed.identity!=1">已认证交易师</span>
								</p>
								<p style="visibility: hidden;">吉林省优格信息科技有限责任公司</p>
								<button>联系方式</button>
							</div>
						</div>
					</div>
					<div class="content">
						<h5>基础信息</h5>
						<p class="cs_p">融资主体 ：<span>{{ tradingDetailed.financeBody }}</span></p>
                        <p class="cs_p">项目区域 ：<span>{{ tradingDetailed.province }}  {{ tradingDetailed.city }}</span></p>
						<p class="cs_p">融资金额 ：<span>{{ tradingDetailed.amountId }}</span></p>
                        <p class="cs_p">最佳融资期限 ：<span>{{ tradingDetailed.theFinancing }}</span></p>
                        <p class="cs_p">还款来源 ：<span>{{ tradingDetailed.sourceRepayment }}</span></p>
                        <p class="cs_p">资金用途 ：<span>{{ tradingDetailed.capitalUses }}</span></p>
					</div>
					<nuxt-link to='/pinpai'>
						<img src="@/assets/img/zhitongche.png" class="mt_30">
					</nuxt-link>
					<div class="content">
						<Share :showShare = 'show_share'></Share>
						<h5>项目描述</h5>
						<div class="text mt_30" v-html="tradingDetailed.describes"></div>
						<div class="share">
							<span><img src="/img/follow.png" class="mr">关注</span>
							<span @click = 'show_share = !show_share'><img class="mr" src="/img/share.png">分享到</span>
							<nuxt-link to='/call'><span><img src="/img/connect.png" class="mr">联系地金宝宝</span></nuxt-link>
						</div>
					</div>
					<div class="content">
						<h5>补充资料</h5>
						<div class="buchong">
							<span>改接口</span>
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
						<nuxt-link :to="{path:'/zhaoqian/detail',query:{id:item.id,nav:'2'}}">
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
import N from '../../api/nadiDetail'
export default {
	watchQuery: true,
	data(){
		return {
			choose:1,
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
		let[
			tradingDetailed,
			modulAdvertising,
			detailAdvertising,
			keyProjects,
		]
		= await Promise.all([
			N.tradingDetailed({
				'type':'3',
				'pid': context.route.query.id+''
			}),
			N.modulAdvertising(),
			N.detailAdvertising({'type':'3'}),
			N.keyProjects({"type":"3","sort":"2"})
		])
		return {
			tradingDetailed: tradingDetailed.data,
			modulAdvertising: modulAdvertising.data,
			detailAdvertising: detailAdvertising.data,
			keyProjects: keyProjects.data
		}
	},
	components:{
		Headersub,
		Footer,
		// Share
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
<style>
.mt_30{
	margin-top: 30px;
}
</style>
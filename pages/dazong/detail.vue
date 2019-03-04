<template>
	<div class="dazong_detail">
		<Headersub></Headersub>
		<div class="container">
			<div class="dazong_detail_main">
				<div class="left">
					<div class="tit pointer">
						<nuxt-link to='/dazong?id=1'>
							<span :class="choose==2?'choose':''">项目交易</span>
						</nuxt-link>
						<nuxt-link to="/dazong?id=2">
							<span :class="choose!=2?'choose':''">金主求购</span>
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
						<p class="cs_p">项目转让 ：<span>{{ tradingDetailed.transferId }}</span></p>
						<p class="cs_p">项目区域 ：<span>{{ tradingDetailed.province }}  {{ tradingDetailed.city }}</span></p>
						<p class="cs_p">交易属性 ：<span>{{ tradingDetailed.attributesId }}</span></p>
						<p class="cs_p">交易金额 ：<span>{{ tradingDetailed.amountId }}</span></p>
					</div>
					<nuxt-link to='/pinpai'>
						<img src="@/assets/img/zhitongche.png" class="mt_30">
					</nuxt-link>
					<div class="content">
						<h5>项目描述</h5>
						<div class="text mt_30" v-html="tradingDetailed.describes">
							
						</div>
						<div class="share">
							<span @click="f" class="follow">
								<img v-show="!tradingDetailed.collection" src="/img/follow_red.png">
								<img v-show="tradingDetailed.collection" src="/img/follow.png">关注
							</span>
							<span @click="sharebox=1"><img class="mr" src="/img/share.png">分享到</span>
							<nuxt-link to='/call'><span><img src="/img/connect.png" class="mr">联系地金宝宝</span></nuxt-link>
						</div>
						<div v-show="sharebox==1" class="sharebox">
							<Share :share_data = 'share_info' @quitshare='quit_s'></Share> 
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
						<nuxt-link :to="{path:'/dazong/detail',query:{id:item.id,nav:'2'}}">
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
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import Share from '~/components/share.vue'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import D from '../../api/dazongDetail'
export default {
	watchQuery: true,
	data(){
		return {
			follow:true,
			choose:2,
			sharebox:0,
			share_info:{
				title:'',
				img:''
			},
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
		// console.log(context.route.query.nav)
		let[
			modulAdvertising,
			detailAdvertising,
			keyProjects,
			tradingDetailed,
		]
		= await Promise.all([
			D.modulAdvertising(),
			D.detailAdvertising({'type':'1'}),
			D.keyProjects({'type':'1','sort':'2'}),
			D.tradingDetailed({'type':'1','pid':context.route.query.id+''})
		])
		return {
			modulAdvertising: modulAdvertising.data,
			detailAdvertising: detailAdvertising.data,
			keyProjects: keyProjects.data,
			tradingDetailed: tradingDetailed.data
		}
	},
	components:{
		Headersub,
		Footer,
		Share,
	},
	computed:{
		...mapGetters([
			'auth'
		]),
	},
	methods:{
		async f(){
			this.follow = !this.follow
			let pid = this.$route.query.id
			if(!this.follow){
				let res = await D.userCollection({
					"type":"1",
					"types":"0",
					"pid":pid+"",
					"uid":this.auth.uid+"",
				})
				// console.log(res)
			}else {
				let res = await D.userCollection({
					"type":"1",
					"types":"1",
					"pid":pid+"",
					"uid":this.auth.uid+"",
				})
				// console.log(res)
			}
		},
		quit_s(){
			this.sharebox = 0
		}
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
		this.share_info.title = this.tradingDetailed.projectName
		this.share_info.img = this.tradingDetailed.imgList[0]
	}
}
</script>
<style>
.mt_30{
	margin-top: 30px;
}
.follow img{
	margin-right: 10px;
}
div.content{
	position:relative;
}
.sharebox{
	width: 272px;
    height: 125px;
	border: 1px solid #d3d3d3;
	background-color:#fff;
	position: absolute;
	z-index: 9;
    right: 30px;
    bottom: -110px;
}
</style>
<template>
	<div class="kb_detail">
		<Headersub></Headersub>
		<img :src="soilPaging.list[7].picture" class="banner_pic">
		<div class="container">
			<div class="pinpai_common pointer">
				<nuxt-link v-for="(item,index) in test" :to='item.back'><span :class="item.id==click.typeId?'choose':''">{{ item.type }}</span></nuxt-link>
			</div>
			<h1 class="title">{{ click.title }}</h1>
			<div class="detail_t">
				<span>来源：{{ click.articleSource }}</span>
				<span>编辑：{{ click.author }}</span>
				<span>{{click.createDate}}</span>
				<span>浏览量：{{ click.fviews }}</span>
			</div>
			<div class="main">
				<div class="left">
					<div style="min-height:550px" v-html="click.articleContent"></div>
					<div class="paging">
						<div>
							<nuxt-link :to="{path:'/kuaibao/detail',query:{actical:click.preId,nav:click.typeId}}">
								<span>上一篇</span>
								<p id="clamp" style="line-height: 20px;">{{ click.preTitle }}</p>
							</nuxt-link>
						</div>
						<div>
							<nuxt-link :to="{path:'/kuaibao/detail',query:{actical:click.lastId,nav:click.typeId}}">
								<span>下一篇</span>
								<p id="clamp" style="line-height: 20px;padding: 0 0px 0 20px;">{{ click.lastTitle }}</p>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="ad"><nuxt-link to='/'><img :src="typeNewsPicture.picture"><span>{{ typeNewsPicture.type }}</span></nuxt-link></div>
					<div class="topten">
						<span>新闻Top 10</span>
					</div>
					<div class="eli" v-for="(item,index) in typeNewsRecommended.list1" :key="index">
						<nuxt-link :to="{path:'/kuaibao/detail',query:{actical:item.id,nav:item.djwType.id}}">
							<p>{{ item.title }}</p>
							<p>{{ item.createDate }}</p>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>	
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import  Kuaibao from '../../api/kuaibao'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"

export default {
	watchQuery: true,
	data(){
		return {
			test:[
				{id: "1dd0a9536f1748159501df1f6bcd99cd", type: "投融资讯",back:"/kuaibao?typeId=1dd0a9536f1748159501df1f6bcd99cd"},
				{id: "6a2b89f8569c404eb07aa8ce118ee577", type: "地产财经",back:'/kuaibao?typeId=6a2b89f8569c404eb07aa8ce118ee577'},
				{id: "9a83d204d9944d6c878fc7ce1bffdbfb", type: "地产新闻",back:'/kuaibao?typeId=9a83d204d9944d6c878fc7ce1bffdbfb'},
			],
		}
	},
  components: {
    Headersub,
	Footer,
  },
  async asyncData (context) {
	// console.log(context.route.query.actical)
		let [ 
			soilPaging,
			typeNewsPicture,
			typeNewsRecommended,
			click,
		]
		= await Promise.all([
			Kuaibao.soilPaging(),
			// Kuaibao.djwType() 接口数据更改 testrr
			Kuaibao.typeNewsPicture(JSON.stringify({oid:context.store.state.auth.oid})),
			Kuaibao.typeNewsRecommended(JSON.stringify({
				...(context.store.state.auth),
				"total":"0",
				"count":"10",
				"recommended":"0",
			})),
			Kuaibao.click(JSON.stringify({
				oid:context.store.state.auth.oid,
				id:context.route.query.actical,
				terminal:'1'
			})),
		])
		return {
			soilPaging:soilPaging.data,
			// djwType:djwType.data
			typeNewsPicture:typeNewsPicture.data,
			typeNewsRecommended:typeNewsRecommended.data,
			click:click.data
		}
	},
	methods:{
		 ...mapMutations({
			set_detail_navbar: 'SET_DETAIL_NAVBAR',
			change_currentpage: 'CHANGE_POST_PAGE_CURRENT'
		}),
	},
	beforeRouteUpdate (to, from, next){
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
		next()
	},
	created(){
		this.set_detail_navbar(this.$route.query.nav)
	},
  mounted(){
	var module = document.querySelectorAll("#clamp");
    module.forEach((e,i)=>{
        $clamp(e, {clamp: 1});
    })
  	$('.paging div').hover(
  		function(){$(this).addClass('choose')},
  		function(){$(this).removeClass('choose')},
	)
  }
}
</script>
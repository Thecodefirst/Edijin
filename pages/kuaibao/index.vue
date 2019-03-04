<template>
	<div class="kuaibao">
		<Headersub></Headersub>
		<img :src="soilPaging.list[7].picture" class="banner_pic">
		<div class="container">
			<div class="main">
				<div class="left">
					<div class="tit pointer">
						<nuxt-link :to="{path:'/kuaibao',query:{typeId:item.id}}" v-for="(item,index) in test"> 
							<span @click="set_detail_navbar(item.id);" :class="item.id==page.detail_navbar?'choose':''">{{ item.type }}</span>
						</nuxt-link>
					</div>
				 	<ul class="kuaibao">
			            <li v-for="(item,index) in typeNewsPage.list1">
							<nuxt-link :to="{path:'/kuaibao/detail',query:{actical:item.id,nav:item.djwType.id}}">
									<img :src="item.picture">
									<div>
										<h1>{{ item.title }}</h1>
										<p id="">{{ item.subtitle }}</p>
										<div><b>{{ item.keywords }}</b><b>{{ item.articleSource }}</b><b>{{ item.createDate }}</b></div>
									</div>
							</nuxt-link>
		            	</li>
			        </ul>
					 <Page :total="typeNewsPage.list2" :page-size='9' @on-change='t' :current.sync='current'/>
			        <!-- <div class="M-PagingBox"></div> -->
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
<script>
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import Kuaibao from '../../api/kuaibao'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import { page } from '../../store/getter';
export default {
	watchQuery: true,
	data(){
		return{ 
			current:1,
			test:[
				{id: "1dd0a9536f1748159501df1f6bcd99cd", type: "投融资讯",back:"/kuaibao"},
				{id: "6a2b89f8569c404eb07aa8ce118ee577", type: "地产财经",back:'/kuaibao?id=1'},
				{id: "9a83d204d9944d6c878fc7ce1bffdbfb", type: "地产新闻",back:'/kuaibao?id=2'},
			],
		}
	},
	components: {
		Headersub,
		Footer,
	},
	computed:{
        ...mapState({
				auth:'auth',
				page:'page',
				post:'post'
       })
	},
	watch:{
		pageindex:{
			handler(){
				
			}
		}
	},
	methods:{
		...mapMutations({
			set_detail_navbar: 'SET_DETAIL_NAVBAR',
			// change_currentpage: 'CHANGE_POST_PAGE_CURRENT'
		}),
		t(a){
			Kuaibao.typeNewsPage(JSON.stringify({
					oid:this.auth.oid,
					terminal:this.auth.terminal,
					typeId:this.page.detail_navbar,
					pageIndex:a+'',
					count:'9',
				})).then((res)=>{
					console.log(res)
					this.typeNewsPage = res.data
				})
		}
	},
	async asyncData (context) {
		let [ 
			soilPaging,
			djwType,
			typeNewsPicture,
			typeNewsRecommended,
			typeNewsPage,
		]
		= await Promise.all([
			Kuaibao.soilPaging(),
			Kuaibao.djwType(),
			Kuaibao.typeNewsPicture(JSON.stringify({oid:context.store.state.auth.oid})),
			Kuaibao.typeNewsRecommended(JSON.stringify({
				...(context.store.state.auth),
				"total":"0",
				"count":"10",
				"recommended":"1",
			})),
			Kuaibao.typeNewsPage(JSON.stringify({
				...(context.store.state.auth),
				typeId:context.route.query.typeId||'1dd0a9536f1748159501df1f6bcd99cd',
				pageIndex:'1',
				"count":"9",
			}))
		])
		return {
			soilPaging: soilPaging.data,
			djwType:djwType.data,
			typeNewsPicture:typeNewsPicture.data,
			typeNewsRecommended:typeNewsRecommended.data,
			typeNewsPage:typeNewsPage.data,

		}
	},
	created(){
		if(!this.$route.query.typeId){
			this.set_detail_navbar('1dd0a9536f1748159501df1f6bcd99cd')
		}
	},

	mounted(){
		var module = document.querySelectorAll("#clamp");
        module.forEach((e,i)=>{
            $clamp(e, {clamp: 3});
        })
	}
}
</script>
<style>
@import url('@/assets/css/iview.css');
.ivu-page{
	text-align: center;
}
</style>


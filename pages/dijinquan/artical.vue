<template>
	<div class="kb_detail">
		<Headersub></Headersub>
		<div class="container">
			<div class="pinpai_common pointer">
                <span :class="index==page.choose-1?'choose':''" v-for="(item,index) in djwDjCircleHomePage.typeList"><nuxt-link :to="{path:'/dijinquan/detail',query:{id:item.id,flag:item.flag}}">{{ item.name }}</nuxt-link></span>
				<!-- <nuxt-link v-for="(item,index) in test" :to='item.back'><span :class="item.id==click.typeId?'choose':''">{{ item.type }}</span></nuxt-link> -->
			</div>
			<h1 class="title">手动阀手动阀手动阀十分</h1>
			<div class="detail_t">
				<span>来源：手动阀手动阀手动阀十分</span>
				<span>编辑：手动阀手动阀手动阀十分</span>
				<span>sdfsdf</span>
				<span>浏览量：手动阀手动阀手动阀十分</span>
			</div>
			<div class="main">
				
				
			</div>
		</div>
		<Footer></Footer>	
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import DJ from '../../api/dijinquan'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
	data(){
		return {
			
		}
	},
  components: {
    Headersub,
	Footer,
  },
  computed:{
        ...mapState([
                'page',
            ]),
    },
  async asyncData (context) {
	// console.log(context.route.query.actical)
		let [ 
			djwDjCircleHomePage,
		]
		= await Promise.all([
			DJ.djwDjCircleHomePage(),
		])
		return {
			djwDjCircleHomePage: djwDjCircleHomePage.data
		}
	},
  mounted(){
  	// $('.paging div').hover(
  	// 	function(){$(this).addClass('choose')},
  	// 	function(){$(this).removeClass('choose')},
	// )
  }
}
</script>
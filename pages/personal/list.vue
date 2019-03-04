<template>
	<div class="charge personal">
		<Headersub></Headersub>
		<div class="container">
			<div class="main">
				<div class="left">

					<!-- 交易师 -->

					<nuxt-link v-show="this.auth.identity==1||this.auth.identity==3" to='/personal/list/center' ><p @click="addClass(0)">个人中心<i>认证状态</i><b>{{ this.identity.a }} </b></p></nuxt-link>
					<nuxt-link v-show="this.auth.identity==1||this.auth.identity==3" to='/personal/list'><p @click="addClass(1)">发布项目管理</p></nuxt-link>
					<nuxt-link v-show="this.auth.identity==1||this.auth.identity==3" to='/personal/list/public_j'><p @click="addClass(2)">我要发布项目</p></nuxt-link>
					<nuxt-link v-show="this.auth.identity==1||this.auth.identity==3" to='/personal/list/follow'><p @click="addClass(3)">关注项目管理</p></nuxt-link>
					
					<!-- 资方 -->

					<nuxt-link v-show="this.auth.identity==2||this.auth.identity==0" to='/personal/list/center'><p @click="addClass(4)">个人中心<i>认证状态</i><b>{{ this.identity.a }}</b></p></nuxt-link>
					<nuxt-link v-show="this.auth.identity==2||this.auth.identity==0" to='/personal/list'><p @click="addClass(5)">发布资金管理</p></nuxt-link>
					<nuxt-link v-show="this.auth.identity==2||this.auth.identity==0" to='/personal/list/public'><p @click="addClass(6)">我要发布需求</p></nuxt-link>
					<nuxt-link v-show="this.auth.identity==2||this.auth.identity==0" to='/personal/list/follow'><p @click="addClass(7)">关注项目管理</p></nuxt-link>
					<!-- <nuxt-link v-show="this.auth.identity==2||this.auth.identity==0" to='/personal/list/follow'><p @click="addClass(8)">推荐项目管理</p></nuxt-link> -->


					<img src="@/assets/img/left1.jpg">
					<img src="@/assets/img/left1.jpg">
				</div>
				<div class="right">
					<nuxt-child/>
				</div>
			</div>
		</div>
		<Sidetool></Sidetool>
		<Footer></Footer>
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import Sidetool from '~/components/sidetool.vue'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
	data(){
		return{
			// sidebar:null
		}
	},
	computed:{
	  ...mapState([
		  'page',
		  'auth'
	  ]),
	  identity(){
		  if(this.auth.identity==0){
			  return {a:'未认证',b:'金主'}
		  }else if(this.auth.identity==1){
			  return {a:'未认证',b:'交易师'}
		  }else if(this.auth.identity==2){
			  return {a:'认证成功',b:'金主'}
		  }else if(this.auth.identity==3){
				return {a:'认证成功',b:'交易师'}
		  }
	  }
	},
	methods:{
		addClass(c){
			let p = document.querySelectorAll(".left a p")
			p.forEach((e,i) => {
				e.classList.remove('active')
			});
			document.querySelectorAll(".left a p")[c].classList.add('active');
		}
	},
	beforeRouteUpdate(to, from, next) {
		let p = document.querySelectorAll(".left a p")
		p.forEach((e,i) => {
			e.classList.remove('active')
		});
		let r = to.path
		if(r=='/personal/list/center'){
			document.querySelectorAll(".left a p")[0].classList.add('active')
			document.querySelectorAll(".left a p")[4].classList.add('active')
		}else if(r=='/personal/list'){
			document.querySelectorAll(".left a p")[1].classList.add('active')
			document.querySelectorAll(".left a p")[5].classList.add('active')
		}else if(r=='/personal/list/public'){
			document.querySelectorAll(".left a p")[6].classList.add('active')
		}else if(r=='/personal/list/follow'){
			document.querySelectorAll(".left a p")[3].classList.add('active')
			document.querySelectorAll(".left a p")[7].classList.add('active')
		}else if(r=='/personal/list/public_j'){
			document.querySelectorAll(".left a p")[2].classList.add('active')
		}
    	next()
    },
	mounted(){
		let r = this.$route.fullPath
		setTimeout(function(){
			if(r=='/personal/list/center'){
				document.querySelectorAll(".left a p")[0].classList.add('active')
				document.querySelectorAll(".left a p")[4].classList.add('active')
			}else if(r=='/personal/list'){
				document.querySelectorAll(".left a p")[1].classList.add('active')
				document.querySelectorAll(".left a p")[5].classList.add('active')
			}else if(r=='/personal/list/public'){
				document.querySelectorAll(".left a p")[6].classList.add('active')
			}else if(r=='/personal/list/follow'){
				document.querySelectorAll(".left a p")[3].classList.add('active')
				document.querySelectorAll(".left a p")[7].classList.add('active')
			}else if(r=='/personal/list/public_j'){
				document.querySelectorAll(".left a p")[2].classList.add('active')
			}
		},0)
	},
	created(){

	},
	components:{
		Headersub,
		Footer,
		Sidetool
	},
}
</script>
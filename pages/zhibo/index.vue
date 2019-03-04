<template>
	<div class="zhibohome">
		<headersub></headersub>
		<div class="container">
			<div class="shadow">
				<div class="pinpai_common">
		          <span class="choose">土拍直播</span>
		          <nuxt-link :to="{path:'/zhibo/first',query:{id:'2'}}"><b>更多 ></b></nuxt-link>
		        </div>
		        <div class="swiper-container">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide"><img src="@/assets/img/d_swiper.jpg"></div>
			            <div class="swiper-slide"><img src="@/assets/img/d_swiper.jpg"></div>
			        </div>
			        <div class="swiper-pagination"></div>
		      	</div>
		      	<div class="right">
		      		<p>最新直播</p>
		      		<!-- <img src="@/assets/img/zhiboline.png" class="line"> -->
		      		
		      		<div class="fst_gai">
		      			<i><b></b>更多</i>
		      			<div>
			      			<p>
			      				<b></b>
			      				<span>直播中</span>
			      				<span>【9:30】温州平阳县江镇出让1宗商住地，楼面4472元的面积来进行</span>
			      			</p>
			      			<ul><li>05-23</li><li>温州</li><li>温州</li></ul>
			      		</div>
			      		<div>
			      			<p>
			      				<b></b>
			      				<span>直播中</span>
			      				<span>【9:30】温州平阳县江镇出让1宗商住地，楼面4472元的面积来进行</span>
			      			</p>
			      			<ul><li>05-23</li><li>温州</li><li>温州</li></ul>
			      		</div>
			      		<div>
			      			<p>
			      				<b></b>
			      				<span>直播中</span>
			      				<span>【9:30】温州平阳县江镇出让1宗商住地，楼面4472元的面积来进行</span>
			      			</p>
			      			<ul><li>05-23</li><li>温州</li><li>温州</li></ul>
			      		</div>
			      		<div>
			      			<p>
			      				<b></b>
			      				<span>直播中</span>
			      				<span>【9:30】温州平阳县江镇出让1宗商住地，楼面4472元的面积来进行</span>
			      			</p>
			      			<ul><li>05-23</li><li>温州</li><li>温州</li></ul>
			      		</div>
		      		</div>
		      	</div>
			</div>
			<div>
				<div class="pinpai_common">
		         <span class="choose">活动直播</span>
		           <nuxt-link :to="{path:'/zhibo/first',query:{id:'3'}}"><b>更多 ></b></nuxt-link>
		        </div>
		        <div class="lb">
		        	<img src="@/assets/img/d_swiper.jpg">
		        	<span>sdfsdfsdfsdf</span>
		        </div>
		      	<div class="right">
		      		<div class="rb"><img src="@/assets/img/d_swiper.jpg"><span>sdfsdfsdfsdf</span></div>
		      		<div class="rb"><img src="@/assets/img/d_swiper.jpg"><span>sdfsdfsdfsdf</span></div>
		      		<div class="rb"><img src="@/assets/img/d_swiper.jpg"><span>sdfsdfsdfsdf</span></div>
		      		<div class="rb"><img src="@/assets/img/d_swiper.jpg"><span>sdfsdfsdfsdf</span></div>
		      	</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    Headersub,
    Footer,
	},
	created(){
		// let id = this.$route.query.id
		// if(id == 2){
		// 	this.$router.push({
		// 		path:'/zhibo/first',query:{id:id}
		// 	})
		// }else if(id==3){
		// 	this.$router.push({
		// 		path:'/zhibo/first',query:{id:id}
		// 	})
		// }
	},
  mounted(){
	// var mySwiper1 = new Swiper ('.swiper-container', {
	// 	direction: 'horizontal',
    //      autoplay: true,
    //      loop: true,
    //      pagination: {
    //       el: '.swiper-pagination',
    //     },
	// });
  }
}
</script>
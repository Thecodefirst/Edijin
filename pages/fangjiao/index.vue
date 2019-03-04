<template>
    <div class="kuaibao">
		<Headersub></Headersub>
		<!-- <img src="@/assets/img/d_swiper.jpg" class="banner_pic"> -->
        <div style="width:100%;text-align:center;padding:100px 0 200px 0;">
			<img src="@/assets/img/preview.png" alt="">
			<p style="font-size:26px; margin-top:30px;">正在开发</p>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
export default {
    data(){
        return {
            choose:1,
        }
    },
    components:{
        Headersub,
        Footer
    },
    created(){
        if(this.$route.query.id==2){
            this.choose = 1
        }else{
            this.choose = this.$route.query.id||1
        }
    },
}
</script>

<style>
</style>



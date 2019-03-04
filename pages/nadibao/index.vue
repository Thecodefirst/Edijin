<template>
    <div class="kuaibao">
		<Headersub></Headersub>
		<!-- <img src="@/assets/img/d_swiper.jpg" class="banner_pic"> -->
        <div style="width:100%;text-align:center;padding:100px 0 200px 0;">
			<img src="@/assets/img/preview.png" alt="">
			<p style="font-size:26px; margin-top:30px;">正在开发</p>
		</div>
		<!-- <div class="container">
			<div class="main" >
				<div class="left" :class="choose==1?'':'ndb_w'">
					<div class="tit pointer">
						<span :class="choose==1?'choose':(choose==2)?'choose':''" @click='choose=1'>土拍预告</span>
						<span :class="choose==3?'choose':''" @click='choose=3'>土拍直播</span>
                        <nuxt-link to='/' class="ndb_a">地产研究院</nuxt-link>
					</div>
				 	<ul class="kuaibao" v-show="choose==1">
			            <li>
			              <img src="@/assets/img/d_kuaibao.jpg">
			              <div>
			                <h1>论坛峰会即将结束，这些房屋将作废3类人将无房可住！</h1>
			                <p>本月初被住建部约谈的12个城市中居然有四个城市属于西部，分别是被住建部约谈的12个城市中居然有四个城市属于西部，分别是被住建部约谈的12个城市中居然有四个城市属于西部，分别是被住建部约谈的12个城市中居然有四个城市属于西部，分别是成都、西安（楼盘）昆明
			（楼盘）、贵阳，狠狠刷了一把存在感</p>
			                <div><b class="ndb_b">2018-05-25</b></div>
			              </div>
		            	</li>
                        <li>
			              <img src="@/assets/img/d_kuaibao.jpg">
			              <div>
			                <h1>论坛峰会即将结束，这些房屋将作废3类人将无房可住！</h1>
			                <p>本月初被住建部约谈的12个城市中居然有四个城市属于西部，分别是被住建部约谈的12个城市中居然有四个城市属于西部，分别是被住建部约谈的12个城市中居然有四个城市属于西部，分别是被住建部约谈的12个城市中居然有四个城市属于西部，分别是成都、西安（楼盘）昆明
			（楼盘）、贵阳，狠狠刷了一把存在感</p>
			                <div><b class="ndb_b">2018-05-25</b></div>
			              </div>
		            	</li>
			        </ul>
			        <div :class="choose!=3?'':'show'" class="M-PagingBox"></div>
				</div>
				<div class="right" v-show="choose==1">
					<div class="ad"><img src="@/assets/img/d_swiper.jpg"><span>sdfsdfs</span></div>
					<div class="topten">
						<span>重点预告</span>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
				</div>
                <div class="listhead" v-show="choose==3">
                    <span>直播</span>
                    <span>直播日期</span>
                    <span>城市</span>
                    <span>区域版块</span>
                    <span>宗数</span>
                    <span>面积</span>
                    <span>金额</span>
                </div>
                <div class="listcon" v-show="choose==3">
                    <span>待直播</span>
                    <span>【15:00直播】常州金坛区出让一宗宅地，起拍楼面价3469元/m²</span>
                    <span>2018-05-26</span>
                    <span>常州</span>
                    <span>金坛区</span>
                    <span>1</span>
                    <span>1036</span>
                    <span>--</span>
                </div>
                <div :class="choose==3?'':'show'" class="M-PagingBox"></div>
			</div>
		</div> -->
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
    mounted(){
        $('.M-PagingBox').pagination({
		    mode: 'fixed'
		});
    }
}
</script>

<style>
.show{
    display: none!important;
}
b.ndb_b{
    float: left!important;
}
a.ndb_a{
    float: right;
    margin-right: 20px;
}
div.left.ndb_w{
    width: 1198px!important;
    float: none!important;
}
.listhead{
    width: 100%;
    height: 60px;
    background-color: #15213d;
    padding:0;
    margin-top: 30px;
}
.listhead span{
    display: inline-block;
    height: 60px;
    line-height:60px;
    color: #fff;
    width: 110px;
    text-align:center;
}
.listhead span:first-of-type{
    margin-right:400px;
}
.listcon{
    padding: 0;
    width: 100%;
    height: 78px;
    line-height:78px;
    color: #15213d;
    font-size:14px;
    border-bottom:1px solid #eee;
    overflow: hidden;
    margin-bottom: 40px;
}
.listcon span{
    float: left;
    width: 80px;
    text-align: center;
    margin-right: 36px;
}
.listcon span:first-of-type{
        margin: auto 0;
        width: 56px;
        height: 30px;
        text-align:center;
        line-height:30px;
        border:1px solid #15213d;
        margin-top: 23px;
        margin-right: 20px;
    }
.listcon span:last-of-type{
    width: 65px;
    margin-right: 0;
}
.listcon span:nth-of-type(2){
    width: 410px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 40px;
}
.listcon span:nth-of-type(3){
    margin-right: 40px;
}
</style>


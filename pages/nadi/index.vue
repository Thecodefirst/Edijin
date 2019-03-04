<template>
	<div class="zhaoqian">
		<Headersub></Headersub>
		<img :src="soilPaging.list[6].picture" class="banner_pic">
		<div class="container">
			<div class="main">
				<div class="left">
					<div class="z_top_img">
						<nuxt-link :to='modulAdvertising.urlOne'>
							<img :src="modulAdvertising.pictureOne">
						</nuxt-link>
						<nuxt-link :to='modulAdvertising.urlTwo'>
							<img :src="modulAdvertising.pictureTwo">
						</nuxt-link>
					</div>
					<div class="tit pointer">
						<span :class="choose==1?'choose':(choose==0?'choose':'')" @click='choose=1;init()'>供土地</span>
						<span :class="choose==2?'choose':''" @click='choose=2;init()'>求土地</span>
					</div>

					<Select :list = "choose==2?list1:list"  @initpage='set_current' @initpage1='set_current1' @surecity='concity'></Select>


					<nuxt-link :to="{path:'/nadi/detailjin',query:{id:item.id}}" v-for="(item,index) in ownerProject.list">
						<div class="li" v-show='choose==2'>
							<p>
								<span>严选</span>
								<span>{{ item.title }}</span>
								<span>{{ item.createDate }}</span>
							</p>
							<div class="con">
								<div class="qiugouLeft">
									<p><span>拿地方式 ：</span>{{ item.land }}</p>
									<p><span>投资区域 ：</span>{{ item.province }} {{ item.city }} </p>
									<p><span>城市规格 ：</span>{{ item.lineId }}</p>
								</div>
								<div class="qiugouRight">
									<p>{{ item.name }}<span v-show="item.identity==0">未认证金主</span><span v-show="item.identity==2">已认证金主</span></p>
									<!-- <p>吉林省优格科技有限公司</p> -->
									<button>推荐项目</button>
								</div>
							</div>
						</div>
					</nuxt-link>
					<nuxt-link :to="{path:'/nadi/detail',query:{id:item.id}}" v-for="(item,index) in tradingProject.list">
						<div class="li" v-show='choose!=2'>
							<p>
								<span>严选</span>
								<span>{{ item.title }}</span>
								<span>{{ item.createDate }}</span>
							</p>
							<div class="con">
								<div class="pic">
									<img :src="item.picture">
									<p>{{ item.information }}</p>
								</div>
								<div class="info">
									<p><span>拿地方式 :  </span>{{ item.land }}</p>
									<p><span>所在区域 :  </span>{{ item.province }} {{ item.city }}</p>
									<p>{{ item.name }}&nbsp&nbsp<span v-show="item.identity==1" class="hz">未认证交易师</span><span v-show="item.identity==3" class="hz renzheng">已认证交易师</span></p>
									
									<!-- <p>某某公司</p> -->
								</div>
							</div>
						</div>
					</nuxt-link>
					
					 <Page ref="page1" v-show='choose!=2' :total="tradingProject.list1" :page-size='10' @on-change='t' :current.sync='current'/>
					
					<Page ref="page1" v-show='choose==2' :total="ownerProject.list1" :page-size='10' @on-change='t1' :current.sync='current1'/>

				</div>
				<div class="right">
					<img src="@/assets/img/tp.png">
					<div v-show="choose!=2" class="tp" v-for="(item,index) in keyProjects.list">
						<img :src="item.picture">
						<p>{{ item.title }}</p>
					</div>
					<div v-show="choose==2" class="tp" v-for="(item,index) in keyProjects2.list">
						<nuxt-link :to="{path:'/nadi/detail',query:{id:item.id}}">
							<img :src="item.picture">
							<p>{{ item.title }}</p>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue';
import Footer from '~/components/footer.vue';
import Select from '~/components/multiple_select.vue';
import Nadi from '../../api/nadi'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default{
	data(){
		return{
			choose:1,
			current:1,
			current1:1,
			list:[
				{name:'拿地严选',check:'nadiyanxuan',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},{name:'严选'}]},
				{name:'拿地方式',check:'nadifangshi',city:false,multiple:true,more:true,select:true,arr:[{name:'不限'}]},
				{name:'所在区域',check:'suozai',city:true,multiple:false,more:false,select:true,arr:[]},
				
			],
			list1:[
				{name:'拿地严选',check:'p_nadiyanxuan',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},{name:'严选'}]},
				{name:'拿地方式',check:'p_nadifangshi',city:false,multiple:true,more:true,select:true,arr:[{name:'不限'}]},
				{name:'所在区域',check:'p_nadisuozai',city:true,multiple:false,more:false,select:true,arr:[]},
				{name:'城市规划',check:'p_nadiguihua',city:false,multiple:true,more:true,select:false,arr:[{name:'不限'}]},
            ],
		}
	},
	computed:{
		...mapGetters([
			'nadi_gong',
			'nadi_qiu',
			// 'dazong_jinzhu'
		])
	},
	components:{
		Headersub,
		Footer,
		Select
	},
	watch:{
		nadi_gong:{
			handler(newValue,oldValue){
				Nadi.tradingProject(JSON.stringify(
					this.nadi_gong
				))
				.then((res)=>{
					this.tradingProject = res.data
				})
			},
			deep:true
		},
		nadi_qiu:{
			handler(newValue,oldValue){
				Nadi.ownerProject(JSON.stringify(
					this.nadi_qiu
				))
				.then((res)=>{
					this.ownerProject = res.data 
				})
			},
			deep:true
		}

	},
	methods:{
		...mapMutations({
			change_nadi_pageindex: 'CHANGE_NADI_PAGEINDEX',
			change_nadi_city: 'CHANGE_NADI_CITY',
			change_p_nadi_city: 'CHANGE_P_NADI_CITY',
			change_p_nadi_pageindex: 'CHANGE_P_NADI_PAGEINDEX',
			// change_city : 'CHANGE_CITY',
			
		}),
		init(){
			setTimeout(function(){
				$('.unit_city').removeClass('height_auto')
				$('.c div').removeClass('chosen') 
				$('.unit b').removeClass('choose')
				$('.showmore div b').removeClass('choose')
				$('.city_select>div').each(function(e,i){
					$(this).find('b:eq(0)').addClass('choose')
				})
			},0)
		},
		set_current(){
			this.current = 1
		},
		set_current1(){
			this.current1 = 1
		},
		concity(city){
			if(this.choose==2){
				this.change_p_nadi_city(city)
			}else if(this.choose!=2){
				this.change_nadi_city(city)
			}
		},
		t(a){
			this.change_nadi_pageindex(a+'')
		},
		t1(a){
			this.change_p_nadi_pageindex(a+'')
		}
	},
	async asyncData (context) {
		let [
			modulAdvertising,
			soilPaging,
			FilterData,
			tradingProject,
			ownerProject,
			keyProjects,
			keyProjects2,
		]
		= await Promise.all([
			Nadi.modulAdvertising(),
			Nadi.soilPaging(),
			Nadi.FilterData({'type':'2'}),
			Nadi.tradingProject({'type':'2',"pageIndex":"1","count":"10"}),
			Nadi.ownerProject({'type':'2',"pageIndex":"1","count":"10"}),
			Nadi.keyProjects({"type":"2","sort":"2"}),
			Nadi.keyProjects({"type":"2","sort":"1"})
		])
		return {
			modulAdvertising: modulAdvertising.data,
			soilPaging: soilPaging.data,
			FilterData: FilterData.data,
			tradingProject: tradingProject.data,
			ownerProject: ownerProject.data,
			keyProjects: keyProjects.data,
			keyProjects2:keyProjects2.data

		}
	},
	created(){
		this.choose = this.$route.query.id||1
	},
	mounted(){
		this.list[1].arr.push(...this.FilterData.lands)
		this.list[2].arr.push(...this.FilterData.area)

		this.list1[1].arr.push(...this.FilterData.lands)
		this.list1[2].arr.push(...this.FilterData.area)
		this.list1[3].arr.push(...this.FilterData.lines)
	}
}
</script>
<style type="text/css">
@import url(@/assets/css/iview.css);
.ivu-page{
	text-align: center;
	margin-top: 40px;
}   
	div.tp{
		margin-top: 30px;
		position: relative;
		width: 386px;
		height: 216px;
	}
	div.tp img{
		width: 386px;
		height: 216px;
	}
	div.tp p{
		width: 386px;
		height: 40px;
		position: absolute;
		bottom: 0;
		left:0;
		background-color: rgba(0,0,0,0.5);
		line-height: 40px;
		text-indent: 10px;
		color: #fff;
	}
	div.main{
		padding-bottom: 100px;
	}
	div.li{
		width: 750;
		height: 183px;
		background-color: #fff;
		margin-top: 20px;
		padding: 28px 0 0 30px;
		border: 1px solid #eee;
	}
	div.li>p{
		overflow: hidden;
		height: 22px;
	}
	div.li>p span{
		float: left;
	}
	div.li>p span:first-of-type{
		color:#cda550;
		font-size:12px;
		width: 40px;
		height: 20px;
		border:1px solid #cda550;
		text-align: center;
		line-height: 20px;
		border-radius: 6px;
		margin-right: 10px;
	}
	div.li>p span:nth-of-type(2){
		color:#333;
		font-size:18px;
		height: 22px;
		line-height: 22px;
		width: 600px;
		overflow: hidden;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-weight: bold;
	}
	div.li>p span:last-of-type{
		color: #999;
		font-size: 12px;
		height: 22px;
		line-height: 26px;
	}
	div.li div.con div.pic{
		width: 190px;
		height: 106px;
		position: relative;
		float: left;
	}
	div.li div.con{
		margin-top: 20px;
		overflow: hidden;
	}
	div.li div.con div.pic img{
		width: 190px;
		height: 106px;
	}
	div.li div.con div.pic p{
		width: 50px;
		height: 22px;
		text-align: center;
		line-height: 22px;
		position: absolute;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.5); 
		border-radius: 0 0 14px 0; 
		color: #fff;
		font-size:12px;
	}
	div.li div.con div.info{
		padding-top:10px; 
		margin-left: 30px;
		float: left;
		width: 470px;
		height: 120px;
		overflow: hidden;
		/*background-color: red;*/
	}
	div.li div.con div.info p{
		width: 210px;
		height: 20px;
		float: left;
		margin-bottom:22px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-right: 25px;
	}
	div.li div.con div.info p span{
		color: #999;
	}
	div.li div.con div.info p span.hz{
		color: #999;
		font-size: 12px;
		border:1px solid #999;
		border-radius: 10px;
		padding: 2px 6px;
		display: inline-block;
	}
	div.li div.con div.info p span.hz.renzheng{
		border:none;
		color: #ff0000;
		background-color: #ffe3e3;
	}
	.M-PagingBox a, .M-PagingBox span{
		border-color: #e0e0e0;
	}
	.M-PagingBox{
		margin-top: 40px;
	}
	div.li div.con div.qiugouLeft{
		float: left;
		width:454px;
		border-right:1px solid #eee;  
		padding-top: 15px;
    }
    div.li div.con div.qiugouLeft p:first-of-type{
          width: 400px;
    }
	div.li div.con div.qiugouLeft p{
		width: 160px;
		height: 16px;
		line-height: 16px;
		float: left;
		margin-bottom: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	div.li div.con div.qiugouLeft p span{
		color: #999;
	}
	div.li div.con div.qiugouRight{
		float: left;
		margin-left: 20px;
	}
	div.li div.con div.qiugouRight p:first-of-type span{
		display: inline-block;
		padding: 6px 3px;
		background-color: #ffe3e3;
		color: #ff0000;
		font-size:12px;
		border-radius: 8px;
		margin-left: 10px;
		margin-bottom: 14px;
	}
	div.li div.con div.qiugouRight p:nth-of-type(2){
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 214px;
	}
	div.li div.con div.qiugouRight button{
		width: 100px;
		height: 34px;
		background-color: #dd514c;
		color: #fff;
		line-height: 34px;
		text-align: center;
		border: none;
		outline: 0;
		border-radius: 8px;
		margin-top: 17px; 
	}
</style>

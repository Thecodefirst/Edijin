<template>
	<div class="zhaoqian">
		<Headersub></Headersub>
		<img :src="soilPaging.list[8].picture" class="banner_pic">
		<div class="container">
			<div class="main">
				<div class="left">
					<div class="z_top_img">
						<img :src="modulAdvertising.pictureOne">
						<img :src="modulAdvertising.pictureTwo">
					</div>
					<div class="tit pointer">
						<!-- <nuxt-link :to="{path:'/dazong'}"> -->
							<span :class="choose==0?'choose':(choose==1?'choose':'')" @click='choose=1;init()'>项目融资</span>
						<!-- </nuxt-link> -->
						<!-- <nuxt-link :to="{path:'/dazong'}"> -->
							<span :class="choose==2?'choose':''" @click='choose=2;init()'>优选资金</span>
						<!-- </nuxt-link> -->
					</div>

					
					<Select :list = "choose==2?list1:list" @initpage='set_current' @initpage1='set_current1' @surecity='concity'></Select>



					<nuxt-link :to="{path:'/zhaoqian/detailjin',query:{id:item.id,nav:1}}" v-for="(item,index) in OwnerProject.list">
						<div class="li" v-show='choose==2'>
								<p>
									<span>严选</span>
									<span>{{ item.title }}</span>
									<span>{{ item.createDate }}</span>
								</p>
								<div class="con">
									<div class="qiugouLeft">
										<p><span>资金主体：</span>{{ item.funding }}</p>
										<p><span>交易金额 ：</span>{{ item.amountId }}</p>
										<p><span>城市规划 ：</span>{{ item.lineId }}</p>
										<p><span>项目区域 ：</span>{{ item.province }}</p>
										<p><span>业务方式 ：</span>{{ item.way }}</p>
									</div>
									<div class="qiugouRight">
										<p>{{ item.name }}<span class="hz renzheng" v-show="item.identity==2">已认证金主</span><span class="hz weirenzheng" v-show="item.identity==0">未认证金主</span></p>
										<!-- <p>{{ item.projectName }}</p> -->
										<button>推荐项目</button>
									</div>
								</div>
						</div>
						</nuxt-link>
					<nuxt-link :to="{path:'/zhaoqian/detail',query:{id:item.id,nav:2}}" v-for="(item,index) in listProject.list">
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
										<p><span>融资主体 :  </span>{{ item.financeBody }}</p>
										<p><span>融资金额 :  </span>{{ item.amountId }}</p>
										<p><span>项目区域 :  </span>{{ item.province }}</p>
										<p><span>最佳融资期限 :  </span>{{ item.theFinancing }}</p>
										<p>{{ item.name }}&nbsp&nbsp<span class="hz renzheng" v-show="item.identity==3">已认证交易师</span><span class="hz" v-show="item.identity==1">未认证交易师</span></p>
										<!-- <p>某某公司</p> -->
									</div>
								</div>
						</div>
					</nuxt-link>
				


					 <Page ref="page1" v-show='choose!=2' :total="listProject.list1" :page-size='10' @on-change='t' :current.sync='current'/>
					 <Page v-show='choose==2' :total="OwnerProject.list1" :page-size='10' @on-change='t1' :current.sync='current1'/>



					 
				</div>
				<div class="right">
					<img src="@/assets/img/tp.png">
					<div class="tp" v-show='choose!=2' v-for="(item,index) in keyProjects.list">
						<nuxt-link :to="{path:'/dazong/detail',query:{id:item.id}}"> 
							<img :src="item.picture">
							<p>{{ item.title }}</p>
						</nuxt-link>
					</div>
					<div class="tp" v-show='choose==2' v-for="(item,index) in keyProjects1.list">
						<nuxt-link :to="{path:'/dazong/detail',query:{id:item.id}}"> 
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
import Dazong from '../../api/dazong'
import Zhao from '../../api/zhaoqian'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default{
	// watchQuery: true,
	data(){
		return{
			choose:1,
			current:1,  
			current1:1,
			list:[
				{name:'找钱严选',check:'z_yanxuan',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},{name:'严选'}]},
				{name:'融资主体',check:'z_rongzi',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'}]},
				{name:'所在区域',check:'z_quyu',city:true,multiple:false,more:false,select:true,arr:[]},
				{name:'融资金额',check:'z_jine',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'}]},
				{name:'最佳融资期限',check:'z_qixian',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},]},
			],
			list1:[
				{name:'找钱严选',check:'r_yanxuan',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},{name:'严选'}]},
				{name:'资金主体',check:'r_zhuti',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},]},
				{name:'所在区域',check:'r_quyu',city:true,multiple:false,more:false,select:true,arr:[]},
				{name:'城市规划',check:'r_guihua',city:false,multiple:true,more:true,select:false,arr:[{name:'不限'}]},
				{name:'业务方式',check:'r_yewu',city:false,multiple:true,more:true,select:true,arr:[{name:'不限'},]},
				{name:'资金规模',check:'r_guimo',city:false,multiple:false,more:false,select:false,arr:[{name:'不限'},]},
			],
		}
	},
	
	watch:{
		zhaoqian:{
			handler(newValue,oldValue){
						Dazong.tradingProject(JSON.stringify(this.zhaoqian))
						.then((res)=>{
							this.listProject.list = res.data.list
							this.listProject.list1 = res.data.list1
						})
			},
			deep:true
		},
		zhaoqian_you:{
			handler(newValue,oldValue){
						Dazong.ownerProject(JSON.stringify(this.zhaoqian_you))
						.then((res)=>{
							this.OwnerProject.list = res.data.list
							this.OwnerProject.list1 = res.data.list1
						})
			},
			deep:true
		}
		
	},
	computed:{
		...mapGetters([
		'zhaoqian',	
		'zhaoqian_you'
		])
	},
	components:{
		Headersub,
		Footer,
		Select
	},
	methods:{
		...mapMutations({
			change_z_pageindex: 'CHANGE_Z_PAGEINDEX',
			change_z_city: 'CHANGE_Z_CITY',
			change_r_city : 'CHANGE_R_CITY',
			change_r_pageindex: 'CHANGE_R_PAGEINDEX',
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
				this.change_r_city(city)
			}else if(this.choose!=2){
				this.change_z_city(city)
			}
		},
		t(a){
			this.change_z_pageindex(a+'')
		},
		t1(a){
			this.change_r_pageindex(a+'')
		}
	},
	async asyncData (context) {
		// console.log(context.route.query.id)
		let [
			soilPaging,
			modulAdvertising,
			FilterData,
			listProject,
			OwnerProject,
			keyProjects,
			keyProjects1,
			TradingData,
		]
		= await Promise.all([
			Dazong.soilPaging(),
			Dazong.modulAdvertising(),
			Dazong.FilterData({'type':'3'}),
			Dazong.tradingProject({'type':'3',"pageIndex":"1","count":"10"}),
			Dazong.ownerProject({'type':'3',"pageIndex":"1","count":"10"}),
			Dazong.keyProjects({"type":"3","sort":"2"}),
			Dazong.keyProjects({"type":"3","sort":"1"}),
			Zhao.TradingData({'type':'3'}),
		])
		return{
			soilPaging:soilPaging.data,
			modulAdvertising:modulAdvertising.data,
			FilterData:FilterData.data,
			listProject:listProject.data,
			OwnerProject:OwnerProject.data,
			keyProjects:keyProjects.data,
			keyProjects1:keyProjects1.data,
			TradingData:TradingData.data,
		}
	},
	created(){
		this.choose = this.$route.query.id||1
	},
	mounted(){
		//  项目融资
		this.list[1].arr.push(...this.TradingData.lines)
		this.list[2].arr.push(...this.TradingData.area)
		this.list[3].arr.push(...this.TradingData.amounts)
		this.list[4].arr.push(...this.TradingData.fundings)
		//  优选资金 
		this.list1[1].arr.push(...this.FilterData.fundings)
		this.list1[2].arr.push(...this.FilterData.area)
		this.list1[3].arr.push(...this.FilterData.lines)
		this.list1[4].arr.push(...this.FilterData.ways)
		this.list1[5].arr.push(...this.FilterData.amounts)
		// console.log(this.dazong_xiangmu.pageIndex)
	}
}
</script>
<style>
@import url(@/assets/css/iview.css);
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
		height: 18px;
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
.ivu-page{
	text-align: center;
	margin-top: 40px;
}
	div.li div.con div.qiugouLeft{
		float: left;
		width:454px;
		border-right:1px solid #eee;  
		padding-top: 15px;
	}
	div.li div.con div.qiugouLeft p{
		width: 138px;
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
	div.li div.con div.qiugouRight p span.weirenzheng{
		background: #fff;
    	color: #999;
    	border: 1px solid #999;	
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
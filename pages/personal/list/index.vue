<template>
	<div>
		<p>
			<span @click='rightTab=0' :class="rightTab==0?'active':''">审核中</span>
			<span @click='rightTab=1' :class="rightTab==1?'active':''">已通过审核</span>
			<span @click='rightTab=2' :class="rightTab==2?'active':''">未通过审核</span>
			<b v-show='rightTab==1'>发布中</b>
			<b v-show='rightTab==1'>已成交</b>
		</p>
		<div class="t" v-show='rightTab==1'>
			<input type="checkbox" name="piliang">
			<i>全选</i>
			<span>标题</span>
			<span>发布板块</span>
			<span>提交日期</span>
			<span class="pass">状态</span>
			<span>操作</span>
		</div>
		<div class="t" v-show='rightTab==0'>
			<span>标题</span>
			<span>发布板块</span>
			<span>提交日期</span>
		</div>
		<div class="t" v-show='rightTab==2'>
			<span>标题</span>
			<span>发布板块</span>
			<span>提交日期</span>
			<span class="third">操作</span>
		</div>
		<div class="none" v-show="!load">
			暂无数据
		</div>
		<div class="list_c">
			<div class="list" v-for="(item,index) in list" v-show='rightTab==1'>
				<input type="checkbox" name="piliang">
				<p class="eli">{{ item.title }}</p>
				<p style="margin-left: 70px;" v-show="item.type==1">大宗-项目交易</p>
				<p style="margin-left: 70px;" v-show="item.type==2">拿地-求土地</p>
				<p style="margin-left: 70px;" v-show="item.type==3">找钱-优选资金</p>
				<p style="margin-left: 45px;">{{ item.createDate }}</p>
				<p style="margin-top:0;" class="fir" v-show="item.audit==1">发布中</p>
				<p style="margin-top:0;" class="fir" v-show="item.audit==3">已结束</p>
				<p style="margin-top:0;margin-left: 7px;" class="mt">编辑</p>
			</div>
			<div class="list" v-for="(item,index) in list" :key="index" v-show='rightTab==0'>
				<p class="eli" style="text-align:center;margin-left:0;">{{ item.title }}</p>
				<p style="width:78px;text-align:center;margin-top:0;margin-left:80px" v-show="item.type==1">大宗-金主求购</p>
				<p style="width:78px;text-align:center;margin-top:0;margin-left:80px" v-show="item.type==2">拿地-土发发地</p>
				<p style="width:78px;text-align:center;margin-top:0;margin-left:80px" v-show="item.type==3">找钱-优选资金</p>
				<p style="margin-left: 43px;">{{ item.createDate }}</p>
			</div>
			<div class="list" v-for="item in list" v-show='rightTab==2'>
				<p style="text-align:center;" class="eli">{{ item.title }}</p>
				<p style="width:78px;text-align:center;margin-top:0;margin-left:70px;" v-show="item.type==1">大宗-金主求购</p>
				<p style="width:78px;text-align:center;margin-top:0;margin-left:70px;" v-show="item.type==2">拿地-土发发地</p>
				<p style="width:78px;text-align:center;margin-top:0;margin-left:70px;" v-show="item.type==3">找钱-优选资金</p>
				<p style="margin-top:0;margin-left: 44px;">{{ item.createDate }}</p>
				<p style="margin-top:0;margin-left: 7px;float: right;margin-right: 27px;" class="mt">编辑</p>
			</div>
		</div>
		<div class="M-PagingBox"></div>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import P from '../../../api/personal'
export default {
	data(){
		return {
			load:0,
			rightTab:0,
			list:null,
		}
	},
	computed:{
	  ...mapState([
		  'page',
		  'auth'
	  ])
	},
	watch:{
		rightTab:{
			async handler(newValue,oldValue){
				this.list = ''
				let res = await P.ProjectManagement({
					'audit': this.rightTab+'',
					'count': "9",
					'pageIndex': "1",
					'uid':this.auth.uid+""
				})
				this.list = res.data.list
				this.load = res.data.list1
			},
			immediate: true,
		},
	},
	methods:{
	},
	beforeRouteUpdate(to, from, next) {

      next()
    },
	mounted(){
	},
	created(){
		
	}
}	
</script>
<style>
div.t input[type="checkbox"]{
	position: absolute;
	top: 14px;
	left: 10px;
}
div.list input[type="checkbox"]{
	position: absolute;
	top: 19px;
	left: 11px;
}
div.t i{
	display: inline-block;
	font-size: 14px;
	color: #15213d;
	line-height: 46px;
	position: absolute;
	top: 0px;
	left: 30px;
}
div.list{
	position: relative;
}
.none{
	position: absolute;
    text-align: center;
    top: 200px;
    left: 0;
    width: 100%;
}
</style>
<template>
	<div>
		<div style="width:100%;text-align:center;padding:100px 0 200px 0;">
			<img src="@/assets/img/preview.png" alt="">
			<p style="font-size:26px; margin-top:30px;">正在开发</p>
		</div>
				
		<!-- <p class="deletAll" @click="deletAll"><span>删除</span></p>
		<div class="t">
			<input type="checkbox" name="piliang" @change="selectAll($event)">
			<i>全选</i>
			<span>标题</span>
			<span>发布板块</span>
			<span>提交日期</span>
			<span class="pass">状态</span>
			<span>操作</span>
		</div>
		<div class="list_c">
			<div class="list" v-for='item in list' @click.self="push(item.projectModule,item.projectId)">
				<input type="checkbox" name="piliang" @click="select($event,item.projectId)">
				<p class="eli">{{ item.projectName }}</p>
				<p style="margin-left: 70px;margin-top:0;">大宗-项目交易</p>
				<p style="margin-top:0;">2018-07-07</p>
				<p style="margin-top:0;" class="fir">发布中</p>
				<p style="margin-top:0;margin-left: 10px;" class="mt" @click.self="remove(item.projectId)">删除</p>
			</div>
		</div> -->
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import P from '../../../api/personal'
export default {
	data(){
		return {
			list:null,
			pid_arr:[],
			pid_arr_select:null,
			page_count:null,
		}
	},
	methods:{
		async attentionTrading(){
			let res = await P.attentionTrading({
				count: "9",
				pageIndex: "1",
				uid: this.auth.uid+""
			})
			this.list = Array.from(new Set(res.data.list))
			this.page_count = res.data.list1
			res.data.list.forEach((e,i)=>{
				// console.log(e.projectId)
				this.pid_arr.push(e.projectId)
			})
		},
		selectAll(e){
			let status = e.target.checked
			let el = document.querySelectorAll('.list_c input')
			el.forEach((e,i) => {
				e.checked = status
			});
		},
		select(e,id){
			let status = e.target.checked
			let arr = this.pid_arr.slice(0)
			if(!status){
				let index = arr.indexOf(id)
				arr.splice(index,1)
				this.pid_arr_select = arr
			}
			// console.log(this.pid_arr_select)
		},
		deletAll(){
			alert('delet')
		},
		push(proModule,id){
			console.log(proModule,id)
		},
		remove(id){ 
			alert(id)
		}
	},
	computed:{
	  ...mapState([
		  'auth'
	  ])
	}, 
	beforeRouteUpdate(to, from, next) {
      next()
    },
	mounted(){
	},
	created(){
		this.attentionTrading()	
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
div.t{
	position: relative!important;
	top:0!important;
	left: 0!important;
}
div.list_c{
	position: relative!important;
	top: 0!important;
}
.pass{
    margin: 0 113px 0 104px!important;
}
.mr{
	margin-right:58px;
}
.deletAll{
	text-align: right;
}
.deletAll span{
	width: 52px!important;
	font-size: 12px;
    color: #cda550;
    border: 1px solid #cda550;
    border-radius: 4px;
    cursor: pointer;
	line-height: 30px!important;
	margin-right: 30px!important;
	margin-bottom: 30px!important;
}
</style>
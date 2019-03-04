<template>
	<div class="mask">
		<div class="typeIn">
			<img src="@/assets/img/quit.png" class="quit" @click='show_changepw'>
			<p class="h">修改密码</p>
			<div class="warn">
				<input type="password" v-model="password" name="phone" placeholder="请输密码">
				<!-- <p>格式错误</p> -->
			</div>
			<div class="warn">
				<input type="password" v-model="check_password" name="confirm" placeholder="请再次确认密码">
				<!-- <p>密码不一致</p> -->
			</div>
			<button @click="sure">确定</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations} from "vuex"
import P from '../../api/personal'
export default {
	data(){
		return {
			password:'',
			check_password:''
		}
	},
	computed:{
		...mapState([
			'auth'
		])
	},
	methods:{
		...mapMutations({
			show_modal:'SHOW_MODAL',
		  	show_changepw :'SHOW_CHANGEPW'
		}),
		async sure(){
			if(this.password.length>=6&&this.password===this.check_password){
				let res = await P.ChangePassword({
					"uid":this.auth.uid+'',
					"password":this.password+''
				})
				if(res.state=='success'){
					this.show_modal('密码修改成功')
				}else(
					this.show_modal('数据错误')
				)
			}else{
				this.show_modal('请确认数据填写正确性')
			}
		}
	}
}
</script>
<style type="text/css" scoped>
	div.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 999;
	}
	p.h{
		color:#2b2c43;
		margin-bottom: 24px;
	}
	div.typeIn{
		width: 400px;
		height: 260px!important;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -219px;
		margin-left: -230px;
		padding: 30px 0 0 60px;
	}
	img.quit{
		position:absolute;
		top: 20px;
		right:20px;
		cursor: pointer;
	}
	div.tab{
		overflow: hidden;
		margin-bottom: 30px;
	}
	div.tab p{
		width: 170px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		float:left;
		border: 1px solid #dddddd;
		background-color: #f4f4f4;
		color: #999999;
	}
	div.tab p:first-of-type{
		border-right: none;
	}
	div.tab p.active{
		color: #2b2c43;
		background-color: #ffffff;
		border:none;
		border-top: 2px solid #cda550;
	}
	input{
		width: 338px;
		height: 40px;
		border:1px solid #ddd;
		outline: none;
		margin-bottom: 24px;
		text-indent:10px;
		background-color:transparent;
	}
	input[type='checkbox']{
		width: 14px;
		height: 14px;
		vertical-align:top;
		cursor: pointer;
	}
	.r span{
		font-size: 12px;
	}
	.r b{
		float: right;
		color: #999999;
		font-size: 14px;
		margin-right: 60px;
   		margin-top: 2px;
   		cursor: pointer;
	}
	div.inp{
		width: 338px;
		overflow: hidden;
	}
	div.inp input{
		float:left;
		width: 238px;
		border-right:none;
	}
	div.inp span{
		float:left;
		background-color:#cda550;
		width: 98px;
		text-align:center;	
		line-height: 44px;
		color: #fff;
		font-size: 12px;
		cursor: pointer;
	}
	button{
		width: 338px;
		height: 40px;
		background-color:#cda550;
		text-align:center;
		line-height: 40px;
		outline: 0;
		border:none;
		color: #fff;
		cursor: pointer; 
	}
	div.warn{
		position:relative;
		margin-bottom: 10px;
	}
	div.warn p{
		position: absolute!important;
	    bottom: 5px;
	    left: 12px;
	    color: red!important;
	    font-size: 12px;
        font-style: italic; 
	}
</style>
<template>
	<div class="mask">
		<div class="typeIn" v-show='forget==false'>
			<img src="@/assets/img/quit.png" class="quit" @click='show_auth'>
			<div class="tab">
				<p class="pointer" :class="{active:show==1}" @click='show = 1'>短信登陆</p>
				<p class="pointer" :class="{active:show==0}" @click='show =0'>密码登陆</p>
			</div>
			<input type="text" v-model="account" name="phone" placeholder="请输入手机号码">
			<div class="inp"  v-show='this.show==1' >
				<i ref="mask"></i>
				<input v-model="code" type="text" name="validate">
				<span ref="valid" @click.self="sendcode">发送验证码</span>
			</div>
			<input type="password" v-model="password" name="password" placeholder="请输入密码" v-show='show==0'>
			<div class="r">
				<input type="checkbox" name="check" v-show='this.show==0'>
				<span v-show='this.show==0'>记住密码</span>
				<b><i @click='forget=!forget'>忘记密码</i> | <i><nuxt-link to='auth'>注册</nuxt-link></i></b>
			</div>
			<button @click="signin">登陆</button>
		</div>
		<div class="typeIn forget" v-show='forget==true'>
			<img src="@/assets/img/quit.png" class="quit" @click='backlog'>
			<p class="h">忘记密码</p>
			<div class="warn">
				<input type="text" v-model="account" name="phone" placeholder="请输入手机号码">
				<p>格式错误</p>
			</div>
			<div class="inp">
				<input type="text" name="validate" placeholder="请输入验证码">
				<span>发送验证码</span>
			</div>
			<input type="text" v-model="code" name="password" placeholder="请输入密码">
			<div class="warn">
				<input type="text" name="confirm" placeholder="请再次确认密码">
				<p>密码不一致</p>
			</div>
			<button>确定</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import Auth from '../../api/auth'
import {mapState,mapActions,mapMutations} from "vuex"
export default{
	inject:[
		'reload'
	],
	data () {
		return {
			forget:false,
			show:1,
			account:'',
			password:'',
			code:'',
			second:60,
		}
	},
	props:{

	},
	methods:{
		...mapMutations({
		  show_auth: 'SHOW_AUTH',
		  show_modal:'SHOW_MODAL',
		  set_name:'SET_NAME',
		  set_uid:'SET_UID',
		}),
		backlog(){
			this.show_auth();
			this.forget = false;
		},
		async sendcode(){
			// alert(1)
			// let res = await Auth.djwSms({
			// 	"account":this.account+'',
			// 	"type":"3"
			// })
			// console.log(res)
			let that = this
			// console.log(that.$refs.mask.style.display)
			if(this.account){
				that.$refs.mask.style.display = 'block'
				let timer = setInterval(function(){
				that.second--;
				that.$refs.valid.innerText ='('+that.second+')s后重新发送'
				if(that.second<1){
					clearInterval(timer);
					that.$refs.valid.innerHTML='发送验证码';
					that.$refs.mask.style.display = 'none'
					}
				},1000)
				let djwSms = await Auth.djwSms({'type':'3','account':this.account+''})
				if(djwSms.data.flag){
					this.show_modal("<p style='font-size: 18px;'>验证码已经发送到您的手机上，请注意查收</p>")
				}

			}
		},
		async signin(){
			if(this.show==1){
				let res = await Auth.quickLogin({
					"account":this.account+"",
					"code":this.code+""
				})
				if(res.state=='error'){
					this.show_modal(res.msg)
				}else if(res.state=='success'){
					 this.set_name(res.data.name)
					 this.set_uid(res.data.uid)
				}
			}else{
				let res = await Auth.djwLogin({
					"account":this.account+"",
					"passWord":this.password+""
				})
				if(res.state=='error'){
					this.show_modal(res.msg)
				}else if(res.state=='success'){
					 this.set_name(res.data.name)
					 this.set_uid(res.data.uid)
					 this.show_auth()
					 this.reload()
				}
			}
		}
	}
}
</script>
<style type="text/css" scoped>
a{
	color:#999;
}
	div.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 999;
	}
	div.typeIn{
		width: 400px;
		height: 374px;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -219px;
		margin-left: -230px;
		padding: 64px 0 0 60px;
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
	div.r{
		height: 41px;
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
	.forget{
		padding: 24px 0 0 60px!important;
	}
	.forget p.h{
		color:#2b2c43;
		margin-bottom: 24px;
	}
	.forget div.warn{
		position:relative;
	}
	.forget div.warn p{
		position: absolute;
	    bottom: 5px;
	    left: 12px;
	    color: red;
	    font-size: 12px;
        font-style: italic; 
	}
	.inp{
		position: relative;
	}
	.inp i{  
		display: none;
		position: absolute;
		width: 98px;
		height: 44px;
		background: rgba(187, 187, 187, 0.5);
		right: 0;
		top:0;
		z-index: 999;
	}
</style>


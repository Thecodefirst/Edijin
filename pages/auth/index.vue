<template>
	<div class="loginPage">
		<Headersub></Headersub>
		<div class="container">
			<div class="manul">
				<div class="pic"><img src="@/assets/img/login.jpg"></div>
				<div class="form">
					<p class="h">注册</p>
					<input type="text" v-model.number="account" name="phone" placeholder="请输入手机号码">
					<input type="password" v-model="password" name="password" placeholder="请输入密码">
					<div class="inp">
						<i ref="mask"></i>
						<input type="text" v-model="code" name="validate">
						<span ref="valid" @click.self="send_validate()">发送验证码</span>
					</div>
					<div class="dropdown">
						<input class="pointer" type="text" name="shenfen" readonly="true" placeholder="请选择您的身份" @click='choose' v-model='shenfen'>
						<img src="@/assets/img/arrowdown.png">
						<div class="sub">
							<p @click='set_shenfen(1)'>交易师</p>
							<p @click='set_shenfen(0)'>资方</p>
						</div>
					</div>
					<p class="manulist">
						<input type="checkbox" v-model="agree" name="check">
						<span>我已阅读并同意<b>《中国地金网服务协议》</b></span>
					</p>
					<button @click="send_signUp">立即注册</button>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import Auth from '../../api/auth'
import axios from 'axios'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
	data(){
		return {
			code:'',
			shenfen:'',
			account:'',
			password:'',
			agree:'',
			second:60

		}
	},
	components:{
		Headersub,
		Footer,
	},
	computed:{
		identity:function(){
			return this.shenfen=='交易师'?'1':(this.shenfen=='资方'?'0':'')
		}
	},
	methods:{
		...mapMutations({
			  show_modal: 'SHOW_MODAL',
			  set_uid: 'SET_UID',
			  set_name:'SET_NAME',
			  set_identity: 'SET_IDENTITY' ,
		}),
		async send_validate(){
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
				let djwSms = await Auth.djwSms({'type':'1','account':this.account+''})
				if(djwSms.data.flag){
					this.show_modal("<p style='font-size: 18px;'>验证码已经发送到您的手机上，请注意查收</p>")
				}

			}
		},
		async send_signUp(){
			// da348b71868c49969c5ae003a55d96e1
			if(this.account&&this.code&&this.password&&this.identity&&this.agree){
				let res =await Auth.djwRegister({
					account : this.account+'',
					code:this.code+'',
					password:this.password+'',
					identity:this.identity+''
				})
				if(res.state=='error'){
					this.show_modal(res.msg)
				}else if(res.state=='success'){
					this.show_modal('注册成功') 
					this.set_uid(res.data.uid)
					// this.$router.push('/')
				}
			}
			// this.set_uid('da348b71868c49969c5ae003a55d96e1')
			
			
		},
		choose(){
			$('.sub').show()
		},
		set_shenfen(a){
			$('.sub').hide()
			if(a==1){
				this.shenfen = '交易师'
			}else{
				this.shenfen = '资方'
			}
		}
	}
}
</script>
<style type="text/css" scoped>
	div.components_footer {
	    position: absolute;
	    bottom: 0
	}
	div.sub{
		display: none;
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
	.manul{
		background:#fff;
	}
</style>
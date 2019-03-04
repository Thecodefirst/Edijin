<template>
	<div>
		<whatfor v-show='active.show_whatfor'></whatfor>
		<changep v-show='active.show_changepw'></changep>
		<div class="center">
			<span>个人信息</span>
		</div>
		<div class="inp">
			<label>用户名</label>
			<input type="text" id='user_name' name="user" readonly='false' :value="this.auth.name" class="user_center">
			<span @click="change_name">修改</span>
			<button @click="save_name">保存</button>
			<!-- <i>该用户名已被注册</i> -->
		</div>
		<div class="inp">
			<label>手机号</label>
			<input type="text" readonly :value="this.auth.phone">
		</div>
		<div class="changepw" @click='show_changepw'>点击修改密码</div>
		<div class="inp">
			<label class="mr_52">身份</label>
			<input type="text" name="auth" :value="this.identity.b" readonly>
			<span @click="conect">申请更改</span>
		</div>
		<div class="inp mb_70">
			<label class="mr_24">认证状态</label>
			<input type="text" name="status" :value="this.identity.a" readonly>
			<nuxt-link to='apply'><span>申请认证</span></nuxt-link><b @click='show_whatfor'>(为什么要认证?)</b>
		</div>
	</div>
</template>
<script type="text/javascript">
import whatfor from '~/components/toast/whatfor.vue'
import changep from '~/components/toast/changepassword.vue'	
import {mapState,mapActions,mapMutations} from "vuex"
import P from '../../../api/personal'
export default {
	data(){
		return {
			name:'',
		}
	},
	components: {
  		whatfor,
  		changep
  		
	},
	computed:{
	  ...mapState({
		active:'active',
		auth:'auth'
	  }),
	//   身份(0未认证资方1未认证交易师2认证资方3认证交易师)，传  0  或 1+
	  identity(){
		  if(this.auth.identity==0){
			  return {a:'未认证',b:'金主'}
		  }else if(this.auth.identity==1){
			  return {a:'未认证',b:'交易师'}
		  }else if(this.auth.identity==2){
			  return {a:'已认证',b:'金主'}
		  }else if(this.auth.identity==3){
				return {a:'已经认证',b:'交易师'}
		  }
	  }
	},
	methods:{
		...mapMutations({
		  show_whatfor: 'SHOW_WHATFOR',
		  show_modal: 'SHOW_MODAL',
		  show_changepw :'SHOW_CHANGEPW',
		  set_name:'SET_NAME',
		}),
		conect(){
			this.show_modal("<img style='width:120px;height:120px;' src='/img/conect.png'><br>联系客服更改身份")
		},
		change_name(){
			var el = document.querySelector("#user_name");
			el.readOnly=false;
			el.focus()
			// console.log(el.readOnly)
		},
	 	async save_name(){
			var el = document.querySelector("#user_name");
			el.readOnly=true;
			this.set_name(el.value)
			let res = await P.SaveInformation({
				"uid":this.auth.uid+"",
				"name":this.auth.name+""
			})
			if(res.msg=='success'){
				this.show_modal(res.data.successful)
			}
			// console.log(res)
		},
	},
	// beforeRouteUpdate(to, from, next) {
    //   next()
    // },
	mounted(){
	},
}	
</script>
<style>
	.user_center{
		border: 1px solid #eeeeee!important;
	}
</style>
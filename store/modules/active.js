import * as types from '../mutation-types'

const state = {
	show_auth:false,
	show_whatfor:false,
	show_modal:false,
	show_forget:false,
	show_changepw:false,
	show_citySelect:false,
	show_homeCity:false,
	modal_text:''
}

const mutations = {
	// 登陆弹窗 切换显示隐藏
	[types.SHOW_AUTH] (state,data) {
		state.show_auth = !state.show_auth
		if(state.show_auth){
			document.getElementsByTagName("body")[0].className="fix_window";
		}else{
			document.getElementsByTagName("body")[0].className="";
		}
		
	},
	// 忘记密码 
	[types.SHOW_FORGET] (state,data) {
		state.show_forget = !state.show_forget
		if(state.show_forget){
			document.getElementsByTagName("body")[0].className="fix_window";
		}else{
			document.getElementsByTagName("body")[0].className="";
		}
		
	},

// 个人中心修改密码 
	[types.SHOW_CHANGEPW] (state,data) {
		state.show_changepw = !state.show_changepw
		if(state.show_changepw){
			document.getElementsByTagName("body")[0].className="fix_window";
		}else{
			document.getElementsByTagName("body")[0].className="";
		}
		
	},

	// 为什么要认证
	[types.SHOW_WHATFOR] (state,data) {
		state.show_whatfor = !state.show_whatfor
		if(state.show_whatfor){
			document.getElementsByTagName("body")[0].className="fix_window";
		}else{
			document.getElementsByTagName("body")[0].className="";
		}
		
	},
	// 基础弹窗组件控制
	[types.SHOW_MODAL] (state,data) {
		state.modal_text = data
		if(state.show_modal){
			state.show_modal = !state.show_modal
			document.getElementsByTagName("body")[0].className="";
		}else{
			state.show_modal = !state.show_modal
			document.getElementsByTagName("body")[0].className="fix_window";
		}
		
	},
	//关闭弹窗自动触发 
	[types.CLOSE_AUTH] (state,data) {
		state.show_auth = false
	},
	// 分站城市选择
	[types.SHOW_CITYSELECT] (state,data) {
		if(state.show_citySelect){
			state.show_citySelect = !state.show_citySelect
			document.getElementsByTagName("body")[0].className="";
		}else{
			state.show_citySelect = !state.show_citySelect
			document.getElementsByTagName("body")[0].className="fix_window";
		}
	},
	// 首页大宗找钱拿地板块城市切换
	[types.SHOW_HOMECITY] (state,data) {
		if(state.show_homeCity){
			state.show_homeCity = !state.show_homeCity
			document.getElementsByTagName("body")[0].className="";
		}else{
			state.show_homeCity = !state.show_homeCity
			document.getElementsByTagName("body")[0].className="fix_window";
		}
	}
}

export default {
  state,
  mutations
}

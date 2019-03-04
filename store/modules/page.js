import * as types from '../mutation-types'

const state = {
	city_id:'59105c9ff8a44c39a6486a20eeffeb5c',
}

const mutations = {
	// 选中状态
	[types.SET_ACTIVE_HEADBAR] (state,data) {
		state.active = data
	},
	// 页脚信息 二级头部导航
	[types.SET_FOOTERBAR] (state,data) {
		state.footerbar_info = data.one
		state.footerbar_info1 = data.two
		state.sub_header = (data.list3).sort((a,b)=>{return (a.remarks - b.remarks)})
	},
	// 页脚分类
	[types.SET_FOOTERBAR_NAV] (state,data) {
		state.footerbar_nav = data.list.filter((e,i)=>{
			return (e.name != '')
		})
	},
	// 详情页面bavbar 选中状态
	[types.SET_DETAIL_NAVBAR] (state,data) {
		state.detail_navbar = data
	},
	// 个人中心
	[types.SET_SIDE] (state,data) {
		state.side = data;
	},
	// -------------------???????--------------------
	[types.SET_CHOOSE] (state,data) {
		state.choose = data
	},
}
export default {
  state,
  mutations
}

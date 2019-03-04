import * as types from '../mutation-types'

const state = {
	oid:'59105c9ff8a44c39a6486a20eeffeb5c',
	token:'',
	terminal:'1',
	uid:'',
	name:'',
	identity:'',
	phone:'',
	message:''
}
const mutations = {
	[types.SET_NAME] (state,data) {
		state.name = data 
	},
	[types.SET_CITY] (state,data) {
		state.city = data 
	},
	[types.SET_UID] (state,data) {
		state.uid = data 
	},
	[types.SET_IDENTITY] (state,data) {
		state.identity = data
	},
	[types.SET_PHONE] (state,data) {
		state.phone = data
	},
	[types.SET_MESSAGE] (state,data) {
		state.message = data
	}
}
export default {
  state,
  mutations,
}

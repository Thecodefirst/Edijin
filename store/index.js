import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import actions from './actions'
import * as getters from './getter'
import auth from './modules/auth'
import page from './modules/page'
import active from './modules/active'
import post from './modules/post-status'
// import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

const store = () => new Vuex.Store({
	state: {
		
	},
	modules: {
		auth,
		page,
		active,
		post
  	},
 	actions,
 	getters,
 	// plugins: [new VuexPersistence().plugin]
}) 



export default store
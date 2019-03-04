// import * as types from './mutation-types'
import Home from '../api/home'

const action = {
	async get_footerbar ({commit,state},data) {
		let [
			textIntroduce,
			platformPaging
		]

		= await Promise.all([
				Home.textIntroduce(),
				Home.platformPaging() 
			])
		commit('SET_FOOTERBAR',textIntroduce.data)
		commit('SET_FOOTERBAR_NAV',platformPaging.data)
	}, 
}
export default action
const auth = state => state.auth;
const active = state => state.active;
const page = state => state.page;
const dazong_xiangmu = state => state.post.dazong.push;
const dazong_jinzhu = state => state.post.dazong.pushb;
const nadi_gong = state => state.post.nadi.push
const nadi_qiu = state => state.post.nadi.pushb
const zhaoqian = state => state.post.zhaoqian.push
const zhaoqian_you = state => state.post.zhaoqian.pushb
const modal_text = state => state.active.modal_text
export {
	auth,
	active,
	page,
	dazong_xiangmu,
	dazong_jinzhu,
	nadi_gong,
	nadi_qiu,
	zhaoqian,
	zhaoqian_you,
	modal_text
}

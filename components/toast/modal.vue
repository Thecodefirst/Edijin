<template>
	<div class="mask">
		<div class="typeIn">
			<img src="@/assets/img/quit.png" @click='show_modal' class="quit">
			<div v-html='modal_text' class="text"></div>
			<b @click='show_modal'>我知道了</b>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default{
	data () {
		return {
			text:"<img src='/img/ma.png' style='margin-bottom:20px;'><p>请联系客服更改身份</p>"
		}
	},
	computed:{
		...mapGetters([
			'modal_text',	
		])
	},
	methods:{
		...mapMutations({
		   show_modal: 'SHOW_MODAL'
		}),
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
		padding: 30px 30px;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 30%;
		margin-left: -230px;
		text-align:center;
		border-radius: 10px;
		font-size: 20px;
	}
	img.quit{
		position:absolute;
		top: 20px;
		right:20px;
		cursor: pointer;
	}
	div.text{
		background-color: #fff;
	}
	b{
		font-size: 12px;
		display: inline-block;
		width:94px;
		height: 30px;
		border: 1px solid #f1f1f1;
		border-radius: 6px;
		line-height: 30px; 
		color: #666;
		margin-top: 30px;
		cursor: pointer;
		font-weight: normal;
	}
</style>

<template>
	<div class="mask">
		<div class="typeIn">
			<img src="@/assets/img/why.png" class="why">
			<textarea v-html="this.auth.message"></textarea>
			<b @click='show_whatfor'>我知道了</b>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations} from "vuex"
export default{
	data () {
		return {
		}
	},
	props:{

	},
	computed:{
	  ...mapState({
			auth:'auth'
		})
	},
	methods:{
		...mapMutations({
		  show_whatfor: 'SHOW_WHATFOR',
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
		overflow: hidden;
		width: 400px;
		height: 378px;
		background-color: #fff;
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -219px;
		margin-left: -230px;
		text-align:center;
	}
	img.why{
		margin-left: -1px;
	    margin-top: -1px;

	}
	textarea{
		width: 100%;
		height: 182px;
		resize: none;
		border: none;
		outline: 0;
		font-size: 14px;
		overflow-y: scroll;
		margin-left: 12px;
		color: #666;
		line-height: 20px;
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
		margin-top: 10px;
		cursor: pointer;
		font-weight: normal;
	}
</style>

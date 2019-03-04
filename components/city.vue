<template>
	<div class="mask">
		<div class="address">
			<div class="quit" @click="show_citySelect"></div>
			<div class="address-t">
				<p>省级站</p>
				<div>热门城市：<span>杭州</span><span>大连</span><span>金华</span></div>
			</div>
			<div class="address-t2">
				<p>总站</p>
				<div><span @click="setSite(item.name,item.id)" class="pointer" :class="item.id?'exist':''" v-for="(item,index) in mainsite">{{ item.name }}</span></div>
			</div>
			<div class="address-t1">城市站</div>
			<div class="address-list">
				<div class="address-hot" :class="toggle==1?'active':''" @click="toggle=1">ABCDEFG</div>
				<div class="address-hot" :class="toggle==2?'active':''" @click="toggle=2">HJKLMNP</div>
				<div class="address-hot" :class="toggle==3?'active':''" @click="toggle=3">QSTWXYZ</div>
			</div>
			<div v-show="toggle==1" class="address-t4" v-for="(item,index) in letter_A">
				<div class="address-t4l">
					{{item.letter}} :
				</div>
				<div class="address-t4r">
					<span @click="setSite(e.name,e.id)" :class="e.id?'exist':''" v-for="(e,i) in item.city" :key="i">{{ e.name }}</span>
				</div>
			</div>
			<div v-show="toggle==2" class="address-t4" v-for="(item,index) in letter_B">
				<div class="address-t4l">
					{{item.letter}} :
				</div>
				<div class="address-t4r">
					<span @click="setSite(e.name,e.id)" :class="e.id?'exist':''" v-for="(e,i) in item.city" :key="i">{{ e.name }}</span>
				</div>
			</div>
			<div v-show="toggle==3" class="address-t4" v-for="(item,index) in letter_C">
				<div class="address-t4l">
					{{item.letter}} :
				</div>
				<div class="address-t4r">
					<span @click="setSite(e.name,e.id)" :class="e.id?'exist':''" v-for="(e,i) in item.city" :key="i">{{ e.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import { mainsite,letter_A,letter_B,letter_C } from "@/assets/js/city"
import {mapState,mapActions,mapMutations} from "vuex"
export default {
	data(){
		return {
			toggle:1,
			mainsite:mainsite,
			letter_A:letter_A,
			letter_B:letter_B,
			letter_C:letter_C
		}
	},
	computed:{
		...mapState([
			'auth'
		])
	},
	methods:{
		...mapMutations({
			 show_citySelect:'SHOW_CITYSELECT'
		}),
		setSite(name,id){
			if(!!id){
				this.$cookies.set('address',name, {path: '/'})
				this.$cookies.set('siteID',id, {path: '/'})
			}
			console.log(this.$cookies.get('siteID'))
		}
	}
}
</script>
<style type="text/css" scoped>
	div.mask{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 999;
	}
	div.quit{
		width: 30px;
		height: 30px;
		background: rgba(0,0,0,.7);
		border-radius: 15px;
		position: absolute;
		right: -15px;
		top: -15px;
		cursor: pointer;
	}
	div.quit::before{
		position: absolute;
		content: "";
		width: 20px;
		height: 2px;
		background: #fff;
		top: 14px;
		left: 5px;
		transform: rotate(45deg);
	}
	div.quit::after{
		position: absolute;
		content: "";
		width: 20px;
		height: 2px;
		background: #fff;
		top: 14px;
		left: 5px;
		transform: rotate(-45deg);
	}
	div.address{
		width: 670px;
		height: 670px;
		background: #fff;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -335px;
		margin-top: -335px;
		padding: 30px;
		box-sizing: border-box;
	}
	div.address-t{
		display: flex;
		justify-content:space-between;
		width: 100%;
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #eee;
	}
	div.address-t p{
		font-size:24px;
	}
	div.address-t div{
		font-size: 18px;
		color: #999;
	}
	div.address-t div span {
		color: #cda550;
		width: 50px;
    	display: inline-block;
	}
	div.address-t2 p{
		margin-top: 6px;
		font-size: 20px;
		width: 55px;
		height: 85px;
		float: left;
		color: #333;
		cursor: pointer;
	}
	div.address-t2 div{
		color:#999;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	div.address-t2 div span.exist{
		color:#333;
	}
	div.address-t2 div span{
		width: 50px;
		margin: 10px 0;
		text-align: center;
		white-space: nowrap;
	}
	div.address-t1{
		width: 50%;
		font-size: 24px;
		float: left;
		margin: 30px 0 30px 0;
	}
	div.address-list{
		width: 100%;
		height: 25px;
		line-height: 25px;
		margin: 25px 0;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	div.address-hot{
		height: 25px;
		line-height: 25px;
		color: #cda550;
		cursor: pointer;
		font-size: 18px;
	}
	div.address-hot.active{
		border-bottom: 2px solid #cda550;
	}
	div.address-t4{
		overflow: hidden;
   		margin: 20px 0;
	}
	div.address-t4l{
		width: 55px;
  	  	float: left;
		font-size: 18px;
		cursor: pointer;
	}
	div.address-t4r{
		width: 555px;
    	float: left;
		cursor: pointer;
	}
	div.address-t4r span{
		color: #999;
		float: left;
		font-size: 15px;
    	line-height: 20px;
		margin-right: 10px;
	}
	div.address-t4r span.exist{
		color:#333;
	}
</style>
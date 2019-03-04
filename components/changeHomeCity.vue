<template>
	<div class="mask">
		<div class="address">
			<div class="quit" @click="show_homeCity"></div>
			<div class="c">选择城市 :</div>
			<div class="c1">全国</div>
			<div class="c2">
				<div @click="findCity(item.id,$event)" v-for="item in area">{{ item.name }} 
					<img src="@/assets/img/arrowdown.png">
					<div class="drop">
						<span @click="confirm(item.id,item.name)" v-for="item in city">{{ item.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapState,mapActions,mapMutations} from "vuex"
import Dazong from '../api/dazong'
export default {
	data(){
		return {
			area:null,
			city:null
		}
	},
	computed:{
		...mapState([
			'auth'
		])
	},
	methods:{
		...mapMutations({
			show_homeCity:'SHOW_HOMECITY'
		}),
		findCity(id,e){
			let el = e.target
			
			if($(el).find('.drop').css('display')=='block'){
				$('.drop').hide()
				$(el).find('.drop').hide()
			}else{
				Dazong.FindCity({'pid':id})
				.then(res => {
					this.city = ''
					this.city =  res.data.area
				})
				$('.drop').hide()
				$(el).find('.drop').show()
			}
		},
		confirm(id,name){
			this.$emit('surecity',{"id":id,"name":name})
		}
	},
	mounted(){
		Dazong.FilterData({'type':'2'})
		.then(res => {
			this.area = res.data.area
		})
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
	div.c{
		color: #666;
	}
	div.c1{
		color:#999;
		margin: 20px 0 20px 0;
		cursor: pointer;
	}
	div.c2{
		display: flex;
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		cursor: pointer;
	}
	div.c2 div{
		display: inline-block;
		width: 170px;
		white-space: nowrap;
		height: 40px;
		font-size: 14px;
		color: #999;
		cursor: pointer;
		position: relative;
	}
	div.c2 div img{
		vertical-align: middle;
	}
	div.c2 div.drop{
		display: none;
		position: absolute;
		z-index: 9;
		width: 100px;
		height: 200px;
		overflow: auto;
		background-color: #f6f6f6;
		left: 0;
		top: 20px;
		font-size: 14px;
		color: #999;
		background-color: #f6f6f6;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
	.drop span{
		display: block;
		line-height: 20px;
	}
</style>

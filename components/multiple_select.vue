<template>
	<div>
		<div class="city_select">
				<!-- :class="item.more?'showmore':'unit'" -->
			<div v-for='item in list' :class="item.city?'unit unit_city':(item.more?'showmore':'unit')" >
				<img src="@/assets/img/duoxuan.png" alt="" class="duoxuan" v-show='item.multiple'>
				<span>{{ item.name }} ：</span>
				<div v-show='!item.city'>
					<!-- <b class="whatever">不1限</b> -->
					<b v-for='(i,index) in item.arr'  @click="p(i.name,item.check,$event)">{{ i.name}}</b>
				</div>
				<em v-show='item.select' class="more pointer" @click='showHeight($event)'>更多<img src="@/assets/img/arrowdown.png"></em>
				<div class="c" v-show='item.city' :class="item.select?'':'xiu'">
					<div class="whatever choose" @click="clear(item.check)">不限
					</div>
					<div :class="item.select?'xiu':''" v-for="i in item.arr" @click="findcity(i.id,i.name,item.check)">{{i.name}}<img v-show = 'item.select' src="@/assets/img/arrowdown.png">
						<p><em v-for="(item,index) in city.area " @click.stop="confirm_city(item.name,)">{{ item.name }}</em></p>
					</div>	
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import Dazong from '../api/dazong'
export default {
	data(){
		return {
			city:{
				area:null
			}
		}
	},
	props:{
		list:null,
	},
	computed:{
        ...mapState({
				auth:'auth',
				page:'page',
				post:'post'
       })
	},
	methods:{
		...mapMutations({
			change_yanxuan: 'CHANGE_YANXUAN',
			change_qiugou: 'CHANGE_QIUGOU',
			change_shuxing: 'CHANGE_SHUXING',
			change_amount: 'CHANGE_AMOUNT',
			change_province: 'CHANGE_PROVINCE',
			change_city : 'CHANGE_CITY',
			change_pageindex: 'CHANGE_PAGEINDEX',
			// 
			// 大宗 金主求购
			// 
			change_p_yanxuan: 'CHANGE_P_YANXUAN',
			change_p_qiugou: 'CHANGE_P_QIUGOU',
			change_p_pageindex: 'CHANGE_P_PAGEINDEX',
			change_p_shuxing: 'CHANGE_P_SHUXING',
			change_p_line: 'CHANGE_P_LINE',
			change_p_amount: 'CHANGE_P_AMOUNT',
			change_p_province: 'CHANGE_P_PROVINCE',
			change_p_city: 'CHANGE_P_CITY',

			// 
			// 拿地 供土地
			// 
			change_nadi_yanxuan: 'CHANGE_NADI_YANXUAN',
			change_nadi_pageindex: 'CHANGE_NADI_PAGEINDEX',
			change_nadi_fangshi: 'CHAGNE_NADI_FANGSHI',
			change_nadi_city: 'CHANGE_NADI_CITY',
			change_nadi_province: 'CHANGE_NADI_PROVINCE',

			// 求土地
			change_p_nadi_yanxuan: 'CHANGE_P_NADI_YANXUAN',
			change_p_nadi_pageindex: 'CHANGE_P_NADI_PAGEINDEX',
			change_p_nadi_fangshi: 'CHAGNE_P_NADI_FANGSHI',
			change_p_nadi_lind:'CHAGNE_P_NADI_LIND',
			change_p_nadi_province: 'CHANGE_P_NADI_PROVINCE',
			change_p_nadi_city: 'CHANGE_P_NADI_CITY',

			// 找钱 项目融资

			change_z_yanxun :'CHANGE_Z_YANXUAN',
			change_z_pageindex: 'CHANGE_Z_PAGEINDEX',
			change_z_rongzi:'CHANGE_Z_RONGZI',
			change_z_jine:'CHANGE_Z_JINE',
			change_z_qixian: 'CHANGE_Z_QIXIAN',
			change_z_province:'CHANGE_Z_PROVINCE',
			change_z_city:'CHANGE_Z_CITY',

			//  优选资金

			change_r_yanxuan:'CHANGE_R_YANXUAN',
			change_r_pageindex: 'CHANGE_R_PAGEINDEX',
			change_r_province: 'CHANGE_R_PROVINCE',
			change_r_city: 'CHANGE_R_CITY',
			change_r_zhuti: 'CHANGE_R_ZHUTI',
			change_r_guihua : 'CHANGE_R_GUIHUA',
			change_r_yewu:'CHANGE_R_YEWU',
			change_r_guimo:'CHANGE_R_GUIMO',
		}),
		clear(a){
			console.log(a)
			if(a=='quyu'){
				this.change_province('')
				this.change_city('')
			}else if(a=='p_quyu'){
				this.change_p_province('')
				this.change_p_city('')
			}else if(a=='suozai'){
				this.change_nadi_city('')
				this.change_nadi_province('')
			}else if(a=='p_nadisuozai'){
				this.change_p_nadi_city('')
				this.change_p_nadi_province('')
			}else if(a == 'z_quyu'){
				this.change_z_province('')
				this.change_z_city('')
			}else if(a == 'r_quyu'){
				this.change_r_province('')
				this.change_r_city('')
			}
		},
		findcity(id,name,check){

			if(check === 'quyu'){
				this.change_province(name)
				this.change_city('')
				this.city.area = null
			}else if (check === 'p_quyu'){
				this.change_p_province(name)
				this.change_p_city('')
				this.city.area = null
			}else if(check ==='suozai'){
				this.change_nadi_province(name)
				this.change_nadi_city('')
				this.city.area = null
			}else if(check ==='p_nadisuozai'){
				this.change_p_nadi_province(name)
				this.change_p_nadi_city('')
				this.city.area = null
			}else if(check === 'z_quyu'){
				this.change_z_province(name)
				this.change_z_city('')
				this.city.area = null
			}else if(check === 'r_quyu'){
				this.change_r_province(name)
				this.change_r_city('')
				this.city.area = null
			}
			
			Dazong.FindCity({'pid':id+''})
			.then((res)=>{
				this.city = res.data
				this.$nextTick(function(){
					$('body').on('click','.c div.xiu',function(){
						if($(this).hasClass('chosen')){
							$(this).removeClass('chosen')
						}else{
							$(this).addClass('chosen')
							$(this).parents('.unit_city').addClass('height_auto')
						}
						$(this).siblings().removeClass('chosen')
					})
				})
			})
		},
		confirm_city(name){
			this.$emit('surecity',name)
		},
		showHeight(e){
			let el = e.target
			if($(el).parent().hasClass('height_auto')){
				$(el).parent().removeClass('height_auto')
			}else{
				$(el).parent().addClass('height_auto')
			}
		},
		p(a,b){
			// console.log(b)
			switch (b)
			{
			// 大宗项目交易 
				case 'yanxuan':      
					if(a=='不限'){
						this.change_yanxuan('')
						this.change_pageindex('1')
						this.$emit('initpage')
					}else{
						this.change_yanxuan('0')
						this.change_pageindex('1')
						this.$emit('initpage')
					}
					break;
				case 'zhuanrang':
					if(a=='不限'){
						this.post.dazong.push.qiugou = ''
						this.change_pageindex('1')
						this.$emit('initpage')
					}
					else{
						this.change_qiugou(a)
						this.change_pageindex('1')
						this.$emit('initpage')
					}
					break;
				case 'shuxing':
					if(a=='不限'){
						this.change_shuxing('')
						this.change_pageindex('1')
						this.$emit('initpage')
					}else{
						this.change_shuxing(a)
						this.change_pageindex('1')
						this.$emit('initpage')
					}
					break;
				case 'jine':
					if(a=='不限'){
						this.post.dazong.push.amount  = ''
						this.change_pageindex('1')
						this.$emit('initpage')
					}
					else{
						this.change_amount(a)
						this.change_pageindex('1')
						this.$emit('initpage')
					}
					break;
			//  大宗金主求购
				case 'p_yanxuan':
					if(a=='不限'){
						this.change_p_yanxuan('')
						this.change_p_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_p_yanxuan('0')
						this.change_p_pageindex('1')
						this.$emit('initpage1')
					}
					break;
				case 'p_zhuanrang':
					if(a=='不限'){
						this.post.dazong.pushb.qiugou = ''
						this.change_p_pageindex('1')
						this.$emit('initpage1')
					}
					else{
						this.change_p_qiugou(a)
						this.change_p_pageindex('1')
						this.$emit('initpage1')
					}
					break;
				case 'p_shuxing':
				// change_p_shuxing
					if(a=='不限'){
						this.change_p_shuxing('')
						this.change_p_pageindex('1')
						this.$emit('initpage')
					}else{
						this.change_p_shuxing(a)
						this.change_p_pageindex('1')
						this.$emit('initpage')
					}
					break;
				case 'nadi':
					if(a=='不限'){
						this.post.dazong.pushb.line = ''
						this.change_p_pageindex('1')
						this.$emit('initpage')
					}else{
						this.change_p_line(a)
						this.change_p_pageindex('1')
						this.$emit('initpage')
					}
					break;
				case 'p_jine':
					if(a=='不限'){
						this.post.dazong.pushb.amount  = ''
						this.change_p_pageindex('1')
						this.$emit('initpage')
					}
					else{
						this.change_p_amount(a)
						this.change_p_pageindex('1')
						this.$emit('initpage')
					}
					break;

					// 供土地

				case 'nadiyanxuan':
					if(a=='不限'){
						this.change_nadi_yanxuan('')
						this.change_nadi_pageindex('1')
						this.$emit('initpage')
					}else{
						this.change_nadi_yanxuan('0')
						this.change_nadi_pageindex('1')
						this.$emit('initpage')
					}
					break;
				case 'nadifangshi':
					if(a=='不限'){
						this.post.nadi.push.land  = ''
						this.change_nadi_pageindex('1')
						this.$emit('initpage')
					}else{
						this.change_nadi_fangshi(a)
						this.change_nadi_pageindex('1')
						this.$emit('initpage')

					}
					break;

					// 求土地
					
				case 'p_nadiyanxuan':
				if(a=='不限'){
						this.change_p_nadi_yanxuan('')
						this.change_p_nadi_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_p_nadi_yanxuan('0')
						this.change_p_nadi_pageindex('1')
						this.$emit('initpage1')
					}
					break;
					// change_p_nadi_fangshi
				case 'p_nadifangshi':
					if(a=='不限'){
						this.post.nadi.pushb.land  = ''
						this.change_p_nadi_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_p_nadi_fangshi(a)
						this.change_p_nadi_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'p_nadiguihua':
					if(a=='不限'){
						this.post.nadi.pushb.lind  = ''
						this.change_p_nadi_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_p_nadi_lind(a)
						this.change_p_nadi_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'z_yanxuan':
					if(a=='不限'){
						this.change_z_yanxun('')
						this.change_z_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_z_yanxun('0')
						this.change_z_pageindex('1')
						this.$emit('initpage1')

					}
					break;
// 
//  ==================================项目融资
// 

				case 'z_yanxuan':
					if(a=='不限'){
						this.change_z_yanxun('')
						this.change_z_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_z_yanxun('0')
						this.change_z_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'z_rongzi':
					if(a=='不限'){
						this.change_z_rongzi('')
						this.change_z_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_z_rongzi(a)
						this.change_z_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'z_jine':
					if(a=='不限'){
						this.change_z_jine('')
						this.change_z_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_z_jine(a)
						this.change_z_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'z_qixian':
					if(a=='不限'){
						this.change_z_qixian('')
						this.change_z_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_z_qixian(a)
						this.change_z_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				//  优选资金
				case 'r_yanxuan':
					if(a=='不限'){
						this.change_r_yanxuan('')
						this.change_r_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_r_yanxuan('0')
						this.change_r_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'r_zhuti':
					if(a=='不限'){
						this.change_r_zhuti('')
						this.change_r_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_r_zhuti(a)
						this.change_r_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'r_guihua':
					if(a=='不限'){
						this.post.zhaoqian.pushb.lind  = ''
						this.change_r_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_r_guihua(a)
						this.change_r_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'r_yewu':
					if(a=='不限'){
						this.post.zhaoqian.pushb.way = ''
						this.change_r_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_r_yewu(a)
						this.change_r_pageindex('1')
						this.$emit('initpage1')

					}
					break;
				case 'r_guimo':
					if(a=='不限'){
						this.change_r_guimo('')
						this.change_r_pageindex('1')
						this.$emit('initpage1')
					}else{
						this.change_r_guimo(a)
						this.change_r_pageindex('1')
						this.$emit('initpage1')

					}
					break;
			}
			
		},

	},
	// beforeRouteUpdate (to, from, next) {
		

	// 	next()
  	// },
	mounted(){
		$('body').on('click','.unit b',function(){
			$(this).addClass('choose').siblings().removeClass('choose')
		})




		$('body').on('click','.c div.xiu',function(){
			if($(this).hasClass('chosen')){
				$(this).removeClass('chosen')
			}else{
				$(this).addClass('chosen')
				$(this).parents('.unit_city').addClass('height_auto')
			}
			$(this).siblings().removeClass('chosen')
		})



		$('body').on('click','.showmore div b',function(){
			if($(this).index()>0){
				if($(this).hasClass('choose')){
						$(this).removeClass('choose')
					}else{
						$(this).addClass('choose')
						$(this).parents('.showmore').find('b:eq(0)').removeClass('choose')
					}
			}else{
				if(!$(this).hasClass('choose')){
					$(this).addClass('choose').siblings().removeClass('choose')
				}
			}
		})
		$('.city_select>div').each(function(e,i){
			$(this).find('b:eq(0)').addClass('choose')
		})
		
	}	
}
</script>
<style>
	div.city_select{
		font-size: 14px;
		width: 706px;
		background-color: #fff;
		margin-top:20px;
		padding: 25px 60px 16px 15px;
		position: relative;
	}
	div.chosen{
	    background-color: #f6f6f6;
	    border: 1px solid #ddd;
	    border-radius: 6px;
	    height: 28px;
	    position: relative;
	    text-align:center;
	}
	div.chosen p{
    	display: block!important;
	    border-radius: 6px;
	    position: absolute;
	    background-color: #f6f6f6;
	    border: 1px solid #ddd;
	    padding: 10px;
	    z-index: 2;
	}
	em.more{
		color: #666;
	    position: absolute;
	    top: 9px;
	    left: 620px;
	    z-index: 9999;
	}
	em.more img{
		display: inline-block;
  		margin: 2px;
  		margin-left: 7px;
	}
	div.unit_city{
		height: 40px;
	}
	div.height_auto{
		height: auto!important;
	}
	div.unit{
		overflow: hidden;
		margin-bottom: 22px;
		position: relative;
	}
	div.unit span{
		font-size:14px;
		color:#333;
		float:left;
		line-height:30px;
	}
	div.unit div{
		float:left;
	    margin-left: 10px;
	    width: 600px;
	}
	div.unit div b{
		color: #999999;
		padding:8px 14px 8px 14px;
		border-radius:7px;
		display: inline-block;
		text-align:center;
		margin-right: 10px;
		cursor: pointer;
	}
	div.unit div b.choose{
		background-color: #15213d;
		color:#fff;
	}
	div.unit_city{
		position: relative;
	}
	div.unit_city div.c{
		width: 610px;
		float: left;
	}
	div.unit_city div.c.xiu{
		width: 536px!important;
	}
	div.unit_city div.c p{
		display: none;
	}
	div.unit_city div{
	    margin-left: 2px;
	    width: 90px;
	    float: left;
	    color: #999999;
	    text-align: center;
	    line-height: 30px;
	    cursor: pointer;
	    margin-right: 10px;
	    margin-bottom: 10px;
	    position: relative;
        /* // height: 30px; */
    }
    div.unit_city div img{
    	display: inline-block;
	  	margin: 12px;
	  	margin-left: 5px;
    }
    div.city_list{
		display: none
	}
	img.duoxuan{
		position: absolute;
    	right: 10px;
		top: 4px;
	}
	.xiu{
		margin-right: 20px!important;
		/* width: auto!important; */
		padding: 0 10px!important;
	}
	.whatever{
		width: 50px;
	}
	div.whatever{
		width: 60px!important;
    	margin-right: 70px!important;
	}
	.showmore{
		height: 38px!important;
		overflow: hidden;
		margin-bottom: 22px;
		position: relative;
	}
	.showmore span{
		font-size:14px;
		color:#333;
		float:left;
		line-height:30px;
	}
	.showmore div{
		float:left;
	    margin-left: 10px;
	    width: 600px;
	}
	.showmore div b{
		color: #999999;
		padding:8px 14px 8px 14px;
		border-radius:7px;
		display: inline-block;
		text-align:center;
		margin-right: 10px;
		cursor: pointer;
		margin-bottom: 10px;
	}
	.showmore div b.choose{
		background-color: #15213d;
		color:#fff;
	}
	div.whatever.choose{
		background-color: #15213d;
		color: #fff!important;
		border-radius: 7px;
	}
</style>
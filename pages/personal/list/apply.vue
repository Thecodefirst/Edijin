<template>
	<div style="margin-bottom: 120px;">

		<div class="center">
			<span>申请认证</span>
		</div>
		<div class="apply_inp">
			<span><i>*</i>姓名</span>
			<input type="text" name="name"> 	
		</div>
		<div class="apply_inp sc">
			<span><i>*</i>手机号</span>
			<input type="text" name="phone" readonly :value="this.auth.phone"> 	
		</div>
		<div class="apply_inp">
			<span><i>*</i>公司</span>
			<input type="text" name="company"> 	
		</div>
		<div class="apply_inp p">
			<span><i>*</i>邮箱</span>
			<input type="text" name="company"> 	
		</div>
		<!-- <p class="notic"><i>*</i>上传身份证正面照片</p>
		<img src="@/assets/img/upload_shenfen.png" class="pointer up"> -->
		<!-- <p class="f">地金网对您的资料信息保密！（仅限地金网交易师认证使用）</p> -->
		<p class="s">上传名片</p>
		<div class="up">
			<!-- <Upload action="//ht.edijin.com/dj/home/updateUserImg" :format="['jpg','png','bmp']" :max-size="10240" :on-format-error="formatError">
				<Button icon="ios-cloud-upload-outline">Upload files</Button>
			</Upload> -->
			<div class="pointer m_r">
				<Upload action="//ht.edijin.com/dj/home/updateUserImg" 
				:format="['jpg','png','bmp']" 
				:max-size="10240" 
				:on-format-error="formatError" 
				:on-success="v=>{ handleSuccess(v,'1')}"
				:show-upload-list="false">
					<Button icon="ios-cloud-upload-outline">Upload files</Button>
				</Upload>
				<img :src="imgUrl">
			</div>
			<div class="pointer m_r">
				<Upload action="//ht.edijin.com/dj/home/updateUserImg" 
				:format="['jpg','png','bmp']" 
				:max-size="10240" 
				:on-format-error="formatError" 
				:on-success="v=>{ handleSuccess(v,'2')}"
				:show-upload-list="false">
					<Button icon="ios-cloud-upload-outline">Upload files</Button>
				</Upload>
				<img :src="imgUrl1">
			</div>
		</div>
		<button class="s">申请认证</button>
	</div>
</template>
<script>
import {mapState,mapActions,mapMutations} from "vuex"
	export default { 
		data(){
			return {
				imgUrl:'/img/upload_shenfen_a.png',
				imgUrl1:'/img/upload_shenfen_b.png',   
			}
		},
		computed:{
			...mapState({
				active:'active',
				auth:'auth'
			}),
		},
		methods:{
			...mapMutations({
				show_modal: 'SHOW_MODAL',
			}),
			formatError(){
				this.show_modal('图片格式错误')
			},
			handleSuccess (v,type){
				if(type==1){
					this.imgUrl = v.data.src
				}else if(type==2){
					this.imgUrl1 = v.data.src
				}
			}
		},
	
	}
</script>
<style>
@import '@/assets/css/iview.css';
.p{
	position: absolute;
    left: 440px;
    top: 178px;
}
div.up{
	overflow: hidden;
}
div.up div{
	float: left;
	width: 290px;
	height: 161px;
	position: relative;
}
.m_r{
	margin-right: 30px;
	margin-bottom: 0!important;
	margin-top: 0!important;
}
.m_r img{
	width: 290px;
	height: 161px;
}
.ivu-upload{
	opacity: 0;
	position:absolute!important;
	top: 0;
	left: 0;
}
</style>

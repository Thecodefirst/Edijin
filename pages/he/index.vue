<template>
	<div class="charge">
		<Headersub></Headersub>
		<div class="container">
			<img src="@/assets/img/topbg.png" class="tb">
			<img src="@/assets/img/he_renzheng.png" class="tb_rz">
			<div class="main_a">
				<p class="h">个人信息</p>
				<div class="i">
					<p><i>*</i>姓名</p>
					<input type="text" name="name">
				</div>
				<div class="i_1 i">
					<p><i>*</i>手机</p>
					<input type="text" name="phone">
				</div>
				<div class="i_2 i">
					<p>公司</p>
					<input type="text" name="company">
				</div>
			</div>
			<div class="main_b">
				<p class="h">上传文件</p>
				<p><i>*</i>上传身份证正面照片</p>
				<img src="@/assets/img/upload_shenfen.png" class="pointer">
				<p class="f">地金网对您的资料信息保密！（仅限地金网交易师认证使用）</p>
				<p class="s">上传名片</p>
				<img src="@/assets/img/upload_shenfen_a.png" class="mr pointer">
				<img src="@/assets/img/upload_shenfen_b.png" class="pointer">
				<button>申请</button>
			</div>
		</div>
		<Sidetool></Sidetool>
		<Footer></Footer>
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import Sidetool from '~/components/sidetool.vue'
export default {
	data(){
		return {
			shenfen:''
		}
	},
	components:{
		Headersub,
		Footer,
		Sidetool
	},
	methods:{
		choose(){
			$('.sub').show()
		},
		set_shenfen(a){
			$('.sub').hide()
			if(a==1){
				this.shenfen = '交易师'
			}else{
				this.shenfen = '资方'
			}
		}
	}
}
</script>
<style type="text/css" scoped>
	
</style>
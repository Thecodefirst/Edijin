<template>
	<div class="charge">
		<Headersub></Headersub>
		<div class="container">
			<img src="@/assets/img/topbg_zf.png" class="tb">
			<img src="@/assets/img/he_renzheng_zf.png" class="tb_rz">
			<div class="main_a zf">
				<p class="h">项目介绍</p>
				<p><i>*</i>说明</p>
				<textarea placeholder="请输入您的内容不超过500字..."></textarea>
			</div>
			<div class="main_b zf">
				<p class="h">申请资料填写</p>
				<div class="inp_row">
					<div class="i">
						<p><i>*</i>姓名</p>
						<input type="text" name="name">
					</div>
					<div class="i">
						<p><i>*</i>手机号</p>
						<input type="text" name="name">
					</div>
					<div class="i">
						<p><i>*</i>公司</p>
						<input type="text" name="name">
					</div>
					<div class="i">
						<p><i>*</i>邮箱</p>
						<input type="text" name="name">
					</div>
				</div>
				<p class="s"><i>*</i>主营业务</p>
				<textarea class="sc" placeholder="请输入您的内容不超过50字..."></textarea>
			</div>
			<div class="main_a zf">
				<p class="h">上传文件</p>
				<p class="s"><i>*</i>上传名片</p>
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
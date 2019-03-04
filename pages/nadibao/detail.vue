<template>
	<div class="kb_detail">
		<Headersub></Headersub>
		<div class="container">
			<div class="pinpai_common pointer">
				<span class="choose">土拍预告</span>
				<span>土拍直播</span>
			</div>
			<h1 class="title">香港兴业|耦园建筑面积约123㎡实体样板房首开，奏响西溪美好生活新
篇章峰回路转！这四个城市的楼市，机会来了，赶快来参观</h1>
			<div class="detail_t">
				<span>来源：地金网</span>
				<span>编辑：金三胖</span>
				<span>2018-05-16  13:45:39</span>
				<span>浏览量：999</span>
			</div>
			<div class="main">
				<div class="left">
					<div></div>
					<div class="paging">
						<div>
							<span>上一篇</span>
							<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						</div>
						<div>
							<span>下一篇</span>
							<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="ad"><img src="@/assets/img/d_swiper.jpg"><span>sdfsdfs</span></div>
					<div class="topten">
						<span>新闻Top 10</span>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
					<div class="eli">
						<p>中国华融董事长赖小民涉嫌严重违纪违法</p>
						<p>2018-20-21</p>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>	
	</div>
</template>
<script type="text/javascript">
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    Headersub,
    Footer,
  },
  mounted(){
  	$('.paging div').hover(
  		function(){$(this).addClass('choose')},
  		function(){$(this).removeClass('choose')},
	)
	$('.M-PagingBox').pagination({
        mode: 'fixed'
    });
  }
}
</script>
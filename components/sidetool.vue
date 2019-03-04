<template>
  <div class="components_sidetool"> 
      <div><img src="/icon/f.png"></div>
      <div><img src="/icon/g.png"></div>
      <div class="top"><img src="/icon/h.png"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    mounted(){
      $('.components_sidetool div').find('img').mouseenter(function(){
        let src = $(this).attr('src').split('.')[0]
        src +='1'      
        $(this).attr('src',src+'.png')
      })
      $('.components_sidetool div').find('img').mouseleave(function(){
        let src = $(this).attr('src').split('.')[0]
        src=src.substring(0,src.length-1)      
        $(this).attr('src',src+'.png')
      })
      $('.top').click(function(){
        $("html,body").animate({scrollTop:0}, 500);
      })
    }
  }
</script>
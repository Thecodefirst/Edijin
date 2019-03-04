<template>
    <div class="share">
       <img class="quit" @click="quit" src="@/assets/img/quit.png" alt="">
       <span @click="shareByWX"><img src="@/assets/img/shareimg/wx.png" alt="">微信</span>
       <span @click="shareByQQ"><img src="@/assets/img/shareimg/qq.png" alt="">QQ</span>
       <span @click="shareByWeibo"><img src="@/assets/img/shareimg/weibo.png" alt="">微博</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        share_data:null,
    },
    methods:{
        quit(){
            this.$emit('quitshare')
        },
        shareByWX(){
             window.open('http://zixuephp.net/inc/qrcode_img.php?url=' + encodeURIComponent(window.location.href) + '&title=' + this.share_data.title + '&pics=' + this.share_data.img);
        },
        shareByQQ(){
             window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + encodeURIComponent(window.location.href) + '&sharesource=qzone&title=' + this.share_data.title + '&pics=' + this.share_data.img);
        },
        shareByWeibo(){
             window.open('http://service.weibo.com/share/share.php?url=' + encodeURIComponent(window.location.href) + '&sharesource=weibo&title=' + this.share_data.title + '&pic=' + this.share_data.img + '&appkey=2706825840');
        },
    },
}
</script>
<style scoped>
.share{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
span{
    display: inline-block;
    width: 50px;
    text-align: center;
    line-height: 40px;
}
img.quit{
    width: 10px;
    height: 10px;
    position: absolute;
    right: 30px;
    top: -20px;
}
</style>




<template>
    <div class="shequn">
        <Headersub/>
        <img src="@/assets/img/d_swiper.jpg" class="banner_pic">
        <div class="con">
            <div class="main">
                <div class="pinpai_common pointer">
                    <span class="choose">金主会</span>
                    <nuxt-link to='/dijinquan?id=1'><b>线下活动</b></nuxt-link>
                    <nuxt-link to='/dijinquan?id=2'><b>地金相亲会</b></nuxt-link>
                    <nuxt-link to='/dijinquan?id=3'><b>论坛峰会</b></nuxt-link>
                </div>
                <div class="editer">
                    <div class="tit">
                        <p id="clamp">
                            {{ djwDjCircleJoinGroup.title }}
                        </p>
                    </div>
                    <div class="content">
                        <div class="center" v-html="djwDjCircleJoinGroup.text">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
import DJ from '../../api/dijinquan'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return {
            
        }
    },
    components:{
        Headersub,
        Footer
    },
    async asyncData(context) { 
        let [
            djwDjCircleJoinGroup,
        ]
        = await Promise.all([
            DJ.djwDjCircleJoinGroup(),
        ])
        return {
            djwDjCircleJoinGroup: djwDjCircleJoinGroup.data
        }
    },
    mounted(){
        var module = document.querySelectorAll("#clamp");
        module.forEach((e,i)=>{
            $clamp(e, {clamp: 2});
        })
    }
}
</script>

<style>
.pinpai_common{
    background-color: #fff;
    margin-bottom: 30px;
}
.pinpai_common b{
    color: #333!important;
    font-size:16px!important;
    margin-left: 40px!important;
}
</style>

<template>
    <div class="dijinquan">
        <Headersub/>
        <img :src="soilPaging.list[9].picture" class="banner_pic">
        <div class="con_top">
            <div class="main">
                <div class="pinpai_common pointer">
                    <span class="choose">金主会</span>
                    <nuxt-link to='/dijinquan/shequn'><b>加入社群>></b></nuxt-link>
                </div>
                <div class="three_img">
                    <div v-for="(item,index) in djwDjCircleHomePage.typeList">
                        <nuxt-link :to="{path:'/dijinquan/detail',query:{id:item.id,flag:item.flag}}">
                            <img :src="item.hover" alt="">
                            <div class="hover_img">
                                <img :src="item.subimg" alt="">
                            </div>
                            <i></i>
                            <h5>{{ item.name }}</h5>
                            <p>{{ item.text }}</p>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="con_middle">
            <div class="main">
                <div class="h">
                    <div class="pointer">
                        <span :class="index==page.choose-1?'choose':''" v-for="(item,index) in djwDjCircleHomePage.typeList"><nuxt-link :to="{path:'/dijinquan',query:{typeid:item.id,flag:item.flag}}">{{ item.name }}</nuxt-link></span> 
                        <!-- <span @click="choose=1" :class="choose==1?'choose':''">金砖夜宴</span>
                        <span @click="choose=2" :class="choose==2?'choose':''">地金培训</span>
                        <span @click="choose=3" :class="choose==3?'choose':''">论坛峰会</span> -->
                    </div>
                </div>
                <div class="m" v-show="getDjwDjCircleMore.flag==page.choose">
                    <div v-for="(item,index) in getDjwDjCircleMore.detailList">
                        <img :src="item.img" alt="">
                        <span>{{ item.time }}</span>
                        <p id='clamp'><i></i>{{ item.des }}</p>
                    </div>
                </div>
                <div class="m" v-show="getDjwDjCircleMore1.flag==page.choose">
                    <div v-for="(item,index) in getDjwDjCircleMore1.detailList">
                        <img :src="item.img" alt="">
                        <span>{{ item.time }}</span>
                        <p id='clamp'><i></i>{{ item.des }}</p>
                    </div>
                </div>
                <div class="m" v-show="getDjwDjCircleMore2.flag==page.choose">
                    <div v-for="(item,index) in getDjwDjCircleMore2.detailList">
                        <img :src="item.img" alt="">
                        <span>{{ item.time }}</span>
                        <p id='clamp'><i></i>{{ item.des }}</p>
                    </div>
                </div>
            </div>
            <button>查看更多</button>
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
            // choose:1,
            img:['/img/djq2.png','/img/djq.png','/img/djq1.png'],
        }
    },
    computed:{
        ...mapState([
                'page',
            ]),
    },
    components:{
        Headersub,
		Footer,
    },
    methods:{
        ...mapMutations({
			set_choose: 'SET_CHOOSE',
		}),
    },
    async asyncData(context) {
        let a= [];
        await DJ.djwDjCircleHomePage()
            .then((res)=>{
                (res.data.typeList).forEach((e,i)=>{
                    a.push({typeId:e.id,flag:e.flag})
                })
            })
        let [
            soilPaging,
            djwDjCircleHomePage,
            getDjwDjCircleMore,
            getDjwDjCircleMore1,
            getDjwDjCircleMore2,
        ]
        = await Promise.all([
            DJ.soilPaging(),
            DJ.djwDjCircleHomePage(),
            DJ.getDjwDjCircleMore({
                ...a[0],
                ...context.store.getters.auth,
                "pageIndex":"1",
                "count":"6",
            }),
            DJ.getDjwDjCircleMore({
                ...a[1],
                ...context.store.getters.auth,
                "pageIndex":"1",
                "count":"6",
            }),
            DJ.getDjwDjCircleMore({
                ...a[2],
                ...context.store.getters.auth,
                "pageIndex":"1",
                "count":"6",
            }),
        ])
        return {
            soilPaging: soilPaging.data,
            djwDjCircleHomePage: djwDjCircleHomePage.data,
            getDjwDjCircleMore: getDjwDjCircleMore.data,
            getDjwDjCircleMore1: getDjwDjCircleMore1.data,
            getDjwDjCircleMore2: getDjwDjCircleMore2.data
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.set_choose(to.query.flag||0)
		next()
  	},
    created(){
        this.set_choose(this.$route.query.flag||1);
        (this.djwDjCircleHomePage.typeList).forEach((val,index)=>{
            val['subimg'] = this.img[index]
        })
    },
    mounted(){
        var module = document.querySelectorAll("#clamp");
        // console.log(module)
        module.forEach((e,i)=>{
            $clamp(e, {clamp: 2});
        })
    }
}
</script>

<style scoped>
.pinpai_common{
    background-color: #fff;
}
.pinpai_common b{
    color:#15213d;
}
div.three_img div.hover_img{
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute!important;
    left: 0;
    top: 0;
    width: 380px!important;
    height: 196px!important;
    background-color:rgba(0.5, 0.5, 0.5, 0.5)!important;
}
div.three_img div.hover_img img{
    width: 50px!important;
    height: 40px!important;
}
</style>

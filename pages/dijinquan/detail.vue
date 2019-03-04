<template>
    <div class="dj_detail">
        <Headersub/>
        <!-- <img :src="soilPaging.list[9].picture" class="banner_pic"> -->
        <div class="main">
            <div class="con">
                <div class="nav pointer">
                    <span :class="index==page.choose-1?'choose':''" v-for="(item,index) in djwDjCircleHomePage.typeList"><nuxt-link :to="{path:'/dijinquan/detail',query:{id:item.id,flag:item.flag}}">{{ item.name }}</nuxt-link></span>
                </div>
                <div class="title">
                    <p><i></i>简介</p>
                    <p>{{ getDjwDjCircleMore.text }}</p>
                </div>
                <div class="list">
                    <div v-for="(item,index) in getDjwDjCircleMore.detailList">
                        <nuxt-link :to="{path:'/dijinquan/artical',query:{id:item.id}}">
                            <img :src="item.img" alt="">
                            <p>{{ item.time }}<i></i></p>
                            <p id="clamp">{{ item.des }}</p>
                        </nuxt-link>
                        
                    </div>
                </div>
                <Page :style="{'text-align': 'center','background': '#f5f5f5'}" :total="getDjwDjCircleMore.list1" :page-size='12' @on-change='t' :current.sync='current'/>
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
    watchQuery: true,
    data(){
        return{
            current:1
        }
    },
    components:{
        Headersub,
        Footer
    },
    computed:{
        ...mapState([
                'page',
            ]),
    },
    methods:{
         ...mapMutations({
			set_choose: 'SET_CHOOSE',
        }),
        t(a){
            let h = window.location.search
            
            this.$router.replace({
                path:'/dijinquan/detail'+h,
                query:{paging:a}
            })
        },
    },
    async asyncData(context){
        // console.log(context.route.query.id)
        let a= [];
        await DJ.djwDjCircleHomePage()
            .then((res)=>{
                (res.data.typeList).forEach((e,i)=>{
                    a.push({typeId:e.id,flag:e.flag})
                })
            })
        
        let [
            getDjwDjCircleMore,
            djwDjCircleHomePage,
        ]
        = await Promise.all([
            DJ.getDjwDjCircleMore({
                ...context.store.getters.auth,
                "typeId":context.route.query.id+'',
                "flag":context.route.query.flag+'',
                "pageIndex":context.route.query.paging?context.route.query.paging+'':'1',
                "count":"12",
            }),
            DJ.djwDjCircleHomePage(),
        ])
        return {
            getDjwDjCircleMore: getDjwDjCircleMore.data,
            djwDjCircleHomePage: djwDjCircleHomePage.data
        }
    },
    beforeRouteUpdate (to, from, next) {
		document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        this.current = 1
        // this.this.page.choose = to.query.id
        // console.log()
        this.set_choose(to.query.flag||0)
		next()
  	},
    created(){
        this.set_choose(this.$route.query.flag)
    },
    mounted(){
        var module = document.querySelectorAll("#clamp");
        module.forEach((e,i)=>{
            $clamp(e, {clamp: 3});
        })
    }
}
</script>

<style>
@import url(@/assets/css/iview.css);
</style>

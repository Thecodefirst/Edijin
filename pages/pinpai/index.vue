<template>
    <div class="jinzhu">
        <Headersub/>
        <img :src="soilPaging.list[10].picture" class="banner_pic">
        <div class="main">
            <div class="con">
                <div class="nav pointer">
                    <nuxt-link to='pinpai?id=0'>
                        <span :class="page.choose==0?'choose':''">金主直通车</span>
                    </nuxt-link>
                    <nuxt-link to='pinpai?id=1'>
                        <span :class="page.choose==1?'choose':''">大咖</span>
                    </nuxt-link>
                    <nuxt-link to='pinpai?id=2'>
                        <span :class="page.choose==2?'choose':''">投资机构</span>
                    </nuxt-link>
                </div>
                <div class="pic_con mb_20" v-show="page.choose==0">
                    <div class="center">
                        <div class="h pointer">
                            <i></i>
                            <span>大咖</span>
                            <span>金主入驻</span>
                        </div>
                        <ul class="pointer">
                            <li v-for="(item,index) in TopInvestor.list" :key="index">
                                <nuxt-link :to="{ path:'/pinpai/detail',query:{id:item.id} }">
                                    <img :src="item.financingPicture" alt="">
                                    <p>
                                        <i>{{ item.financingName }}</i><br>
                                        <b>{{ item.microProfile }}</b>
                                    </p>  
                                </nuxt-link>
                                <div class="tuijian">推荐项目</div>  
                            </li>
                        </ul>
                        <div class="more_daka">
                            <nuxt-link to='/pinpai?id=1'>
                                更多大咖
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="pic_con" v-show="page.choose==0">
                    <div class="center">
                        <div class="h">
                            <i></i>
                            <span>投资机构</span>
                            <span style="display:none;">金主入驻</span>
                        </div>
                        <div class="list" v-for="(item,index) in TopInstitutions.list" :key="index">
                            <nuxt-link :to="{path:'/pinpai/detailjigou',query:{id:item.id}}">
                                <img :src="item.enterprisePicture" alt="">
                                <p><i>{{ item.enterpriseName }}</i>{{ item.profile }}</p>
                            </nuxt-link>
                            <button>推荐项目</button>
                        </div>
                        <div class="more_daka">
                            <nuxt-link to='/pinpai?id=2'>
                                更多机构
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="pic_con" v-show="page.choose==1">
                    <div class="center">
                        <div class="list" v-for="(item,index) in FindFinancing.list" :key="index">
                            <nuxt-link :to="{path:'/pinpai/detail',query:{id:item.id}}">
                                <img :src="item.financingPicture" alt="">
                                <p><i>{{ item.financingName }}  |  {{ item.microProfile }}</i>{{ item.profile }}</p>
                            </nuxt-link>
                            <button>推荐项目</button>
                        </div>
                        <Page :style="{'position':'absolute','justify-content': 'center','display': 'flex'}" :total="FindFinancing.list1" :page-size='10' @on-change='t1'/>
                    </div>
                </div>
                <div class="pic_con" v-show="page.choose==2">
                    <div class="center">
                        <div class="list" v-for="(item,index) in FindInstitutions.list">
                            <nuxt-link :to="{path:'/pinpai/detailjigou',query:{id:item.id}}">
                                <img :src="item.enterprisePicture" alt="">
                                    <p><i>{{ item.enterpriseName }}</i>{{ item.profile }}</p>
                            </nuxt-link>
                            <button>推荐项目</button>
                        </div>
                        <Page :style="{'position':'absolute','justify-content': 'center','display': 'flex'}" :total="FindInstitutions.list1" :page-size='10' @on-change='t'/>
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
import P from '../../api/pinpai'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    watchQuery: true,
    data(){
        return {
            jigou_pageindex:'1',
            daka_pageindex:'1',
        }
    },
    components:{
        Headersub,
        Footer
    },
    watch:{

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
            // alert(a)
            this.$router.push({
                path:'/pinpai',
                query:{id:2,pageindex:a}
            })
        },
        t1(a){
            this.$router.push({
                path:'/pinpai',
                query:{id:1,paging:a}
            })
        }
    },
    async asyncData (context) {
        // console.log(context.route.query.page)
        let [
            soilPaging,
            TopInvestor,
            TopInstitutions,
            FindFinancing,
            FindInstitutions,
        ]
        = await Promise.all([
            P.soilPaging(),
            P.TopInvestor({"top":"1"}),
            P.TopInstitutions({"top":"1"}),
            P.FindFinancing({
                "pageIndex":context.route.query.paging?context.route.query.paging+'':'1',
                "count":"10"
            }),
            P.FindInstitutions({
                "pageIndex":context.route.query.pageindex?context.route.query.pageindex+'':'1',
                "count":"10"
            }),
        ])
        return {
            soilPaging: soilPaging.data,
            TopInvestor: TopInvestor.data,
            TopInstitutions: TopInstitutions.data,
            FindFinancing: FindFinancing.data,
            FindInstitutions: FindInstitutions.data,
        }
    },
    beforeRouteUpdate (to, from, next) {
		document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        // this.this.page.choose = to.query.id
        // console.log()
        this.set_choose(to.query.id||0)
		next()
  	},
    mounted(){
        
    },
    created(){
       this.set_choose(this.$route.query.id||0)
        // this.choose = this.$route.query.id||0
    }
}
</script>
<style>
@import url(@/assets/css/iview.css);
.ivu-page-next, .ivu-page-prev, .ivu-page-item{
    height: 40px!important;
    width: 40px!important;
    line-height: 40px;
}
.ivu-page-item{
    line-height: 42px !important;
    margin-right: 20px!important;
}
.pic_con .center{
    position: relative;
}
</style>



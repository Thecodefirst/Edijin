<template>
  <div class="components_headersub">
    <div class="a"></div>
    <div class="b">
      <div>
        <p>主管单位：中国房地产业协会</p>
        <p>主办单位：中国房地产金融</p>
        <p style="float:right" v-show="!this.auth.name"><b @click='show_auth'>登录</b>丨注册</p>
        <p v-show="this.auth.name" @click='slide'>{{ this.auth.name }} &nbsp&nbsp<img style="width: 12px;margin-top: 13px;" src="@/assets/img/arrow-down-o.png"></p>
        <div class="user_info">
           <nuxt-link style="margin: 0;width: 0;height: 0;" to="/personal/list/center?nav=1">
            <span style="position: absolute;top: -70px;left: 26px;">{{ this.auth.name }}</span>
          </nuxt-link>
          <button @click="quit">退出</button>
  <!--                资方                -->
          <nuxt-link to='/personal/list' v-show="this.auth.identity==2||this.auth.identity==0">
            <img src="@/assets/img/header_icon.png" alt="">
            <span>发布资金管理</span>
          </nuxt-link>
          <nuxt-link to='/personal/list/public' v-show="this.auth.identity==2||this.auth.identity==0">
            <img src="@/assets/img/header_icon1.png" alt="">
            <span>我要发布需求</span>
            </nuxt-link>
          <nuxt-link to='/personal/list/follow' v-show="this.auth.identity==2||this.auth.identity==0">
            <img src="@/assets/img/header_icon2.png" alt="">
            <span>关注项目管理</span>
          </nuxt-link>
          <nuxt-link class="mr" to='/personal/list/follow' v-show="this.auth.identity==2||this.auth.identity==0">
            <img src="@/assets/img/header_icon3.png" alt="">
            <span>推荐项目管理</span>
          </nuxt-link>
<!--             交易师                 -->
          <nuxt-link to='/personal/list' v-show="this.auth.identity==1||this.auth.identity==3">
            <img src="@/assets/img/header_icon1.png" alt="">
            <span>发布项目管理</span>
            </nuxt-link>
          <nuxt-link to='/personal/list/public_j' v-show="this.auth.identity==1||this.auth.identity==3">
            <img src="@/assets/img/header_icon2.png" alt="">
            <span>我要发布项目111</span>
          </nuxt-link>
          <nuxt-link class="mr" to='/personal/list/follow' v-show="this.auth.identity==1||this.auth.identity==3">
            <img src="@/assets/img/header_icon3.png" alt="">
            <span>关注项目管理</span>
          </nuxt-link>
        </div>
      </div>
      <div>
        <img src="@/assets/img/logo.png" alt="地金网" class="logo">
        <div class="changeCity">
          <span>构建以媒体为入口的房地产一站式投融服务平台</span><br>
          <span>总站：<i>[ 切换城市 ]</i></span>
        </div>
        <img src="@/assets/img/searchinput.png" alt="搜索" class="searchinput">
      </div>
    </div>
    <div class="c1">
        <div>
            <span class="pointer" :class="item.name==page.active?'hover':''" v-for='item in h_list'>
              <nuxt-link :to='item.url'>{{ item.title }}</nuxt-link>
            </span>

            <img src="@/assets/img/home_logo3.png">
        </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
  export default {
    data(){
      return {
          l:null,
          h_list:[
            {title:'首页',url:'/',name:'index'},
            {title:'快报',url:'/kuaibao',name:'kuaibao'},
            {title:'大宗',url:'/dazong',name:'dazong'},
            {title:'找钱',url:'/zhaoqian',name:'zhaoqian'},
            {title:'拿地',url:'/nadi',name:'nadi'},
            {title:'直播',url:'/zhibo',name:'zhibo'},
            {title:'金主',url:'/pinpai',name:'pinpai'},
            {title:'拿地宝',url:'/nadibao',name:'nadibao'},
            {title:'金主会',url:'/dijinquan',name:'dijinquan'},
            {title:'专题',url:'/zhuanti',name:'zhuanti'},
            {title:'众筹',url:'/zhongchou',name:'zhongchou'},
            {title:'房教',url:'/fangjiao',name:'fangjiao'},
            {title:'平台',url:'/pingtai',name:'pingtai'},
          ],
      }
    },
    computed:{
      ...mapState({
        page:'page',
      }),
      ...mapGetters([
        'auth'
      ])
    },
    methods:{
      ...mapMutations({
        show_auth: 'SHOW_AUTH',
        set_active_headerbar:'SET_ACTIVE_HEADBAR',
        set_name:'SET_NAME',
        set_uid:'SET_UID',
        set_identity:'SET_IDENTITY',
        show_modal:'SHOW_MODAL',
      }),
      quit(){
        this.set_name(''),
        this.set_uid(''),
        this.set_identity('')
        this.show_modal('您已成功退出')
        this.$router.push('/')
      },
      slide(){
        // alert(1)
        if($('.user_info').height()>0){
          $('.ivu-icon').transition({rotate: '-180deg'})
          $('.user_info').transition({height:'0px'},'snap')
        }else{
          $('.ivu-icon').transition({rotate: '180deg'})
          $('.user_info').transition({height:'auto'},'snap')
        }
      }
    },
    //  beforeRouteEnter(to, from, next) {
    //   console.log(999)
    //   next()
    // },
    // beforeRouteLeave(to, from) {
    //   console.log(2222)
    // },
    // beforeRouteUpdate(to, from, next) {
    //   console.log(111)
    //   next()
    // },
    created(){
     
    },
    mounted(){
    },
  }
</script>
<style>
  a{
    color: inherit!important;
  }
.mr{
  margin-top: 30px!important;
  margin-bottom: 30px;
}
</style>

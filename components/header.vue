<template>
  <div class="components_header">
    <div class="a"></div>
    <div class="b">
      <div>
        <p>主管单位：中国房地产业协会</p>
        <p>主办单位：中国房地产金融</p>
        <p v-show="!this.auth.name" style="float:right"><b @click='show_auth'>登录</b> | <nuxt-link to='/auth'><b style="color: #666;">注册</b></nuxt-link></p>
        
        <p v-show="this.auth.name" @click='slide'>{{ this.auth.name }} &nbsp&nbsp<Icon type="ios-arrow-down" /></p>
        <div class="user_info" v-show="this.auth.name">
           <nuxt-link style="margin: 0;width: 0;height: 0;" :to="{path:'/personal/list/center'}">
            <span style="position: absolute;top: -70px;left: 26px;">{{ this.auth.name }}</span>
          </nuxt-link>
          <button @click="quit">退出</button>
          <!-- 资方 -->
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

          <!-- 交易师 -->
          <nuxt-link to='/personal/list' v-show="this.auth.identity==1||this.auth.identity==3">
            <img src="@/assets/img/header_icon1.png" alt="">
            <span>发布项目管理</span>
            </nuxt-link>
          <nuxt-link to='/personal/list/public_j' v-show="this.auth.identity==1||this.auth.identity==3">
            <img src="@/assets/img/header_icon2.png" alt="">
            <span>我要发布项目</span>
          </nuxt-link>
          <nuxt-link class="mr" to='/personal/list/follow' v-show="this.auth.identity==1||this.auth.identity==3">
            <img src="@/assets/img/header_icon3.png" alt="">
            <span>关注项目管理</span>
          </nuxt-link>
        </div>
      </div>
      <div>
        <img :src="image" alt="地金网" class="logo">
        <div class="changeCity">
          <span>构建以媒体为入口的房地产一站式投融服务平台</span><br>
          <span>总站：<i @click="select">[ 切换城市 ]</i></span>
        </div>
        <input type="text" name="search">
        <a href="javascript:;"></a>
        <img src="@/assets/img/searchinput.png" alt="搜索" class="searchinput">
      </div>
      <ul>
        <a href="javascript:;" v-for='(item,index) in introduce' style="float: left;">
          <li><nuxt-link :to="{path:item.titles,query:{id:0}}">{{ item.title }}</nuxt-link></li>
          <li><nuxt-link :to="{path:item.titles,query:{id:1}}">{{ item.titleOne }}</nuxt-link></li>
          <li><nuxt-link :to="{path:item.titles,query:{id:2}}">{{ item.titleTwo }}</nuxt-link></li>
        </a>
        <img src="@/assets/img/logo2.png" alt="地金网">
      </ul>
    </div>
  </div>
</template>
<script>
// import DJ from '../../api/dijinquan'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
  inject:[
    'reload'
  ],
  data(){
    return {
      
    }
  },
  props:{
    introduce:null,
    image:null
  },
  watch:{

  },
  computed:{
    ...mapGetters([
      'auth'
    ])
  },
  methods:{
    ...mapMutations({
      show_modal: 'SHOW_MODAL',
      show_auth: 'SHOW_AUTH',
      set_name:'SET_NAME',
      set_uid:'SET_UID',
      set_identity:'SET_IDENTITY',
      set_phone:'SET_PHONE',
      set_message:'SET_MESSAGE',
      show_citySelect:'SHOW_CITYSELECT'
    }),
    quit(){
      this.set_name(''),
      this.set_uid(''),
      this.set_identity('')
      this.set_phone('')
      this.set_message('')
      this.show_modal('您已成功退出')
      this.reload()
    },
    select(){
      this.show_citySelect()
    },
    slide(){
      if($('.user_info').height()>0){
        $('.ivu-icon').transition({rotate: '-180deg'})
        $('.user_info').transition({height:'0px'},'snap')
      }else{
        $('.ivu-icon').transition({rotate: '180deg'})
        $('.user_info').transition({height:'auto'},'snap')
      }
    }
  },
  created(){
  },
  mounted(){
  }
}
</script>
<style>
@import '@/assets/css/iview.css';
.mr{
  margin-top: 30px!important;
  margin-bottom: 30px;
}
</style>
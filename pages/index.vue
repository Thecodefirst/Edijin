<template>
  <div class="home">
    <homeCity v-show='active.show_homeCity' @surecity='concity'></homeCity>
    <div>
      <Header :introduce = 'introduce.list1' :image = 'StaticFigure.list5'></Header>
      <Sidetool></Sidetool>
      <div v-swiper:mySwiper="swiperOption" class="swiperB"> 
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in sowingMap.list" :key="index">
            <img :src="item.picture">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="main_container">
        <div class="province">
          <span>省级站</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>

          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>

          <span class="second">城市站</span>
          <span>北京</span>
          <span>北京</span>
          <span>北京</span>
          <i>| 招募加盟</i>
        </div>
        <div class="horse_race_lamp">
          <b>动态数据：</b>
          <div class="wrap">
            <p>[ 1大宗——项目交易 ] : 住宅xxx个、酒店式xxx个、商铺xxx个、办公xxx个、酒店xxx个、厂房xxx个、土地（含在建工程）xxx个、不良xxx个、物流xxx个、产业小镇xxx个
              其它xxx个；
            </p>
            <p>[ 2大宗——项目交易 ] : 住宅xxx个、酒店式xxx个、商铺xxx个、办公xxx个、酒店xxx个、厂房xxx个、土地（含在建工程）xxx个、不良xxx个、物流xxx个、产业小镇xxx个
              其它xxx个；
            </p>
            <p>[ 3大宗——项目交易 ] : 住宅xxx个、酒店式xxx个、商铺xxx个、办公xxx个、酒店xxx个、厂房xxx个、土地（含在建工程）xxx个、不良xxx个、物流xxx个、产业小镇xxx个
              其它xxx个；
            </p>
            <p>[ 1大宗——项目交易 ] : 住宅xxx个、酒店式xxx个、商铺xxx个、办公xxx个、酒店xxx个、厂房xxx个、土地（含在建工程）xxx个、不良xxx个、物流xxx个、产业小镇xxx个
              其它xxx个；
            </p>
            <p>[ 2大宗——项目交易 ] : 住宅xxx个、酒店式xxx个、商铺xxx个、办公xxx个、酒店xxx个、厂房xxx个、土地（含在建工程）xxx个、不良xxx个、物流xxx个、产业小镇xxx个
              其它xxx个；
            </p>
            <p>[ 3大宗——项目交易 ] : 住宅xxx个、酒店式xxx个、商铺xxx个、办公xxx个、酒店xxx个、厂房xxx个、土地（含在建工程）xxx个、不良xxx个、物流xxx个、产业小镇xxx个
              其它xxx个；
            </p>
          </div>
        </div>
        <div class="fullscreen_line"></div>
        <div class="subswiper">
          <div class="subswiper_left">
               
            <div v-swiper:mySwiper1="swiperOption1"> 
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img :src="sowingMap.list2[0].picture" class="a">
                  <div class="s">
                    <img :src="sowingMap.list2[1].picture">
                    <img :src="sowingMap.list2[2].picture">
                  </div>
                </div>
                <div class="swiper-slide">
                    <img :src="sowingMap.list2[3].picture" class="a">
                    <div class="s">
                      <img :src="sowingMap.list2[4].picture">
                      <img :src="sowingMap.list2[5].picture">
                    </div>
                  </div>
              </div>
              <b class="next">></b>
              <b class="prev"><</b>
              <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
          </div>
          <div class="subswiper_right">
            <img :src="StaticFigure.list7">
            <img :src="StaticFigure.list8">
            <img :src="advertisingPicture.djwAdvertisingPicture2.picture">
          </div>
        </div>

        <div class="horselamp">
          <img src="@/assets/img/horse.png" alt="地产股市，地产财经" class="horsea">
          <div>
            <div class="sc_horse">
              <ul class="horseList">
                <li v-for='item in homePageIndex.crawlData.djwCrawlData'>
                  <span>{{ item.name }}</span>
                  <span>{{ item.price }}</span>
                  <span v-show="parseFloat(item.percent) < 0" class="down"> ↓ {{ item.percent }}</span>
                  <span v-show="parseFloat(item.percent) >  0" class="up"> ↑ {{ item.percent }}</span>
                  <span v-show="item.millionPrice < 0" class="down"> ↓ {{ item.millionPrice }}</span>
                  <span v-show="item.millionPrice > 0" class="up"> ↑ {{ item.millionPrice }}</span>
                </li>
              </ul>
            </div>
            <div class="mt">
              <p>·&nbsp今年来调控已超90次 热点地区继续加码</p>
              <p>·&nbsp今年来调控已超90次 热点地区继续加码</p>
              <p>·&nbsp今年来调控已超90次 热点地区继续加码</p>
            </div>
          </div>
        </div>
        <img src="@/assets/img/point.png" alt="重点项目推荐" class="point">
        <div v-swiper:mySwiper2="swiperOption2" id="swiperC"> 
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                  <div v-for ='(item,index) in homePageIndex.IndexkeyProjects.list[0].dtpList' :key="index">
                    <nuxt-link :to="{path: '/dazong/detail',query:{ id: item.id,nav:2 }}">
                      <img :src="item.picture">
                      <p>{{ item.title }}</p>
                    </nuxt-link>
                  </div>
              </div>
              <div class="swiper-slide">
                 <div v-for='(item,index) in homePageIndex.IndexkeyProjects.list[1].dtpList' :key="index">
                    <nuxt-link :to="{path: '/dazong/detail',query:{ id: item.id,nav:2 }}">
                      <img :src="item.picture">
                      <p>{{ item.title }}</p>
                    </nuxt-link>
                </div>
              </div>
            </div>
            <b class="next">></b>
            <b class="prev"><</b>
        </div>
      <div class="content">
        <div class="left">
          <img src="@/assets/img/news_top.png" alt="新闻头条" class="news_top">
          <div class="words">
            <nuxt-link :to="{path:'/kuaibao/detail',query:{actical:item.id,nav:item.djwType.id}}" v-for='(item,index) in (homePageIndexTwo.typeNewsRecommended.list1).slice(0,2)'> <p>{{ item.title }}</p></nuxt-link>
              <div>
                <ul class="left">
                  <nuxt-link :to="{path:'/kuaibao/detail',query:{actical:item.id,nav:item.djwType.id}}" v-for="(item,index) in (homePageIndexTwo.typeNewsRecommended.list1).slice(2,5)">
                     <li>{{ item.title }}</li>
                  </nuxt-link>
                </ul>
                <ul class="right">
                  <nuxt-link :to="{path:'/kuaibao/detail',query:{actical:item.id,nav:item.djwType.id}}" v-for='(item,index) in (homePageIndexTwo.typeNewsRecommended.list1).slice(5,8)'>
                    <li>{{ item.title }}</li>
                  </nuxt-link>
                </ul>
              </div>
          </div>
          <img :src="advertisingPicture.djwAdvertisingPicture3.picture" alt="快速找到合适资方" class="">
          <!-- ________________ TAB 大宗_________________ -->
          <div class="header_title">
            <p>大宗</p>
            <p>全国 | <i @click="change">切换</i></p>
          </div>
          <div class="switch pointer">
            <p :class="choose_dz.type==1?'act':''" @click="choose_dz.type='1';choose_dz.state='' ">项目交易</p>
            <p :class="choose_dz.type==2?'act':''" @click="choose_dz.type='2';choose_dz.state='' ">金主求购</p>
            <div>
              <span v-for="(item,index) in homePageIndex.statistical.list" :key="index" @click="choose_dz.state = item.name+''" class="pointer">{{ item.name }}</span>
            </div>
          </div>
          <ul class="list">
            <li v-for="(item,index) in indexDazong.list1" :key='index'>
              <span>【{{ item.transferId }}】&nbsp</span>
              <p>{{ item.title }}</p>
              <b>{{ item.information }}</b>
            </li>
            <i>查看更多 ></i>
          </ul>
          <!-- __________________TAB END_____________ -->
          <!-- ________________ TAB 金主直通车_________________ -->

          <div class="header_title">
            <p>金主直通车</p>
            <p class="more">更多 ></p>
          </div>

          <div v-swiper:mySwiper3="swiperOption2" id="swiperd"> 
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in homePageIndexTwo.consultant.list">
                <nuxt-link :to="{path:'/',query:{id:item.id}}"><img :src="item.financingPicture"></nuxt-link>
                <i>{{ item.financingName }}</i>
                <span>推荐项目</span>
              </div>
            </div>
            <b class="next nextd">></b>
            <b class="prev prevd"><</b>
          </div>

          <div class="header_title">
            <p>找钱</p>
            <p>全国 | 切换</p>
          </div>   
          <div class="switch pointer">
            <p :class="choose_zq.type==1?'act':''" @click="choose_zq.type='1';choose_zq.state='' ">项目融资</p>
            <p :class="choose_zq.type==2?'act':''" @click="choose_zq.type='2';choose_zq.state='' ">优选资金</p>
            <div>
              <span v-show="choose_zq.type==1" v-for="(item,index) in homePageIndex.statistical.bobies" class="pointer" @click="choose_zq.state = item.name+''">{{ item.name }}</span>
              <span v-show="choose_zq.type==2" v-for="(item,index) in homePageIndex.statistical.funding" class="pointer" @click="choose_zq.state = item.name+''" >{{ item.name }}</span>
            </div>
          </div>
          <ul class="list">
            <li v-show="choose_zq.type==1" v-for="(item,index) in indexZhaoQian.list1" :key='index'>
              <span>【{{ item.financeBody }}】&nbsp</span>
              <p>{{ item.title }}</p>
              <b>{{ item.information }}</b>
            </li>
            <li v-show="choose_zq.type==2" v-for="(item,index) in indexZhaoQian.list1">
              <span>【{{ item.funding }}】&nbsp</span>
              <p>{{ item.title }}</p>
              <b>发布中</b>
            </li>
            <i>查看更多 ></i>
          </ul>
          <!-- __________________TAB END_____________ -->
           <div class="swiper-container" id="swipere">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for= '(item,index) in indexPicture.list2' :key="index">
                <img :src="item.picture">
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- __________________TAB 拿地_____________ -->

          <div class="header_title">
            <p>拿地</p>
            <p>全国 | 切换</p>
          </div>   
          <div class="switch">
            <p :class="choose_nd.type==1?'act':''" @click="choose_nd.type='1'">供土地</p>
            <p :class="choose_nd.type==2?'act':''" @click="choose_nd.type='2'">求土地</p>
            <div>
              <span v-for="(item,index) in homePageIndex.statistical.lands" >{{ item.name }}</span>
            </div>
          </div>
          <ul class="list">
            <li v-show="choose_nd.type==1" v-for="(item,index) in indexNaDi.list1" :key='index'>
              <span>【{{ item.land }}】&nbsp</span>
              <p>{{ item.title }}</p>
              <b>{{ item.information }}</b>
            </li>
            <li v-show="choose_nd.type==2" v-for="(item,index) in indexNaDi.list1">
              <span>【{{ item.land }}】&nbsp</span>
              <p>{{ item.title }}</p>
              <b>发布中</b>
            </li>
            <i>查看更多 ></i>
          </ul>

          <!-- __________________TAB END_____________ -->
          <!-- __________________TAB 快报_____________ -->

          <div class="header_title">
            <p>快报</p>
             <p class="more">更多 ></p>
          </div>   
          <ul class="kuaibao">
            <li v-for="(item,index) in homePageIndexTwo.typeNews.list1">
              <img :src="item.picture">
              <div>
                <h1>{{ item.title }}</h1>
                <p id="clamp">{{ item.subtitle }}</p>
                <div><b>{{ item.djwType.type }}</b><b>{{ item.articleSource }}</b><b>{{ item.createDate }}</b></div>
              </div>
            </li>
          </ul>
          <!-- __________________TAB END_____________ -->
          <img :src="advertisingPicture.djwAdvertisingPicture7.picture">
        </div>
        <div class="right">
          <div class="swiper-container" v-swiper:mySwiper4="swiperOption" id="swiperf">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in sowingMap.list3"><img :src="item.picture"></div>
                <!-- 跳转快报没有底色缺参数 -->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div> 
          <img src="@/assets/img/home_nadi.png" alt="拿地">    
          <div class="home_tpbb"><span>土拍预告</span><span>更多 ></span></div>  
          <div class="home_tpbb_sub" v-for="(item,index) in homePageIndexTwo.indexLandTrailer.list1">
            <nuxt-link :to="{path:'/',query:{id:item.id}}">
              <p>{{ item.title }}</p>
              <i>{{ item.createDate }}</i>
            </nuxt-link>
          </div>
          <div class="home_tpbb"><span>土拍直播</span><span>更多 ></span></div>
          <!-- <div class="home_tpzb_sub">
            <b>直播中</b>
            <i>总站 | 2108-04-21</i>
            <br>
            <em>【14:00直播】活动直播丨桃源小镇春饼大典</em>
          </div>
          <div class="home_tpzb_sub">
            <b>直播中</b>
            <i>总站 | 2108-04-21</i>
            <br>
            <em>【14:00直播】活动直播丨桃源小镇春饼大典</em>
          </div>
          <div class="home_tpzb_sub">
            <b>直播中</b>
            <i>总站 | 2108-04-21</i>
            <br>
            <em>【14:00直播】活动直播丨桃源小镇春饼大典</em>
          </div> -->
          <img src="@/assets/img/jinzhusignup.png" alt="金主入驻" class="jingzhu_signup">
          <img src="@/assets/img/fangfinace.png" alt="房地产供应链金融">
          <div class="icon">
              <p v-for='(item,index) in homePageIndex.gradient.list' :key="index">
                <nuxt-link :to="{path: '/',query:{ id: item.id }}">
                  <img v-show='gradientHover !== index' :src="item.pictureOne" @mouseover="gradientHover = index">
                  <img v-show='gradientHover == index' :src="item.pictureTwo" @mouseleave ="gradientHover = -1">
                  <span>{{ item.name }}</span>
                </nuxt-link>
              </p>
            <!-- <p><img src="/icon/b.png"><span>商票保理</span></p>
            <p><img src="/icon/c.png"><span>应收款质押</span></p>
            <p><img src="/icon/d.png"><span>资产证券化REITS</span></p>
            <p><img src="/icon/e.png"><span>企业链</span></p> -->
          </div>
          <div class="picturelist">
            <img :src="advertisingPicture.djwAdvertisingPicture4.picture">
            <img :src="advertisingPicture.djwAdvertisingPicture5.picture">
            <img :src="advertisingPicture.djwAdvertisingPicture6.picture">
          </div>
          <div class="left_djq">
            <img src="@/assets/img/left_dijinquan.png" alt="地金圈">
            <a href="javascript:;"></a>
          </div>
          <ul class="left_djq">
            <li>
              <nuxt-link :to="{path: '/',query:{ id: homePageIndex.djwDjCircleHomePage.typeList[0].id }}">
                <div>
                  <img :src="homePageIndex.djwDjCircleHomePage.typeList[0].hover">
                  <p>
                    <b>{{ homePageIndex.djwDjCircleHomePage.typeList[0].text }}</b>
                  </p>
              </div>
              </nuxt-link>
              <p class="l"><span>【线下活动】</span>为什么你这么容易被种草么你这么容易被种草么你这么容易被种草？其实“种草”这是</p>
              <p class="l"><span>【线下活动】</span>为什么你这么容易被种草么你这么容易被种草么你这么容易被种草？其实“种草”这是</p>
            </li>
            <li>
              <nuxt-link :to="{path: '/',query:{ id: homePageIndex.djwDjCircleHomePage.typeList[1].id }}">
                <div>
                  <img :src="homePageIndex.djwDjCircleHomePage.typeList[1].hover">
                  <p>
                    <b>{{ homePageIndex.djwDjCircleHomePage.typeList[1].text }}</b>
                  </p>
              </div>
              </nuxt-link>
              <p class="l"><span>【线下活动】</span>为什么你这么容易被种草么你这么容易被种草么你这么容易被种草？其实“种草”这是</p>
              <p class="l"><span>【线下活动】</span>为什么你这么容易被种草么你这么容易被种草么你这么容易被种草？其实“种草”这是</p>
            </li>
            <li>
              <nuxt-link :to="{path: '/',query:{ id: homePageIndex.djwDjCircleHomePage.typeList[2].id }}">
                <div>
                  <img :src="homePageIndex.djwDjCircleHomePage.typeList[2].hover">
                  <p>
                    <b>{{ homePageIndex.djwDjCircleHomePage.typeList[2].text }}</b>
                  </p>
              </div>
              </nuxt-link>
              <p class="l"><span>【线下活动】</span>为什么你这么容易被种草么你这么容易被种草么你这么容易被种草？其实“种草”这是</p>
              <p class="l"><span>【线下活动】</span>为什么你这么容易被种草么你这么容易被种草么你这么容易被种草？其实“种草”这是</p>
            </li>
          </ul>
          <img :src="homePageIndexTwo.livePicture.picture">
          <div class="home_tpbb huodong"><span>活动直播</span><span>更多 ></span></div>
          <div class="home_tpzb_sub" v-for="(item,index) in homePageIndexTwo.LiveIndex.list">
            <!-- <b>直播中</b> -->
            <b v-show="item.state==2" style="background:#999;color:#fff;">已结束</b>
            <i>{{ item.name }} | {{ item.startTime }}</i>
            <br>
            <nuxt-link :to="{path:'/',query:{id:item.id}}"><em style="left:15px">{{ item.title }}</em></nuxt-link>
          </div>
        </div>
      </div>
      <div class="pinpai">
          <span>品牌</span>
      </div>
      <nuxt-link :to="{path: '/',query:{ id: homePageIndex.djwDjSpecialHomePage.typeList[0].id }}">
        <div class="goldenzhuan"><span>金砖论坛</span><b>更多 ></b></div>
      </nuxt-link>
      <nuxt-link :to="{path: '/',query:{ id: homePageIndex.djwDjSpecialHomePage.typeList[1].id }}">
        <div class="goldenzhuan center"><span>Leader Club</span><b>更多 ></b></div>
      </nuxt-link>
      <nuxt-link :to="{path: '/',query:{ id: homePageIndex.djwDjSpecialHomePage.typeList[2].id }}">
        <div class="goldenzhuan"><span>China Now</span><b>更多 ></b></div>
      </nuxt-link>
      <ul class="pinpai">
        <li v-for='(item,index) in homePageIndex.djwDjSpecialHomePage.typeList[0].detail' :key="index">
          <nuxt-link :to="{path: '/',query:{ id:item.detailId }}">
            <img :src="item.img">
          <p>{{ item.dis}} {{ item.time }}</p>
          </nuxt-link>
        </li>
      </ul>
      <ul class="pinpai">
        <li v-for='(item,index) in homePageIndex.djwDjSpecialHomePage.typeList[1].detail' :key="index">
          <nuxt-link :to="{path: '/',query:{ id:item.detailId }}">
            <img :src="item.img">
          <p>{{ item.dis}} {{ item.time }}</p>
          </nuxt-link>
        </li>
      </ul>
      <ul class="pinpai">
        <li v-for='(item,index) in homePageIndex.djwDjSpecialHomePage.typeList[2].detail' :key="index">
          <nuxt-link :to="{path: '/',query:{ id:item.detailId }}">
            <img :src="item.img">
          <p>{{ item.dis}} {{ item.time }}</p>
          </nuxt-link>
        </li>
      </ul>
      <div class="goldenzhuan b"><span>杂志封面秀</span><b>更多 ></b></div>
      <div class="swiperlast">
        <div class="swiper-container" v-swiper:mySwiper5="swiperOption2" id="swiperlast">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in homePageIndex.textIntroduce.list5"><img :src="item.picture"><p>{{item.title}}</p></div>
          </div>
        </div>
        <img src="@/assets/img/nx.png" class="nx next">
        <img src="@/assets/img/pr.png" class="pr prev">
      </div>
      <!-- <img src="@/assets/img/zhitong.png" class="zhitong"> -->
      <!-- <div class="swiper-container" id="swiperend">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/img/ft_baner.png"></div>
            <div class="swiper-slide"><img src="@/assets/img/ft_baner.png"></div>
            <div class="swiper-slide"><img src="@/assets/img/ft_baner.png"></div>
          </div>
          <b class="next endn">></b>
          <b class="prev endp"><</b>
        </div> -->
        <div class="friendship">
          <span class="pointer" v-for='(item,index) in homePageIndex.advertising.list1' :key="index" @click='advertise(item.id)'>{{ item.institutionsName }}</span>
        </div>
        <div class="fr_content">
          <span v-for="(item,index) in findInstitutions">{{ item.institutionalUnits }}</span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/header.vue'
import Footer from '~/components/footer.vue'
import Sidetool from '~/components/sidetool.vue'
import homeCity from '~/components/changeHomeCity.vue'
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
import Home from '../api/home'
export default {
  inject:[
    'reload'
  ],
  components: {
    Header,
    Footer,
    Sidetool,
    homeCity,
  },
  data(){
    return {
      horse:false,
      choose_dz:{
        type:'1',
        state:'',
      },
      choose_nd:{
        type:'1',
        state:'',
      },
      choose_zq:{
        type:'1',
        state:'',
      },
      timer:null,
      title:'999',
      Keywords:'sdfsdfs',
      Description:'sadfasdfasdfasdfasdf',
      gradientHover:null,
      findInstitutions:null,
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
      },
      swiperOption1:{
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      },
      swiperOption2: {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.next',
          prevEl: '.prev',
        },
      },
    }
  },
  computed:{
    ...mapState({
      auth:'auth',
      active:'active'
    }),
    ...mapGetters([
      // 'auth'
    ])
  },
  watch:{
		choose_dz:{
			handler(newValue,oldValue){
				Home.indexSelectedOne(this.choose_dz).then((res)=>{
          this.indexDazong.list1 = res.data.list1
        })
			},
      deep:true
		},
		choose_zq:{
			handler(newValue,oldValue){
				Home.indexSelectedThree(this.choose_zq).then((res)=>{
          this.indexZhaoQian.list1 = res.data.list1
        })
			},
      deep:true
    },
    choose_nd:{
			handler(newValue,oldValue){
				Home.indexSelectedTwo(this.choose_nd).then((res)=>{
          this.indexNaDi.list1 = res.data.list1
        })
      },
      deep:true
      
		},
	},
  async fetch ({store,data}) {
    await store.dispatch('get_footerbar')
  },
  async asyncData (context) {
    // console.log(context.req.headers)
    // console.log(JSON.stringify(context.store.state.post.dazong))
    let [ 
      textIntroduce,  
      livePicture,
      indexPicture,
      homePageIndex,
      StaticFigure,
      indexDazong,
      indexZhaoQian,
      indexNaDi,
      sowingMap,
      homePageIndexTwo,
      advertisingPicture,
      findInstitutions,
    ]
    = await Promise.all([
        Home.textIntroduce(),
        Home.livePicture(),
        Home.indexPicture(),
        Home.homePageIndex({'oid':'59105c9ff8a44c39a6486a20eeffeb5c'}),
        Home.StaticFigure(),
        Home.indexDaZong(JSON.stringify({"type":"1"})),
        Home.indexZhaoQian(JSON.stringify({"type":"1"})),
        Home.indexNaDi(JSON.stringify({"type":"1"})),
        Home.sowingMap(JSON.stringify({oid:context.store.state.auth.oid+''})),
        Home.homePageIndexTwo(JSON.stringify({
          ...(context.store.state.auth),
          "type":"1",
          "terminal":"1",
          "total":"0",
          "count":"8",
          "recommended":"1",
          "topIndexLandTrailer":"1",
          "topTypeNews":"1",
          "topConsultant":"1"
        })),
        Home.advertisingPicture({
          "oid":context.store.state.auth.oid+''
        }),
        // Home.findInstitutions()
      ])
    return { 
      introduce: textIntroduce.data,
      livePicture: livePicture.data,
      indexPicture: indexPicture.data,
      homePageIndex: homePageIndex.data,
      StaticFigure: StaticFigure.data.mapList[0],
      indexDazong:  indexDazong.data,
      indexZhaoQian: indexZhaoQian.data,
      indexNaDi: indexNaDi.data,
      sowingMap: sowingMap.data,
      homePageIndexTwo :homePageIndexTwo.data,
      advertisingPicture:advertisingPicture.data,
    }
  },
  head(){
    return{
      title:this.title,
      meta: [
        { hid: 'description', name: this.Keywords, content: this.Description }
      ]
    }
  },
  methods:{
    ...mapMutations({
      set_name:'SET_NAME',
      set_identity:'SET_IDENTITY',
      set_phone:'SET_PHONE',
      set_message:'SET_MESSAGE',
      show_homeCity:'SHOW_HOMECITY'
    }),
    async advertise(id){
      let res =  await Home.findInstitutions({
        'id':id + ''
      })
      this.findInstitutions = res.data.list
    },
    change(){
      this.show_homeCity()
    },
    concity(a){
      console.log(a)
		},
  },
  mounted(){

    // this.$cookies.set('city', '666', {
    //   path: '/',
    //   // maxAge: 60 * 60 * 24 * 7
    // })

    var module = document.querySelectorAll("#clamp");
    module.forEach((e,i)=>{
        $clamp(e, {clamp: 2});
    })
    document.getElementsByTagName("body")[0].className="";
      // ------------------------跑马灯----------------------- 
      // var a = 0;
      // function ss(){
      //   a+=60;
      //   var y = $('.wrap').css('transform').replace(/[^0-9\-,]/g,'').split(',').pop()
      //   $('.wrap').transition({y:-a},500,'ease')
      //   if(Math.abs(y)==300){
      //     $('.wrap').transition({y:'0'})
      //     a = 0
      //   }
      // }
      // setInterval(function(){
      //   ss()
      // },5000)

  },
  beforeRouteUpdate (to, from, next) {
		document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.getElementsByTagName("body")[0].className="";
    if(this.auth.uid){
      Home.PersonalInformation(JSON.stringify({"uid":this.auth.uid}))
      .then((res)=>{
        // console.log(res)
        this.set_name(res.data.name)
        this.set_identity(res.data.identity)
        this.set_phone(res.data.account)
        if(res.data.identity==0){
          this.set_message(res.data.introduce)
        }else if(res.data.identity==1){
          this.set_message(res.data.introduces)
        }
  
      })
    }
		next()
  },
  created(){
    if(this.auth.uid){
      Home.PersonalInformation(JSON.stringify({"uid":this.auth.uid}))
      .then((res)=>{
        // console.log(res)
        this.set_name(res.data.name)
        this.set_identity(res.data.identity)
        this.set_phone(res.data.account)
        if(res.data.identity==0){
          this.set_message(res.data.introduce)
        }else if(res.data.identity==1){
          this.set_message(res.data.introduces)
        }
  
      })
    }
  }
}

</script>
<style>
.horseList {
  -webkit-animation:horse 50s linear 0s infinite;
}
@-webkit-keyframes horse
{
    0%   {left:0px;top:0px}
    47%  {left:-3600px;top:0px;}
    48%  {left:-3600px;top:0px;}
    49%  {left:-3600px;top:0px;}
    50%  {left:-3600px;top:0px;}
    100% {left:0px;top:0px;}
}
div.swiperlast{
  position:relative;
}
div.swiperlast img.nx {
    position: absolute;
    left: 0px;
    top: 35%;
}
div.swiperlast img.pr{
  position: absolute;
    right: 0px;
    top: 35%;
}
</style>


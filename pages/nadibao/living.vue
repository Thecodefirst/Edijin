<template>
    <div class="living">
        <Headersub/>
        <img src="@/assets/img/d_swiper.jpg" class="banner_pic">
        <div class="main">
            <div class="pinpai_common pointer">
                <span>土拍预告</span>
                <span class="choose">土拍直播</span>
            </div>
            <div class="title">
                <p>【10:00直播】杭州富阳区出让两宗宅地及一宗租赁宅地，总起价47亿元</p>
                <p>总出让面积212917m²，总起价470050万元，楼面均价9325元/m²。<span>浏览量：999</span></p>
                <p>地块介绍：这里是一条相关新闻链接</p>
            </div>
            <div class="live_view">
                <div class="left">
                    <img src="@/assets/img/living.png" alt="">
                    <div>
                        <span><i></i></span>
                        <p>杭州富阳区出让两宗宅地及一宗租赁</p>
                    </div>
                    <div>
                        <span class="green"><i></i></span>
                        <p>杭州富阳区出让两宗宅地及一宗租赁</p>
                    </div>
                    <div>
                        <span class="grey"><i></i></span>
                        <p>杭州富阳区出让两宗宅地及一宗租赁</p>
                    </div>
                </div>
                <div class="middle">
                    <div class="h pointer">
                        <p :class="choose==1?'choose':''"  @click="choose=1">文字直播</p>
                        <p :class="choose==2?'choose':''" @click="choose=2">地块分析</p>
                    </div>
                    <div class="view" v-show="choose==1">
                        <p>金桥北路与高桥西路交叉口东北侧<span>直播中</span></p>
                        <div class="t_head">
                            <span>时间</span>
                            <span>轮次</span>
                            <span>号码</span>
                            <span>报价(万)</span>
                            <span>楼面价<br>(元/平方米)</span>
                            <span>保本房价</span>
                            <span>溢价率</span>
                        </div>
                        <div class="list">
                            <ul>
                                <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                 <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                                 <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>

                                 <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li> <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li> <li>
                                    <span>11</span>
                                    <span>22</span>
                                    <span>33</span>
                                    <span>44</span>
                                    <span>55</span>
                                    <span>66</span>
                                    <span>77</span>
                                </li>
                                <li>
                                    注：保障房面积6100平方米
                                </li>
                            </ul>
                        </div>
                        <p class="bottom">说明：</p> 
                    </div>
                    <div class="analyse" v-show="choose==2">
                        sfasdfdfsd
                    </div>
                </div>
                <div class="right">dfdf</div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Headersub from '~/components/headersub.vue'
import Footer from '~/components/footer.vue'
export default {
    data(){
        return {
            choose:1,
        }
    },
    components:{
        Headersub,
        Footer,
    },
}
</script>

<style scoped>
.pinpai_common{
    margin: 30px 0 60px 0!important;
}
.list::-webkit-scrollbar {
    width: 6px;
    background-color: #eee;
}

.list::-webkit-scrollbar-track {
    background-color: #eee;
}

.list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #999;
}
</style>

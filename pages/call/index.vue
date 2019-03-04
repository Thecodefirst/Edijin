<template>
    <div class="dijin_baby">
        <Headersub/>
        <img src="@/assets/img/call.png" alt="" class="banner">
        <div class="main">
            <div class="call_container">
                <h1>山东某企业出资5000万寻金矿企业山东某企业出资5000万寻金山东北</h1>
                <span><i>*</i>留言内容</span>
                <textarea placeholder="不超过200字..."></textarea>
                <div class="datepicker">
                    <img src="@/assets/img/datepicker.png" alt="" >
                    <p @click="trigger">我希望在<b>{{ this.datepicker }}</b>前得到回复</p>
                    <Col span="12">
                        <DatePicker type="date" transfer  placeholder="Select date" @on-change="handleChange"></DatePicker>
                    </Col>
                </div>
            </div>
            <div class="call_container pb_50">
                <h2>联系方式<span>( <i>登陆</i>免填写，持续关注该项目/资金 )</span></h2>
                <div class="inp">
                    <label><i>*</i>姓名</label>
                    <input type="text">
                </div>
                <div class="inp">
                    <label>公司</label>
                    <input type="text">
                </div>
                <div class="inp">
                    <label><i>*</i>手机号</label>
                    <input type="text">
                </div>
                <div class="inp">
                    <label>微信号</label>
                    <input type="text">
                </div>
            </div>
            <button>发送留言</button>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Headersub from '~/components/headersub.vue';
import Footer from '~/components/footer.vue';
export default {
    data(){
        return {
            datepicker:'2018-03-01',
        }
    },
    components:{
        Headersub,
        Footer
    },
    methods:{
        trigger(){
            $('.ivu-date-picker input').trigger('click')
        },
        handleChange (date) {
            this.datepicker = date;
        },
    },
    mounted(){
        this.datepicker = moment().format('YYYY-MM-DD')
    }
}
</script>
<style>
@import '@/assets/css/iview.css';
.ivu-col-span-12 {
    display: block;
    width: 50%;
    position: absolute;
    top: 2px;
    border: none;
    z-index: -1;
}
.pb_50{
    padding-bottom: 50px;
}
</style>



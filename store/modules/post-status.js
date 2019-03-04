





// 这篇老长了。。。

// 我也不想这么写。。。

// 谁牛逼谁来优化一下吧。。。































import * as types from '../mutation-types'
const state = {
    dazong:{
        push:{
            type:'1',
            yanxuan:'',
            qiugou:'',
            shuxing:'',
            province:'',
            city:'',
            amount:'',
            land:'',
            funding:'', 
            orVisible:'',
            theFinancing:'',
            pageIndex:'1',
            count:'10'
        },
        pushb:{
            type:'1',
            yanxuan:'',
            qiugou:'',
            shuxing:'',
            province:'',
            city:'',
            amount:'',
            land:'',
            funding:'',
            orVisible:'',
            theFinancing:'',
            pageIndex:'1',
            count:'10',
            line:'',
        }
    },
    nadi:{
        push:{
            type:'2',
            yanxuan:'',
            qiugou:'',
            shuxing:'',
            province:'',
            city:'',
            amount:'',
            land:'',
            funding:'', 
            orVisible:'',
            theFinancing:'',
            pageIndex:'1',
            count:'10'
        },
        pushb:{
            type:'2',
            yanxuan:'',
            qiugou:'',
            shuxing:'',
            province:'',
            city:'',
            amount:'',
            land:'',
            funding:'', 
            orVisible:'',
            theFinancing:'',
            pageIndex:'1',
            count:'10',
            lind:''
        }
    },
    zhaoqian:{
        push:{
            type:'3',
            yanxuan:'',
            qiugou:'',
            shuxing:'',
            province:'',
            city:'',
            amount:'',
            land:'',
            funding:'', 
            orVisible:'',
            theFinancing:'',
            pageIndex:'1',
            count:'10'
        },
        pushb:{
            type:'3',
            yanxuan:'',
            qiugou:'',
            shuxing:'',
            province:'',
            city:'',
            amount:'',
            land:'',
            funding:'', 
            orVisible:'',
            theFinancing:'',
            pageIndex:'1',
            count:'10',
            lind:'',
            way:''
        }
    }
    // page:{
    //     current:'1',
    // },
}
const mutations = {

//       大宗 项目交易


    [types.CHANGE_YANXUAN] (state,data) {
		state.dazong.push.yanxuan = data 
    },
    [types.CHANGE_QIUGOU] (state,data) {
        if(Object.prototype.toString.call(state.dazong.push.qiugou)==='[object String]'){
            state.dazong.push.qiugou = (state.dazong.push.qiugou).split(',')
            if(!state.dazong.push.qiugou.includes(data)){
                (state.dazong.push.qiugou).push(data)
            }else{
                state.dazong.push.qiugou.splice(state.dazong.push.qiugou.indexOf(data),1)
            }
            state.dazong.push.qiugou = (state.dazong.push.qiugou).join(',')
            if(state.dazong.push.qiugou.substr(0,1)===','){
                state.dazong.push.qiugou = state.dazong.push.qiugou.substr(1)
            }
        }
    },
    [types.CHANGE_SHUXING] (state,data) {
		state.dazong.push.shuxing = data 
    },
    [types.CHANGE_AMOUNT] (state,data) {
        if(Object.prototype.toString.call(state.dazong.push.amount)==='[object String]'){
            state.dazong.push.amount = (state.dazong.push.amount).split(',')
            if(!state.dazong.push.amount.includes(data)){
                (state.dazong.push.amount).push(data)
            }else{
                state.dazong.push.amount.splice(state.dazong.push.amount.indexOf(data),1)
            }
            state.dazong.push.amount = (state.dazong.push.amount).join(',')
            if(state.dazong.push.amount.substr(0,1)===','){
                state.dazong.push.amount = state.dazong.push.amount.substr(1)
            }
        }
    },
    [types.CHANGE_PROVINCE] (state,data) {
        state.dazong.push.province = data 
    },
    [types.CHANGE_CITY] (state,data) {
        state.dazong.push.city = data 
    },
    [types.CHANGE_PAGEINDEX] (state,data) {
        state.dazong.push.pageIndex = data 
    },

    //  大宗 金主求购

    [types.CHANGE_P_YANXUAN] (state,data) {
        state.dazong.pushb.yanxuan = data
    },
    [types.CHANGE_P_QIUGOU] (state,data) {
        if(Object.prototype.toString.call(state.dazong.pushb.qiugou)==='[object String]'){
            state.dazong.pushb.qiugou = (state.dazong.pushb.qiugou).split(',')
            if(!state.dazong.pushb.qiugou.includes(data)){
                (state.dazong.pushb.qiugou).push(data)
            }else{
                state.dazong.pushb.qiugou.splice(state.dazong.pushb.qiugou.indexOf(data),1)
            }
            state.dazong.pushb.qiugou = (state.dazong.pushb.qiugou).join(',')
            if(state.dazong.pushb.qiugou.substr(0,1)===','){
                state.dazong.pushb.qiugou = state.dazong.pushb.qiugou.substr(1)
            }
        }
    },
    [types.CHANGE_P_PAGEINDEX] (state,data) {
        state.dazong.pushb.pageIndex = data 
    },
    [types.CHANGE_P_SHUXING] (state,data) {
		state.dazong.pushb.shuxing = data 
    },
    [types.CHANGE_P_LINE] (state,data) {
        if(Object.prototype.toString.call(state.dazong.pushb.line)==='[object String]'){
            state.dazong.pushb.line = (state.dazong.pushb.line).split(',')
            if(!state.dazong.pushb.line.includes(data)){
                (state.dazong.pushb.line).push(data)
            }else{
                state.dazong.pushb.line.splice(state.dazong.pushb.line.indexOf(data),1)
            }
            state.dazong.pushb.line = (state.dazong.pushb.line).join(',')
            if(state.dazong.pushb.line.substr(0,1)===','){
                state.dazong.pushb.line = state.dazong.pushb.line.substr(1)
            }
        } 
    },
    [types.CHANGE_P_AMOUNT] (state,data) {
        if(Object.prototype.toString.call(state.dazong.pushb.amount)==='[object String]'){
            state.dazong.pushb.amount = (state.dazong.pushb.amount).split(',')
            if(!state.dazong.pushb.amount.includes(data)){
                (state.dazong.pushb.amount).push(data)
            }else{
                state.dazong.pushb.amount.splice(state.dazong.pushb.amount.indexOf(data),1)
            }
            state.dazong.pushb.amount = (state.dazong.pushb.amount).join(',')
            if(state.dazong.pushb.amount.substr(0,1)===','){
                state.dazong.pushb.amount = state.dazong.pushb.amount.substr(1)
            }
        }
    },
    [types.CHANGE_P_PROVINCE] (state,data) {
        state.dazong.pushb.province = data 
    },
    [types.CHANGE_P_CITY] (state,data) {
        state.dazong.pushb.city = data 
    },

    // 
    //  拿地 供土地
    // 
    [types.CHANGE_NADI_YANXUAN] (state,data) {
        state.nadi.push.yanxuan = data
    },
    [types.CHANGE_NADI_PAGEINDEX] (state,data) {
        state.nadi.push.pageIndex = data 
    },
    [types.CHAGNE_NADI_FANGSHI] (state,data){
        if(Object.prototype.toString.call(state.nadi.push.land)==='[object String]'){
            state.nadi.push.land = (state.nadi.push.land).split(',')
            if(!state.nadi.push.land.includes(data)){
                (state.nadi.push.land).push(data)
            }else{
                state.nadi.push.land.splice(state.nadi.push.land.indexOf(data),1)
            }
            state.nadi.push.land = (state.nadi.push.land).join(',')
            if(state.nadi.push.land.substr(0,1)===','){
                state.nadi.push.land = state.nadi.push.land.substr(1)
            }
        }
    },
    [types.CHANGE_NADI_PROVINCE] (state,data) {
        state.nadi.push.province = data 
    },
    [types.CHANGE_NADI_CITY] (state,data) {
        state.nadi.push.city = data 
    },


    // 拿地求土地

    [types.CHANGE_P_NADI_YANXUAN] (state,data) {
        state.nadi.pushb.yanxuan = data
    },
    [types.CHANGE_P_NADI_PAGEINDEX] (state,data) {
        state.nadi.pushb.pageIndex = data 
    },
    [types.CHANGE_P_NADI_PROVINCE] (state,data) {
        state.nadi.pushb.province = data 
    },
    [types.CHANGE_P_NADI_CITY] (state,data) {
        state.nadi.pushb.city = data 
    },
    [types.CHAGNE_P_NADI_FANGSHI] (state,data){
        if(Object.prototype.toString.call(state.nadi.pushb.land)==='[object String]'){
            state.nadi.pushb.land = (state.nadi.pushb.land).split(',')
            if(!state.nadi.pushb.land.includes(data)){
                (state.nadi.pushb.land).push(data)
            }else{
                state.nadi.pushb.land.splice(state.nadi.pushb.land.indexOf(data),1)
            }
            state.nadi.pushb.land = (state.nadi.pushb.land).join(',')
            if(state.nadi.pushb.land.substr(0,1)===','){
                state.nadi.pushb.land = state.nadi.pushb.land.substr(1)
            }
        }
    },
    [types.CHAGNE_P_NADI_LIND] (state,data){
        if(Object.prototype.toString.call(state.nadi.pushb.lind)==='[object String]'){
            state.nadi.pushb.lind = (state.nadi.pushb.lind).split(',')
            if(!state.nadi.pushb.lind.includes(data)){
                (state.nadi.pushb.lind).push(data)
            }else{
                state.nadi.pushb.lind.splice(state.nadi.pushb.lind.indexOf(data),1)
            }
            state.nadi.pushb.lind = (state.nadi.pushb.lind).join(',')
            if(state.nadi.pushb.lind.substr(0,1)===','){
                state.nadi.pushb.lind = state.nadi.pushb.lind.substr(1)
            }
        }
    },

    //  找钱项目融资

    [types.CHANGE_Z_YANXUAN] (state,data) {
        state.zhaoqian.push.yanxuan = data
    },
    [types.CHANGE_Z_PAGEINDEX] (state,data) {
        state.zhaoqian.push.pageIndex = data 
    },
    [types.CHANGE_Z_PROVINCE] (state,data) {
        state.zhaoqian.push.province = data 
    },
    [types.CHANGE_Z_CITY] (state,data) {
        state.zhaoqian.push.city = data 
    },
    [types.CHANGE_Z_RONGZI] (state,data) {
        state.zhaoqian.push.funding = data
    },
    [types.CHANGE_Z_JINE] (state,data) {
        state.zhaoqian.push.amount = data
    },
    [types.CHANGE_Z_QIXIAN] (state,data) {
        state.zhaoqian.push.theFinancing = data
    },
    // 
    //  找钱 优选资金
    // 
    [types.CHANGE_R_YANXUAN] (state,data) {
        state.zhaoqian.pushb.yanxuan = data
    },
    [types.CHANGE_R_PAGEINDEX] (state,data) {
        state.zhaoqian.pushb.pageIndex = data 
    },
    [types.CHANGE_R_PROVINCE] (state,data) {
        state.zhaoqian.pushb.province = data 
    },
    [types.CHANGE_R_CITY] (state,data) {
        state.zhaoqian.pushb.city = data 
    },
    [types.CHANGE_R_ZHUTI] (state,data) {
        state.zhaoqian.pushb.funding = data 
    },
    [types.CHANGE_R_GUIMO] (state,data) {
        state.zhaoqian.pushb.amount = data 
    },
    [types.CHANGE_R_GUIHUA] (state,data) {
        if(Object.prototype.toString.call(state.zhaoqian.pushb.lind)==='[object String]'){
            state.zhaoqian.pushb.lind = (state.zhaoqian.pushb.lind).split(',')
            if(!state.zhaoqian.pushb.lind.includes(data)){
                (state.zhaoqian.pushb.lind).push(data)
            }else{
                state.zhaoqian.pushb.lind.splice(state.zhaoqian.pushb.lind.indexOf(data),1)
            }
            state.zhaoqian.pushb.lind = (state.zhaoqian.pushb.lind).join(',')
            if(state.zhaoqian.pushb.lind.substr(0,1)===','){
                state.zhaoqian.pushb.lind = state.zhaoqian.pushb.lind.substr(1)
            }
        }
    },
    [types.CHANGE_R_YEWU] (state,data) {
        if(Object.prototype.toString.call(state.zhaoqian.pushb.way)==='[object String]'){
            state.zhaoqian.pushb.way = (state.zhaoqian.pushb.way).split(',')
            if(!state.zhaoqian.pushb.way.includes(data)){
                (state.zhaoqian.pushb.way).push(data)
            }else{
                state.zhaoqian.pushb.way.splice(state.zhaoqian.pushb.way.indexOf(data),1)
            }
            state.zhaoqian.pushb.way = (state.zhaoqian.pushb.way).join(',')
            if(state.zhaoqian.pushb.way.substr(0,1)===','){
                state.zhaoqian.pushb.way = state.zhaoqian.pushb.way.substr(1)
            }
        }
    },
}
export default {
    state,
    mutations
  }
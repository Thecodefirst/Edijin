import ApiSend from '../api-send'
let dazong = {
    // 筛选配置
    TradingData:function (data) {
        return ApiSend(data,'/api/TradingData')
    },
    soilPaging:function (data) {
        return ApiSend(data,'/api/soilPaging')
    },
    modulAdvertising:function (data) {
        return ApiSend(data,'/api/modulAdvertising')
    },
    keyProjects:function (data) {
        return ApiSend(data,'/api/keyProjects')
    },
    FilterData:function (data) {
        return ApiSend(data,'/api/FilterData')
    },
    listProject:function (data){
        return ApiSend(data,'/api/listProject')
    },
    listOwnerProject:function (data){
        return ApiSend(data,'/api/listOwnerProject')
    },
    tradingProject:function (data){
        return ApiSend(data,'/api/tradingProject')
    },
    FindCity:function (data){
        return ApiSend(data,'/api/FindCity')
    },
    ownerProject:function (data){
        return ApiSend(data,'/api/ownerProject')
    },
};
export default dazong
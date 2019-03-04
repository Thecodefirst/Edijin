import ApiSend from '../api-send'
let push = {
    FilterData:function (data) {
        return ApiSend(data,'/api/FilterData ')
    },
    FindProCity:function (data) {
        return ApiSend(data,'/api/FindProCity ')
    },
    FindCity:function (data){
        return ApiSend(data,'/api/FindCity')
    },
    SaveInformation:function (data){
        return ApiSend(data,'/api/SaveInformation')
    },
    ChangePassword:function (data){
        return ApiSend(data,'/api/ChangePassword')
    },
    OwnerProject:function (data){
        return ApiSend(data,'/api/OwnerProject')
    },
    ProjectManagement:function (data){
        return ApiSend(data,'/api/ProjectManagement')
    },
    attentionTrading:function (data){
        return ApiSend(data,'/api/attentionTrading')
    },
    TradingProject:function (data){
        return ApiSend(data,'/api/TradingProject')
    },
    TradingData:function (data){
        return ApiSend(data,'/api/TradingData')
    },
};
export default push
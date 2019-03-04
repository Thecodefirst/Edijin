import ApiSend from '../api-send'
let nadiDetail = {
    tradingDetailed:function (data) {
        return ApiSend(data,'/api/tradingDetailed')
    },
    modulAdvertising:function (data) {
        return ApiSend(data,'/api/modulAdvertising')
    },
    detailAdvertising:function (data) {
        return ApiSend(data,'/api/detailAdvertising')
    },
    keyProjects:function (data) {
        return ApiSend(data,'/api/keyProjects')
    },
};
export default nadiDetail
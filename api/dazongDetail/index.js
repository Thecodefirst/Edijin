import ApiSend from '../api-send'
let dazongDetail = {
    modulAdvertising:function (data) {
        return ApiSend(data,'/api/modulAdvertising')
    },
    detailAdvertising:function (data) {
        return ApiSend(data,'/api/detailAdvertising')
    },
    keyProjects:function (data) {
        return ApiSend(data,'/api/keyProjects')
    },
    tradingDetailed:function (data) {
        return ApiSend(data,'/api/tradingDetailed')
    },
    ownerDetailed:function (data) {
        return ApiSend(data,'/api/ownerDetailed')
    },
    userCollection:function (data) {
        return ApiSend(data,'/api/userCollection')
    },
};
export default dazongDetail
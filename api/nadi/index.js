import ApiSend from '../api-send'
let nadi = {
    modulAdvertising:function (data) {
        return ApiSend(data,'/api/modulAdvertising')
    },
    soilPaging:function (data) {
        return ApiSend(data,'/api/soilPaging')
    },
    FilterData:function (data) {
        return ApiSend(data,'/api/FilterData')
    },
    tradingProject:function (data) {
        return ApiSend(data,'/api/tradingProject')
    },
    ownerProject:function (data) {
        return ApiSend(data,'/api/ownerProject')
    },
    keyProjects:function (data) {
        return ApiSend(data,'/api/keyProjects')
    },
};
export default nadi
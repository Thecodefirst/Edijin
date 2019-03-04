import ApiSend from '../api-send'
let pinpai = {
    soilPaging:function (data) {
        return ApiSend(data,'/api/soilPaging ')
    },
    TopInvestor:function (data) {
        return ApiSend(data,'/api/TopInvestor ')
    },
    TopInstitutions:function (data) {
        return ApiSend(data,'/api/TopInstitutions ')
    },
    FindFinancing:function (data) {
        return ApiSend(data,'/api/FindFinancing ')
    },
    FindInstitutions:function (data) {
        return ApiSend(data,'/api/FindInstitutions ')
    },
    //  详情
    FindFinancingDetailed:function (data) {
        return ApiSend(data,'/api/FindFinancingDetailed ')
    },
    FindancingHot:function (data) {
        return ApiSend(data,'/api/FindancingHot ')
    },
    FindInstitutionsDetailed:function (data) {
        return ApiSend(data,'/api/FindInstitutionsDetailed')
    },
    EnterpriseHot:function (data) {
        return ApiSend(data,'/api/EnterpriseHot')
    },
    FindInstitutionsProject:function (data) {
        return ApiSend(data,'/api/FindInstitutionsProject')
    },
};
export default pinpai
import ApiSend from '../api-send'
let home = {
    textIntroduce:function (data) {
        return ApiSend(data,'/api/textIntroduce')
    },
    livePicture:function (data) {
        return ApiSend(data,'/api/livePicture')
    },
    platformPaging:function (data) {
        return ApiSend(data,'/api/platformPaging')
    },
    indexPicture:function (data) {
        return ApiSend(data,'/api/indexPicture')
    },
    homePageIndex:function (data) {
        return ApiSend(data,'/api/homePageIndex')
    }    ,
    StaticFigure:function (data) {
        return ApiSend(data,'/api/StaticFigure')
    },
    findInstitutions:function (data) {
    	return ApiSend(data,'/api/findInstitutions')
    },
    indexDaZong:function (data) {
    	return ApiSend(data,'/api/indexDaZong')
    },
    indexZhaoQian:function (data) {
    	return ApiSend(data,'/api/indexZhaoQian')
    },
    indexNaDi:function (data) {
    	return ApiSend(data,'/api/indexNaDi')
    },
    sowingMap:function (data) {
    	return ApiSend(data,'/api/sowingMap')
    },
    homePageIndexTwo:function(data){
        return ApiSend(data,'/api/homePageIndexTwo')
    },
    PersonalInformation:function(data){
        return ApiSend(data,'/api/PersonalInformation')
    },
    advertisingPicture:function(data){
        return ApiSend(data,'/api/advertisingPicture')
    },
    indexSelectedOne:function(data){
        return ApiSend(data,'/api/indexSelectedOne')
    },
    indexSelectedTwo:function(data){
        return ApiSend(data,'/api/indexSelectedTwo')
    },
    indexSelectedThree:function(data){
        return ApiSend(data,'/api/indexSelectedThree')
    },
};
export default home
import ApiSend from '../api-send'
let Kuaibao = {
    soilPaging:function (data) {
        return ApiSend(data,'/api/soilPaging ')
    },
    djwType:function (data) {
        return ApiSend(data,'/api/djwType')
    },
    typeNewsPicture:function(data){
        return ApiSend(data,'/api/typeNewsPicture')
    },
    typeNewsRecommended:function(data){
        return  ApiSend(data,'/api/typeNewsRecommended')
    },
    click:function(data){
        return  ApiSend(data,'/api/click')
    },
    typeNewsPage:function(data){
        return  ApiSend(data,'/api/typeNewsPage')
    },
};
export default Kuaibao ;

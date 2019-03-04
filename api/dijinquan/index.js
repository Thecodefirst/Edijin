import ApiSend from '../api-send'
let DJ = {
    soilPaging:function (data) {
        return ApiSend(data,'/api/soilPaging ')
    },
    djwDjCircleHomePage:function (data) {
        return ApiSend(data,'/api/djwDjCircleHomePage ')
    },
    getDjwDjCircleMore:function (data) {
        return ApiSend(data,'/api/getDjwDjCircleMore ')
    },
    djwDjCircleJoinGroup:function (data) {
        return ApiSend(data,'/api/djwDjCircleJoinGroup ')
    },
};
export default DJ
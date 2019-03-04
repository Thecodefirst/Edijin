import ApiSend from '../api-send'
let auth = {
    djwSms:function (data) {
        return ApiSend(data,'/api/djwSms ')
    },
    djwRegister:function (data) {
        return ApiSend(data,'/api/djwRegister ')
    },
    quickLogin:function (data) {
        return ApiSend(data,'/api/quickLogin ')
    },
    djwLogin:function (data) {
        return ApiSend(data,'/api/djwLogin ')
    },
};
export default auth
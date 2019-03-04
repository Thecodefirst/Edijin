import ApiSend from '../api-send'
let zhaoqian = {
    TradingData:function (data) {
        return ApiSend(data,'/api/TradingData')
    },
};
export default zhaoqian
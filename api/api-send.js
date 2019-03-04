import axios from 'axios';
import store from '../store';
import { resolve } from 'path';

// let param = function (obj) {
//     var query = '', name, value;
//     for(name in obj) {
//         value = obj[name];
//         if(value instanceof Array) {
//             query += encodeURIComponent(name) + '=' + encodeURIComponent(JSON.stringify(value)) + '&';
//         }
//         else if(value instanceof Object) {
//             query += encodeURIComponent(name) + '=' + encodeURIComponent(JSON.stringify(value)) + '&';
//         }
//         else if(value !== undefined && value !== null)
//             query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//     }
//     return query.length ? query.substr(0, query.length - 1) : query;
// };

export default (data, url, method)=> {

    data = data||{};
    // if(store&&store.getters&&store.getters.user){
    //     data['token'] = store.getters.user.token;
    // }
    // if(data.context&&data.context.city_id){
    //     data['oid'] = data.context.user.city_id;
    //     console.log('有啊')
    //     // delete data.context
    // }
    var obj = {
        url: url,
        method: method||'post',
        // transformResponse: [function (data) {
        //     // return data;
        // }],
        data:data,
        // responseType: 'json',
        // progress: function (progressEvent) {}
    };
    // if(method=='get'){
    //     delete obj.data;
    //     obj.params = data;
    // }
    // console.log(data)
    return axios.request(obj).then(function(res){
        return (res.data)
    })  
    // if(!_noProgress){app.$nprogress.start();}
    // return axios.request(obj).then(function (res) {
    //     if(!_noAuth&&res.data&&res.data.code&&res.data.code.toString().match(/90[1234567]/)){//IP非法
    //         if( res.data.code == 902 ||
    //             res.data.code == 903 ||
    //             res.data.code == 904 ||
    //             res.data.code == 907 ){
    //                 if(res.data.code == 904){
    //                     if(!!app.$route.matched[0][name]){
    //                         app.$router.back()
    //                     }else {
    //                         app.$router.push({name:'Home'});
    //                     }
    //                 }if(res.data.code == 907){
    //                     app.$router.push({name:'Login'});
    //                 }else{
    //                     //app.$Message.warning(res.data.message);
    //                     res.data.message = '';
    //                     app.$router.push({name:'Login'});
    //                 }
    //         }
    //     }
    //     if(!_noProgress){app.$nprogress.done();}
    //     return res.data
    // },function (err) {
    //    app.$Notice.open({
    //        title:'网络错误',
    //        desc: '错误：'+url+'，控制台查看详情',
    //        duration:3
    //    });
    //    console.warn('网络错误,接口:'+url+'。',err);
    //    if(!_noProgress){app.$nprogress.done();}
    // })
}

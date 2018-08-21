import promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import $ from 'jquery';

promise.polyfill();

const request = (url, setting,headers) => {
    const defaultSetting = {
        url: url || '',
        setting: {
            method: 'GET',
            headers: window.Global.JSON_CONFIG,
            // body: , // blob、BufferSource、FormData、URLSearchParams
            cache: 'default',
            credentials: 'include', // credentials: omit | same-origin | include
            mode: "cors",// mode: same-origin | cors | cors-with-forced-preflight | no-cors
        },
    }
    if(setting.method!='GET'){
        setting.headers = window.Global.FORM_CONFIG;
        setting.body = $.param(setting.body||{});
    }
    if(headers){
        setting.headers = headers;
    }
    let Setting = {...defaultSetting, setting: Object.assign({}, defaultSetting.setting, setting)};
    const promise = fetch(Setting.url, Setting.setting).then((res) => {
        return res.json();
        // if (res.status >= 200 && res.status < 300) {
        //     return res.json();
        // } else {
        //     // return Promise.reject('请求失败！');
        //     return res.json();
        // }
    });
    promise.then(function(res){
       if(res.code == 20039 && res.status == 302){
           window.location.href = window.CONFIG.CALLBACK_LOGIN;
       }else{
           let loading = document.getElementById("loading");
           if(loading){
               document.body.removeChild(loading);
           }
       }
    });

    return promise;
}

const Http = {
    get: (url) => request(url,{method: 'GET'}),
    post: (url, params,headers) => request(url, {method: 'POST',body: params},headers),
    put: (url, params,headers) => request(url, {method: 'PUT',body: params},headers),
    patch: (url, params,headers) => request(url, {method: 'PATCH',body: params},headers),
    del: (url, params,headers) => request(url, {method: 'DELETE',body: params},headers),
    ajax: (url, setting,headers) => request(url,setting,headers)
}

export default Http;

import { getCookie } from "../utils/utils";

const jumpDefault = (defaultUrl) => {
    if(window.location.hash){
        if(window.location.hash.substr(1) == '/'){
            window.location.hash = defaultUrl ;
        }
    }else{
        if(window.location.pathname&&window.location.pathname=='/'){
            window.location.hash = defaultUrl ;
        }else if(!window.location.pathname){
            window.location.hash = defaultUrl ;
        }
    }
}
const dynamicLoadCss = (url) => {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.type='text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}
const loadFrame = (url,callback) =>{
    let head = document.getElementsByTagName('head')[0];
    let script = <any>document.createElement('script');
    script.type="text/javascript";
    if(callback){
        if(script.readyState){
            script.onreadystatechange=()=>{
                if(script.readyState == "loaded" || script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            }
        }else{
            script.onload=()=>{

            }
        }
    }
    script.src = url;
    head.appendChild(script);
}
// window.CONFIG.CMC_CONSOLE_URL.replace(/\.js$/ig,'.css')
dynamicLoadCss(window.Config.CMC_CONSOLE_URL+window.Config.CMC_CONSOLE_HEADER_LEFT_CSS);
loadFrame(window.Config.CMC_CONSOLE_URL+window.Config.CMC_CONSOLE_HEADER_LEFT_JS,()=>{

    document.body.children[0].setAttribute("style","position:relative;z-index:10;");

    window.CookieJson = getCookie();

    if(!window.CookieJson['login_chinamcloud_id']&&!window.CookieJson['login_chinamcloud_tid']){
        window.location.href = window.Config.CALLBACK_LOGIN;
    }else{
        jumpDefault('#/plans/have');
    }
});

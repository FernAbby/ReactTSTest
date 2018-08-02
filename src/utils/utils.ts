export function jointUrls(params){
    let searchStr = '?';
    for (let key in params) {
        if(params[key]){
            searchStr += `${key}=${params[key]}&`;
        }
    }
    return searchStr.substr(0,searchStr.length-1);
}
export function getCookie(){
    let cookieJson = {};
    if(document.cookie){
        document.cookie.split(';').forEach(function(item,i){
            let itemArray = item.split('=');
            cookieJson[itemArray[0].trim()] = itemArray[1].trim();
        });
    }
    return cookieJson;
}






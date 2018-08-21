import Http from './httpservice';
import {Interface,cookieJson} from './interface';

const Requests = {
    //获取菜单列表
    GetMenuList: ()=>{
        return Http.get(Interface.LEFT_MENU);
    },
    //获取选题列表
    GetTopicList: ()=>{
        return Http.get(Interface.TOPIC_LIST);
    }
    
}

export {Http,Interface,Requests,cookieJson}


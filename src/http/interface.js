import $ from 'jquery';
const cookieJson =  window.COOKIEJSON;
if(cookieJson && !$.isEmptyObject(cookieJson)){
    const loginInfo = {
        login_id: cookieJson['login_chinamcloud_id'],
        login_tid: cookieJson['login_chinamcloud_tid'],
    }
    const loginInfoStr = '?'+window.jointUrls(loginInfo);
}

const Interfaces = {
    LEFT_MENU: '/menus', //GET|POST 获取左侧导航条

    TOPIC_LIST: '/plans/have', //GET 获取选题列表
    TOPIC_ADULT: '/plans/wait-review',//GET 获取待审核选题列表
    TOPIC_QUERY: '/plans', // GET 选题查询
    TOPIC_EDIT: '/plans/', // PUT 编辑选题${id}
    TOPIC_ADD: '/plans',//POST 创建选题
    TOPIC_DELETE: '/plans/',//DELETE删除选题${id};${id}
    TOPIC_CLOSE: '/plans/disable/',//DELETE删除选题${id};${id}
    TOPIC_OPEN: '/plans/enable/',//PUT 开启任务{task_id}
    TOPIC_DETAIL: '/plans/',// GET 获取选题详情${id}
    TOPIC_SUBMIT_ADULT: '/plans/submit/', //  PUT 选题审核${id};${id}
    TOPIC_REFUSE: '/plans/refuse/', //PUT 拒绝选题${id};${id}
    TOPIC_RETURN: '/plans/return/', //PUT 回退选题${id};${id}
    TOPIC_PASS: '/plans/pass/', //PUT 通过选题${id};${id}

    NEW_DETAIL: '/yqdsj-articles/',//GET 舆情文件id{id}

    TASK_LIST: '/plan-tasks', //GET 获取任务列表
    TASK_ADD: '/plan-tasks', //POST 创建任务
    TASK_EDIT: '/plan-tasks/update',//PUT 更新任务
    TASK_EDIT_DETAIL: '/plan-tasks/edit/',//GET ${id} 编辑任务时获取详情
    TASK_DELETE: '/plan-tasks/', //DELETE 删除任务${id};${id}
    TASK_DETAIL: '/plan-tasks/',//GET 获取任务详情{id}
    TASK_END: '/plan-tasks/finish/',//PUT 结束任务{task_id}
    TASK_CLAIM: '/plan-tasks/claim/',//PUT 认领任务{task_id}
    TASK_CLOSE: '/plan-tasks/disable/',//PUT 禁止任务{task_id}
    TASK_OPEN: '/plan-tasks/enable/',//PUT 开启任务{task_id}
    TASK_ASSIGN: '/plan-tasks/transfer/',//PUT 转派任务{task_id}
    TASK_WRITE: '/plan-tasks/write/',//GET 撰写稿件{id}
    TASK_REVIEW: '/plan-tasks/article-review/',//GET 稿件审查{id}
    TASK_COMMIT: '/plan-tasks/commit-article/',//GET 提交稿件{id}
    TASK_VEDIO_EDIT: '/plan-tasks/video-edit/',//GET 视频编辑{id}
    TASK_UPLOAD: '/plan-tasks/upload/', //GET 素材上传,节目上传{id}

    COLUMN_LIST: '/config-columns',//GET 获取栏目列表
    COLUMN: '/config-columns/',//POST 创建栏目${id} | DELETE 删除栏目${id} | PUT 更新栏目${id}
    USER_LIST: '/cmc-users',//GET 获取CMC用户列表
    COLUMN_USER_lIST: '/config-column-users', //GET 获取栏目人员列表 | PUT 变更人员列表${id}
    ROLES_LIST: '/roles', //GET 获取角色列表
    IDENTITY_CHANGE: '/config-column-users/role-code/', // PUT 人员身份变更${id}
    DELETE_USER: '/config-column-users/',//DELETE 删除栏目人员{ids} id;id

    ADD_BASE: '/config-base-locations/',//PUT 增加基地设置 ${group_id}
    EDIT_BASE: '/config-base-locations/edit/', // GET 获取基地设置

    LOGS: '/logs', // GET 获取操作日志
    LOG_INFO: '/logs/', // GET 获取操作日志信息${log_id}
};
let Interface = {};
for(let key in Interfaces){
    Interface[key] =  '/'+window.CONFIG.API_VERSION + Interfaces[key];
}
export {Interface,cookieJson};
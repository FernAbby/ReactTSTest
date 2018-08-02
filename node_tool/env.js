const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const env_path = '../';
const env_files = ['.env','.env.development','.env.production'];
const env_paths = [];

for(var i=0;i<env_files.length;i++){
    env_paths.push(env_path+env_paths[i]);
}

const Config = {
    env: {},
    development: {},
    production: {}
};

const env = fs.stat(path.join(__dirname,env_paths[0]),function(err,stat){
    if(!err){
        Config.env = getEnv(0);
    }else{
        Config.development = getEnv(1);
        Config.production = getEnv(2);
    }
});
function getEnv(index){
    var filedata;
    try{
        filedata = fs.readFileSync(env_paths[index], 'utf8');
    }catch(err){
        filedata = undefined;
    }
    filedata = filedata?querystring.parse(filedata.replace(/\r\n+/g,"&").replace(/\s+/g,"")):undefined;
    return upperObjectKey(filedata);
}
function upperObjectKey(obj){
    for (var key in obj){
        obj[key.toLocaleUpperCase()] = (obj[key]).toLocaleUpperCase();
        delete(obj[key]);
    }
    return obj;
}

module.exports = Config;
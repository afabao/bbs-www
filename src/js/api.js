import {get,post} from './http'

//登陆接口
export const apiUserLogin = p => post('/api/user/login',p);

export const apiInfo = p => post('/api/user/info',p);

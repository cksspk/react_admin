/**
 * 根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */

//引入自己写的ajax模块
import ajax from './ajax'

//登录
const BASE = '';
// export function reqLogin(username,password) {
//     return ajax('/login',{username,password},'POST')
// }
// =>箭头函数不用{}表示，当只有一句时语句直接返回
export const reqLogin = (username, password) => ajax(BASE+'/login',{username, password},'POST');

//添加用户
export const reqAddUser = (user) => ajax(BASE+'/manage/user/add',user,'POST');
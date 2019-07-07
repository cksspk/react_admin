/**
 * 能发送一部ajax请求的函数模块
 * 封装axios库
 * 函数返回值 promise 对象
 *
 * 1. 优化1: 统一处理请求异常?
 *     在外层包一个自己创建的promise对象
 *     在请求出错时, 不reject(error), 而是显示错误提示
 * 2. 优化2: 异步得到不是reponse, 而是response.data
 *     在请求成功resolve时: resolve(response.data)
 */

import axios from 'axios'
import {message} from 'antd'

//data={} 请求不一定会有参数，指定参数的默认值
export default function ajax(url, data={}, type='GET') {

    return new Promise((resolve, reject) => {
        let promise;
        // 1. 执行异步ajax请求
        if(type==='GET') { // 发GET请求
            promise = axios.get(url, { // 配置对象
                params: data // 指定请求参数
            })
        } else { // 发POST请求
            promise = axios.post(url, data)
        }
        // 2. 如果成功了, 调用resolve(value),这里的成功指的是访问网站成功
        promise.then(response => {
            resolve(response.data)
            // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
        }).catch(error => {
            // reject(error)
            console.log('qingqiu')
            message.error('请求出错了: ' + error.message)
        })
    })
}
//请求登录接口,通过这种方式比较麻烦，需要每个请求指定，解决办法，通过配置的方式 index.js
// ajax('/login',{username:'admin',password:'admin'},'POST').then();
// ajax('/manage/user/add',{username:'tom',password:'123456'},'POST').then();

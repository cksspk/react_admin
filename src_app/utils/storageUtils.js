/**
 * 进行local数据存储管理的工具模块
 */

/*
1）由于localStorage兼容性不好
2）使用store库作为域本地交互存储
3）而且语法更加简洁
 */
import store from 'store'


const  USER_KEY = 'user_key';
export  default {
    /**
     * 保存user
     */
    saveUser(user){
        // localStorage.setItem(USER_KEY,JSON.stringify(user))
        store.set(USER_KEY,user)
    },

    /**
     * 读取user
     */
    getUser(){
        //当不存在返回空json格式{}而不是null
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY) || {}
    },

    /**
     * 删除user
     */
    removeUser(){
      // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY)
    }
}
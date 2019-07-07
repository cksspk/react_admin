import React,{Component} from 'react'

import {BrowserRouter,Route} from 'react-router-dom'
//引入对象保存数据，
import memoryUtils from '../../utils/memoryUtils'

//引入Redirect标签，重定向
import {Redirect} from 'react-router-dom'
/**
 * 后台管理的路由组件
 */
export default class Admin extends  Component {

    render(){
        const user = memoryUtils.user;
        //如果内存中没有存储user ===> 当前没有登录
        if(!user || !user._id){
            //在render中跳转到登录界面
            return <Redirect to = '/login'></Redirect>
        }
        return (
            <div>Hello {user.username}</div>
        )
    }
}
/**
 * 入口js
 */

//引入第三方模块写法
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";

import store from './redux/store'

//将App组件渲染到index页面的div上
ReactDOM.render(<App store = { store }/>,document.getElementById('root'));

//给store绑定状态更新的监听

store.subscribe(()=>{ //store内部的状态值发生改变时自动回调
    //重新渲染App组件标签
        ReactDOM.render(<App store = { store }/>,document.getElementById('root'));
    }
)
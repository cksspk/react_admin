/**
 * 入口js
 */

//引入第三方模块写法
 import React from 'react'
 import ReactDOM from 'react-dom'

 //引入自定义模块
 import App from './App'

//使用redux
import {Provider} from 'react-redux'
import store from './redux/store'

//读取local中保存的user，保存到内存中
// import storageUtils from './utils/storageUtils'
// import memoryUtils from './utils/memoryUtils'

// const user = storageUtils.getUser()
// memoryUtils.user = user;



 //将App组件渲染到index页面的div上
 ReactDOM.render((
     <Provider store = {store}><App/></Provider>
 ),document.getElementById('root'));

/**
 * 入口js
 */

//引入第三方模块写法
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./containers/App";

import store from './redux/store'
import {Provider} from 'react-redux'

//将App组件渲染到index页面的div上
ReactDOM.render((
    <Provider store = { store }>
        <App />
    </Provider>),
    document.getElementById('root'));


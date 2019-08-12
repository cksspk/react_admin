/**
 * 应用根组件
 */

import React,{Component} from 'react'
 // import { Button,message } from 'antd'
 import {BrowserRouter,HashRouter,Route,Switch} from 'react-router-dom'
 import Login from './pages/login/login'
 import Admin from './pages/admin/admin'

import Swiee from './components/swieepage'


/**
 * 应用根组件
 */
 export default class App extends Component{
    render(){
       return (
            <HashRouter>
                <Switch>{/*只匹配其中一个,如果有匹配 / 组件的Route需要放在最后，不然所有路径返回/组件*/}
                   {/*主界面使用 / 路径*/}
                    <Route path="/swiee" component={Swiee}></Route>
                    <Route path='/login' component = {Login}></Route>
                    <Route path = '/' component={Admin}></Route>
                </Switch>
            </HashRouter>
       )
    }
 }

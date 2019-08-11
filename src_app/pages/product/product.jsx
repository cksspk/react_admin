import React,{Component} from 'react'

import {Route,Switch,Redirect} from 'react-router-dom'
import ProductHome from './home'
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'

import './product.less' //父组件引入样式，子组件可共享
/**
 * 商品路由
 */
export default class Product extends  Component {
    render(){
        return (
            <Switch>
                <Route path='/product' component={ProductHome} exact/> {/*路径完全匹配*/}
                <Route path='/product/addupdate' component={ProductAddUpdate}/>
                <Route path='/product/detail' component={ProductDetail}/>
                <Redirect to='/product'/>
            </Switch>
        )
    }
}
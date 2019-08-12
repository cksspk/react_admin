import React,{Component} from 'react'

// 引入redux
import { connect} from "react-redux";



//引入对象保存数据，
// import memoryUtils from '../../utils/memoryUtils'

//引入Redirect标签，重定向 //引入路由组件
import {Redirect, Route, Switch} from 'react-router-dom'

//引入layout布局组件
import { Layout } from "antd";

//引入左侧，头部组件
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'



//引入子路由
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import NotFound from '../not-found/not-found'
// import Order from '../order/order'
const { Content, Footer, Sider } = Layout;
/**
 * 后台管理的路由组件
 */
class Admin extends  Component {

    render(){
        // const user = memoryUtils.user;   //如果内存中没有存储user ===> 当前没有登录


        const user = this.props.user         //从redux中取数据
        if(!user || !user._id){
            //在render中跳转到登录界面
            return <Redirect to = '/login'></Redirect>
        }
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20,  backgroundColor:"white"}}>
                        <Switch>
                            <Redirect exact from='/' to='/home'/>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path='/user' component={User}/>
                            <Route path='/role' component={Role}/>
                            <Route path="/charts/bar" component={Bar}/>
                            <Route path="/charts/pie" component={Pie}/>
                            <Route path="/charts/line" component={Line}/>
                            <Route component={NotFound}/> {/*上面没有一个匹配, 直接显示*/}
                            <Route/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:"center",color:"ccc"}}>推荐使用Chrome浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default connect(
    state => ({user : state.user}),
    {}
)(Admin)
import React,{Component} from 'react'

//引入link组件,点击路由跳转功能
import { Link } from 'react-router-dom'

//菜单组件
import { Menu, Icon } from 'antd';

//引入自定义样式
import './index.less'

//引入logo
import logo from '../../assets/images/logo.png'

//菜单项单独引入
const { SubMenu } = Menu;
/**
 * 左侧导航组件
 */
export default class Index extends  Component {
    render(){
        return (
                <div className="left-nav">
                    {/*点击组件通过路由跳转*/}
                    <Link  to='/' className="left-nav-header">
                        <img src={logo} alt="logo"/>
                        <h1>Admin后台</h1>
                    </Link>

                <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="/home">
                        <Link to='/home'>
                            <Icon type="pie-chart" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>商品</span>
                                    </span>
                                }
                    >
                        <Menu.Item key="/category">
                            <Link to={'/category'}>
                                <Icon type="mail" />
                                <span>品类管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to={'/product'}>
                                <Icon type="mail" />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user">
                        <Link to={'/user'}>
                            <Icon type="mail" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="/role">
                        <Link to={'/role'}>
                            <Icon type="mail" />
                            <span>权限管理</span>
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>


        )
    }
}
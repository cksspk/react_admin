import React,{Component} from 'react'
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";


/**
 * 定义路由
 */
export default class LeftSider extends  Component {
    render(){
        return (
                <div>
                    <Menu
                        mode="inline"
                        theme="light"
                    >
                        <Menu.Item key="/page1">
                            <Link to='/swiee/page1'>
                                <Icon type="pie-chart" />
                                <span>计划执行监视</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/page2">
                            <Link to={'/swiee/page2'}>
                                <Icon type="mail" />
                                <span>兵力状态监视</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/page3">
                            <Link to={'/swiee/page3'}>
                                <Icon type="mail" />
                                <span>目标活动监视</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/page4">
                            <Link to={'/swiee/page4'}>
                                <Icon type="mail" />
                                <span>告警通知处置</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/page5">
                            <Link to={'/swiee/page5'}>
                                <Icon type="mail" />
                                <span>行动协同处置</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/page6">
                            <Link to={'/swiee/page6'}>
                                <Icon type="mail" />
                                <span>行动处置记录</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
        )
    }
}
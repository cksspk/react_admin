import React,{Component} from 'react'

//antd 表单
import { Form, Icon, Input, Button } from 'antd';

//引入自定义css
import './login.less'

//加载图片logo
import logo from './imgs/logo.png'

//对象的一种写法，将子对象取出,不能写在import之前 es6语法规定
const  Item = Form.Item;


/**
 * 登录的路由组件
 */
export default class Login extends  Component {
    handleSubmit = (event) =>{

    };


    render(){
        return (
            <div className="login">
                <header className="login-header">
                    {/*动态的加载logo*/}
                    <img src={logo} alt="logo"/>
                    <h1>React项目：后台管理项目</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />
                        </Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" {/*提交按钮*/} className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>

            </div>
        )
    }
}
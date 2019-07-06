/**
 * 应用根组件
 */

 import React,{Component} from 'react'
 import { Button,message } from 'antd'

 // import 'antd/dist/antd.css'

 export default class App extends Component{

     handleClick = () =>{
        message.success("点击成功了！！")
     };

    render(){
        return <Button type="primary" onClick={this.handleClick}>点击</Button>
    }
 }
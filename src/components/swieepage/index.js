// import React,{Component} from 'react'
// import { Layout, Menu, Breadcrumb, Icon } from 'antd';
//
// //引入Redirect标签，重定向 //引入路由组件
// import {Redirect, Route, Switch} from 'react-router-dom'
//
// import LeftSider from './swieeRoute/LeftSider'
// import Page1 from './page/Page1'
// import Page2 from './page/Page2'
// import Page3 from './page/Page3'
// import Page4 from './page/Page4'
// import Page5 from './page/Page5'
// import Page6 from './page/Page6'
// import Button from "antd/lib/button";
//
// import  AddAction from './component/AddAction'
//
// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;
//
// export default class Index extends  Component {
//     /*设置默认值*/
//     constructor(props) {
//         super(prps);
//         this.state = {
//             visible: false,
//             itemData: {}
//         };
//     }
//         addAction = () =>{
//             this.setState( {
//                 visible: true,
//                 itemData
//             });
//         };
//
//     /*获取子组件传递过来的值*/
//
//     changeStatus = (status) =>{
//         this.setState({
//             visible:status
//         })
//     }
//
//         render()
//         {
//             return (
//                 <Layout style={{height: '100%', backgroundColor: 'gray'}}>
//                     <div style={{textAlign: 'center'}}><h1 style={{fontSize: '20px', fontWeight: "bold"}}>电子对抗行动控制</h1>
//                     </div>
//                     <Header style={{padding: '0'}}>
//                         <Menu
//                             mode="horizontal"
//                             defaultSelectedKeys={1}
//                             style={{lineHeight: '64px'}}
//                         >
//                             <Menu.Item key="1">nav 1</Menu.Item>
//                             <Menu.Item key="2">nav 2</Menu.Item>
//                             <Menu.Item key="3">nav 3</Menu.Item>
//                             <Button onClick={this.addAction.bind(this)}>添加</Button>
//                             <AddAction
//                                        visible={visible}
//                                        entray={itemData}
//                                        status={this.changeStatus}
//                             />
//                         </Menu>
//                     </Header>
//                     <div style={{height: '50px', textAlign: 'center'}}>滚动条</div>
//                     <Layout>
//                         <Sider width={200} style={{background: 'white'}}>
//                             <LeftSider/>
//                         </Sider>
//                         <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
//                             <Switch>
//                                 {/*子路由配置需要前缀加上父路由*/}
//                                 <Route path='/swiee/page1' component={Page1}/>
//                                 <Route path='/swiee/page2' component={Page2}/>
//                                 <Route path='/swiee/page3' component={Page3}/>
//                                 <Route path='/swiee/page4' component={Page4}/>
//                                 <Route path='/swiee/page5' component={Page5}/>
//                                 <Route path="/swiee/page6" component={Page6}/>
//                                 <Route/>
//                             </Switch>
//                         </Content>
//
//                     </Layout>
//                 </Layout>
//             )
//         }
//
// }
import React,{Component} from 'react'
import { Card, Button, Table,Modal,message} from 'antd'

import AddForm from './add-form'
import AuthForm from './auth-form'
import {PAGE_SIZE} from "../../utils/constants"
import {reqRoles, reqAddRole, reqUpdateRole} from '../../api'
import {formateDate} from '../../utils/dateUtils'


/**
 * 角色路由
 */
export default class Role extends  Component {

    state = {
        roles: [], // 所有角色的列表
        role: {}, // 选中的role
        isShowAdd: false, // 是否显示添加界面
        isShowAuth: false, // 是否显示设置权限界面
    }

    initColumn = () => {
        this.columns = [
            {
                title: '角色名称',
                dataIndex: 'name'
            },
            {
                title: '创建时间',
                dataIndex: 'create_time',
                render: (create_time) => formateDate(create_time)
            },
            {
                title: '授权时间',
                dataIndex: 'auth_time',
                // render: formateDate
            },
            {
                title: '授权人',
                dataIndex: 'auth_name'
            },
        ]
    }

    //获取所有用户列表
    getRoles = async () => {
        const result = await reqRoles()
        if (result.status===0) {
            const roles = result.data
            this.setState({
                roles
            })
        }
    }

    //table行事件 ，role选中的行数据对象
    onRow = (role) => {
        return {
            onClick: event => { // 点击行
                console.log('row onClick()', role)
                // alert('点击行')
                this.setState({ //点击行事件，更新state中的行数据，用于修改权限
                    role
                })
            },
        }
    }


    /*
    添加角色
     */
    addRole = () => {

        // 进行表单验证, 只能通过了才向下处理
        this.form.validateFields(async (error,values)=>{
            if(!error){
                //隐藏输入框
                this.setState({isShowAdd : false})

                //1. 收集数据
                const {roleName} = values
                //重置输入数据
                this.form.resetFields()

                //2. 请求后台
                const result = await reqAddRole(roleName)
                //3. 根据结果更新显示
                if (result.status===0) {
                    message.success('添加角色成功')
                    // this.getRoles()      //添加成功重新请求， 不使用这种方式
                    // 新产生的角色
                    const role = result.data
                    // 更新roles状态        A方式
                    /*const roles = this.state.roles
                    roles.push(role)            向数组中添加元素
                    this.setState({             更新
                      roles
                    })*/

                    // 更新roles状态: 基于原本状态数据更新  B方式
                    this.setState(state => ({//原生语法写法
                        roles: [...state.roles, role]
                    }))

                }else{
                    message.success('添加角色失败')
                }
            }
        })
    }

    /*
更新角色
 */
    updateRole = async () => {


    }

    componentWillMount () {
        this.initColumn()
    }

    componentDidMount() {
        this.getRoles()
    }


    render(){

        const {roles,role,isShowAdd, isShowAuth} = this.state

        const title = (
            <span>
                <Button type='primary' onClick={() =>{this.setState({isShowAdd : true})}}>创建角色</Button> &nbsp;&nbsp;
                <Button type='primary' disabled = {!role._id} onClick={() =>{this.setState({isShowAuth : true})}}>设置角色权限</Button>
            </span>
        )
        return (
            <Card title={title}>
                <Table
                    bordered
                    rowKey='_id'
                    dataSource={roles}
                    columns={this.columns}
                    pagination={{defaultPageSize: PAGE_SIZE}}
                    rowSelection={{
                        type: 'radio',
                        selectedRowKeys: [role._id],
                        onSelect: (role) => { // 选择某个radio时回调
                            this.setState({
                                role
                            })
                        }
                    }}
                    onRow={this.onRow}  //点击这一行的触发事件
                />
                {/*添加角色的Modal框*/}
                <Modal
                    title="添加角色"
                    visible={isShowAdd}
                    onOk={this.addRole}
                    onCancel={() => {
                        this.setState({isShowAdd: false})   //设置影藏
                        this.form.resetFields()             //清除字段
                    }}
                >
                    <AddForm    //父组件回调函数
                        setForm={(form) => this.form = form}
                    />
                </Modal>

                {/*设置角色权限的Modal框*/}
                <Modal
                    title="设置角色权限"
                    visible={isShowAuth}
                    onOk={this.updateRole}
                    onCancel={() => {
                        this.setState({isShowAuth: false})
                    }}
                >
                    {/*role={role} 父组件向子组件传递对象 */}
                    <AuthForm ref={this.auth} role={role}/>
                </Modal>
            </Card>
        )
    }
}
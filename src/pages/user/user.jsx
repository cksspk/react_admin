import React,{Component} from 'react'
import { Card, Button, Table,Modal,message} from 'antd'
import {formateDate} from '../../utils/dateUtils'
import {PAGE_SIZE} from "../../utils/constants";
import {reqDeleteUser, reqUsers, reqAddOrUpdateUser} from "../../api/index";
import LinkButton from "../../components/link-button";

import UserForm from './user-form'
/**
 * 用户路由
 */
export default class User extends  Component {

    state = {
        users: [], // 所有用户列表
        roles: [], // 所有角色列表
        isShow: false, // 是否显示确认框
    }

    initColumns = () =>{
        this.columns = [
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '邮箱',
                dataIndex: 'email'
            },

            {
                title: '电话',
                dataIndex: 'phone'
            },
            {
                title: '注册时间',
                dataIndex: 'create_time',
                render: formateDate
            },
            {
                title: '所属角色',
                dataIndex: 'role_id',
                render: (role_id) => this.roleNames[role_id]    //在请求后生成roles对象，包含每个用户对应的角色id和name，存入到对象中，使用id的值作为对象的属性，使用name作为属性的值，优化性能意识
            },
            {
                title: '操作',
                render: (user) => (
                    <span>
                    <LinkButton onClick={() => this.showUpdate(user)}>修改</LinkButton>
                    <LinkButton onClick={() => this.deleteUser(user)}>删除</LinkButton>
                  </span>
                )
            },
        ]
    }

    /**
     * 添加或者更新用户
     */
    addOrUpdateUser = async () =>{

        this.setState({isShow:false})

        //1. 收集输入数据
        const user = this.form.getFieldsValue()
        this.form.resetFields()
        console.log(user)

        //如果是更新，给user指定_id属性
        if(this.user){
            user._id = this.user._id
        }


        //2. 提交添加的请求
        const result = await reqAddOrUpdateUser(user)

        //3. 更新列表显示
        if(result.status ===0 ){
            message.success(`${this.user ? '修改' : '添加'}用户成功`)
            this.getUsers()
        }
    }


    getUsers = async () =>{
        const result = await reqUsers()
        if(result.status === 0 ){
            const {users, roles} = result.data
            this.initRoleNames(roles)
            this.setState({users,roles})      //初始化使用对象模式更新state
        }
    }

    /**
     * 根据roles数组生成包含所有角色名的对象(属性名用角色id值)
     */
    initRoleNames = (roles) =>{
        const roleNames = roles.reduce((pre, role)=>{
            pre[role._id] = role.name
            return pre
        },{})
        // 保存
        this.roleNames = roleNames
    }

    /**
     * 删除指定用户函数( 可用于下发命令)
     */
    deleteUser = (user) =>{
        Modal.confirm({
            title: `确认删除${user.username}吗?`,
            onOk: async () => {
                const result = await reqDeleteUser(user._id)
                if(result.status===0) {
                    message.success('删除用户成功!')
                    this.getUsers()
                }
            }
        })
    }

    /**
     * 显示添加界面
     */
    showAdd = () =>{
        this.user = null // 去除前面保存的user
        this.setState({isShow : true})
    }

    /**
     * 修改用户函数  显示修改界面
     */
    showUpdate = (user)=>{
        this.user = user
        this.setState({isShow : true})
    }

    componentWillMount() {
        this.initColumns()
    }

    componentDidMount() {
        this.getUsers()
    }

    render(){
        const { users, roles, isShow } = this.state
        const user = this.user || {}      //判断是修改还是添加用户

        const title = <Button type='primary' onClick={this.showAdd}>创建用户</Button>
        return (
            <Card title={ title}>
                <Table
                    bordered
                    rowKey='_id'
                    dataSource={users}
                    columns={this.columns}
                    //defaultPageSize每页记录数，showQuickJumper：快速跳转，
                    pagination={{defaultPageSize:PAGE_SIZE}}
                />

                <Modal
                    title={user._id ? "修改用户 ":"添加用户" }
                    visible={isShow}
                    onOk={this.addOrUpdateUser}
                    onCancel={() => {
                        this.form.resetFields()
                        this.setState({isShow:false})}}  /*通过匿名函数的方式直接设置是否显示*/
                >
                   <UserForm
                       setForm={form => this.form = form}
                       roles = {roles}
                       user = {user}
                   />  {/*父组件接受子组件form， 通过函数形式*/}
                </Modal>


            </Card>
        )
    }
}
import React,{Component} from 'react'
import {
    Card,
    Select,
    Input,
    Button,
    Icon,
    Table,
    message
} from 'antd'

import LinkButton from '../../components/link-button'
const Option = Select.Option

/**
 * Product默认首页
 */
export default class ProductHome extends Component{

    state = {
        products:[], //商品数据
    };
    /**
     * 初始化表格列的函数
     */
    initColumns = () =>{
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                render:(price) => "￥"+ price // 当前指定了对应的属性, 传入的是对应的属性值
            },
            {
                width:100,//指定列表宽度
                title: '状态',
                dataIndex: 'status',
                render:(status) =>{
                   return <Button type='primary'>搜索</Button>
                }
            },
            {
                width:100,//指定列表宽度
                title: '操作',
                render:(product) =>{
                    return (
                        <span>
                            <LinkButton>详情</LinkButton>
                            <LinkButton>修改</LinkButton>
                        </span>)
                }
            },
        ];
    }
    componentWillMount() {
        this.initColumns();
    }

    render(){
        const {products} = this.state
        const title = (
            <span>
                <Select value='1' style={{width:150}}>
                    <Option value='1'>按名称搜索</Option>
                    <Option value="2">按描述搜索</Option>
                </Select>
                <Input placeholder="关键字"style={{width:150,margin:'0 15px'}}/>
                <Button type='primary'>搜索</Button>
            </span>
        )

        const extra = (
            <Button type='primary'>
                添加商品
            </Button>

        )
        return (
            <Card title = {title} extra = {extra}>
                <Table
                    bordered
                    rowKey='_id'
                    dataSource={products}
                    columns={this.columns}
                />
            </Card>
            )
    }
}

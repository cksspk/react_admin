import React,{Component} from 'react'
import {Modal} from "antd";
export default class AddAction extends  Component {

    onOk = () => {
        let status = false;
        this.props.status(status);
    }

    onCancel = () =>{
        let status = false;
        this.props.status(status);
    }
    render(){
        const { visible, entray} = this.props;
        return (
                <Modal
                    visible={visible}
                    title="呵呵哒"
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                    >
                </Modal>
        )
    }
}
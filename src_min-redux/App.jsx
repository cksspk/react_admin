
import React,{Component} from 'react'

import {increment,decrement} from './redux/actions'

import PropTypes from 'prop-types'

export default class App extends Component{

    static  porpTypes = {
        store : PropTypes.object.isRequired
    }

    constructor(props){
        super(props)
        this.numberRef = React.createRef()
    }

    increment = () =>{
        const number = this.numberRef.current.value * 1 //不同组件取值
        this.props.store.dispatch(increment(number))
    }

    decrement = () =>{
        const number = this.numberRef.current.value * 1
        this.props.store.dispatch(decrement(number))
    }

    incrementIfOdd = () =>{
        const number = this.numberRef.current.value * 1
        if(this.props.store.getState().count % 2 ===1 ){
            this.props.store.dispatch(increment(number))
        }
    }
    incrementAsync = () =>{
        const number = this.numberRef.current.value * 1
        setTimeout(()=>{
            this.props.store.dispatch(increment(number))
        },1000)
    }


    render(){

        const count = this.props.store.getState().count

        return (
            <div>
                <p>click {count} times</p>

                <div>
                    <select ref = {this.numberRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                    <button onClick={this.incrementIfOdd}>increnment if odd</button>&nbsp;&nbsp;
                    <button onClick={this.incrementAsync}>async</button>&nbsp;&nbsp;

                </div>
            </div>
        )
    }
}

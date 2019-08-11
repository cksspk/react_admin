
import React,{Component} from 'react'


import {connect} from "../lib/react-redux";
import Counter from '../components/Counter'
import {increment,decrement,incrementAsync} from "../redux/actions";

/*
容器组件 ： 通过connect包装UI组件产生组件
connect(): 高阶函数
connect()返回的函数是一个高阶组件：接受一个UI组件，生成一个容器组件
容器组件的责任，向UI组件传入特定的属性
 */


//指定向Counter传入哪些一般属性（属性值的来源是store中的state）
const mapStateToProps = (state) => ({count: state.count})

//指定向Counter传入哪些函数属性
/*如果是函数，会自动调用得到的对象，将对象中的方法作为函数属性传入UI组件 */
// const mapDispatchToProps = (dispatch) =>({
//     increment : (number)=>dispatch(increment(number)),
//     decrement : (number)=>dispatch(decrement(number)),
// })

/*如果是对象，将对象中的方法包装成一个新函数，并传入UI组件*/
const mapDispatchToProps = {increment, decrement}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

// export default connect(
//     state =>({count : state.count}),
//     {increment,decrement}
//
// )(Counter)


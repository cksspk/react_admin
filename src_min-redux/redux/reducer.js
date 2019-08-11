/*
reducer 函数模块：根据当前state和指定action返回新的state
 */
import { combineReducers} from "../lib/redux";

import {INCREMENT,DECREMENT} from './action-types'

//管理count状态数据的reducer
export function count(state = 1 ,action) {
    console.log('count()', state,action)
    switch(action.type){
        case INCREMENT :
            return state + action.data
        case DECREMENT:
            return state - action.data
        default :
            return state
    }
}

//管理用户信息的reducer函数
function user( state = {} ,action){
        switch(action.type){
            default:
                return state
        }
}

/*
返回整合后的reducer
总的reducer {count：1 , user : {}}
 */
export default combineReducers({
    count,
    user
})
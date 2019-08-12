/*
根据老的state和指定的action生成并返回新的state的函数
 */

/*
用来管理头部标题的reducer函数
 */
import storageUtils from "../utils/storageUtils";
import {combineReducers} from 'redux'
import {SET_HEAD_TITLE,RECEIVE_USER, SHOW_ERROR_MSG, RESET_USER} from './action-types'

const initHeadTitle = ""
 function headTitle(state = initHeadTitle, action) {
    switch (action.type) {
        case SET_HEAD_TITLE:
            return action.data
        default:
            return state
    }
}

/*
用来管理当前用户reducer函数
 */
const initUser = storageUtils.getUser()
function user(state = initUser, action) {

    switch (action.type) {
        case RECEIVE_USER :
            return action.user
        case SHOW_ERROR_MSG:
           const errorMsg =  action.errorMsg //不要直接修改原本的数据， 使用{...}产生新的对象
            return {...state,errorMsg}
        case RESET_USER:
            return { }
        default:
            return state
    }
}

/*
向外默认暴露的是合并产生总和reducer函数
管理总的state结构
 */
export default combineReducers ({
    headTitle,
    user
})


import {createStore} from "../redux"
import reducers from "./reducers";

let store = createStore(reducers)

export default store;

/**
 * combineReducers是解决一个矛盾
 * redux规则整个应该只能有一个仓库，在仓库里面只能有一个状态，组件非常多，每个组件都有
 * 可能有自己的状态和派发动作
 * 每个组件都配有自己的状态和reducer和动作
 * 最后统一合并成一个reducer
 * 
 */
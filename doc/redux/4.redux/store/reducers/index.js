/**
 * 仓库接收到action之后，要把动作派发给此reducer处理
 * @param {} state 
 * @param {*} action 
 */
import {combineReducers} from "../../redux"
import counter1 from "./counter1"
import counter2 from "./counter2"
// console.log("counter1",counter1)
/**
 * 要拿到2个reducer 合并成一个reducer
 */
let reducers = {
    counter1,
    counter2
}


let combinedReducer = combineReducers(reducers);
export default combinedReducer;

/*
export default function(state,action){

    let newState = {
        counter1:{number:0},
        counter2:{number:0}
    }
    newState.counter1 = reducer1({number:0},action)
    newState.counter2 = reducer2({number:0},action)
}
*/
// import React from 'react';
// import ReactDom from 'react-dom';
import {createStore} from "./redux"
let increment = document.getElementById("increment-btn")
let decrement = document.getElementById("decrement-btn")
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
//处理器 state老的状态  action动作对象
//redux应用只有一个仓库，仓库里只有一个状态
let initialState = {count:0};
function reducer(state = initialState,action){
    switch(action.type){
        case "INCREMENT" : 
            console.log(action)
            return {...state,count:state.count + action.payload.count};
        case "DECREMENT" : 
            return {...state,count:state.count - action.payload.count}
        default :
            return state;
    }
}
let store = createStore(reducer)

increment.addEventListener("click",function(){
    store.dispatch({
        type:'INCREMENT',
        payload:{count:1}
    })
})
decrement.addEventListener("click",function(){
    store.dispatch({
        type:'DECREMENT',
        payload:{count:1}
    })
})
root.innerHTML = store.getState().count
store.subscribe(()=>{
    root.innerHTML = store.getState().count
})





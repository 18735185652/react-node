// import React from 'react';
// import ReactDom from 'react-dom';
// import {HashRouter as Router,Route,Link} from "./react-router-dom";
// import Home from "./component/Home"
// import User from "./component/User"
// import Profile from "./component/Profile"

/*
ReactDom.render(<Router>
    <Link to={"/"}>Home</Link>
    <Link to={"/user"}>user</Link>
    <Link to={"/profile"}>profile</Link>
    <Route exact={true} path="/" component={Home}></Route>
    <Route  path="/user" component={User}></Route>
    <Route path="/profile" component={Profile}></Route>
</Router>,document.getElementById("root"))
*/

/**
 * JS作用域 只有2个 全局作用域 函数作用域
 * 
 */

const CHANGE_COLOR = "CHANGE_COLOR"
//处理器 state老的状态  action动作对象
//redux应用只有一个仓库，仓库里只有一个状态
let initialState = {color:'red',updateCount:0};
function reducer(state = initialState,action){
    switch(action.type){
        case "CHANGE_COLOR" : 
            return {...state,color:action.payload}
        default :
            return state;
    }

}


function createStore(reducer,initialState){
    let state = initialState; //状态
    let listeners = [];
    function dispatch(action){ //触发reducer，得到新状态
        state = reducer(state,action);
        listeners.forEach(l => l());
        console.log(listeners)
    }
   dispatch({type:'@@Redux_INIT'}); //在仓库创建的时候会先派发一次动作，目的是给初始化状态赋值
    function subscribe(listener){
        listeners.push(listener);
        return function(){
            let index = listeners.indexOf(listener);
            listeners.splice(index,1);
            //listeners = listeners.filter(item => item !== listener);
        } 
    }
    function getState(){ //获取当前状态
        return state;
    }

    return {
        dispatch,
        getState,
        subscribe
    }

}
//仓库接收一个reducer 返回 dispatch getState subscribe
let store = createStore(reducer);
console.log(store.getState())
store.subscribe(()=>{
    console.log("subscribe",store.getState())
})

// store.dispatch({
//     type:CHANGE_COLOR,
//     payload:"green"
// })
// store.dispatch({
//     type:CHANGE_COLOR,
//     payload:"yello"
// })

// store.dispatch({
//     type:CHANGE_COLOR,
//     payload:"black"
// })





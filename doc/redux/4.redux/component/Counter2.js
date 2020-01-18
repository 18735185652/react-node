import React,{useState,useEffect} from 'react';

import store from "../store";
import actions from "../store/actions/counter2";
import {bindActionCreators} from "../redux"
let boudleAction = bindActionCreators(actions,store.dispatch)

function Counter2(props){
    let [count,setCount] = useState(store.getState().counter2.count);
    //useEffect第二个参数是依赖变量的数组，
    //useEffect需要返回一个销毁的函数
    useEffect(()=>{
       return store.subscribe(()=>{
            setCount(store.getState().counter2.count)
        })
        /*
        let timer = setInterval(()=>{})
        return ()=>{clearInterval(timer)};
        */
    },[])

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>boudleAction.add(10)}>+</button>
            <button onClick={boudleAction.dec}>-</button>
        </div>
    )
}

export default Counter2;

/**
 * 对于组件来说，仓库有二个作用
 * 1. 输入 把仓库中的状态在组件中显示
 * 2. 输出 在组件中可以派发动作给仓库，从而修改仓库中的状态
 * 3. 组件需要订阅仓库中的状态变化事件，当仓库的状态发生改变的时候刷新组件
 */



 /* 
//类组件使用redux
class Counter extends React.Component{
    state = {count:store.getState().count};
    componentDidMount(){
        //当仓库的状态发生更新后，会让订阅函数执行，会更新当前组件的状态，刷新组件
       this.unSubscribe = store.subscribe(()=>{
            this.setState({count:store.getState().count})
        })
    }
    componentWillUnmount(){
        this.unSubscribe ();
    }
    add = ()=>{
        store.dispatch({
            type:types.ADD,
            payload:{count:1}
        })
    }
    dec = ()=>{
        store.dispatch({
            type:types.MINUS,
            payload:{count:1}
        })
    }
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.dec}>-</button>
            </div>  
        )
    }
}
*/


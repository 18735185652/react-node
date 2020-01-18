
export default function createStore(reducer,initialState){
    let state = initialState; //状态
    let listeners = [];
 
    function dispatch(action){ //触发reducer，得到新状态
        state = reducer(state,action);
        listeners.forEach(l => l());
        return action;
    }
   dispatch({type:'@@Redux_INIT'}); //在仓库创建的时候会先派发一次动作，目的是给初始化状态赋值
    function subscribe(listener){
        listeners.push(listener);
        return function(){ //返回一个去掉订阅的函数
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
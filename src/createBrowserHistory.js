export default function createBrowserHistory(){
    const globalHistory = window.history;
    let initialLocation = {
        pathname:window.location.pathname,
        state:globalHistory.state, //历史对象上的状态
    }
    let listeners = [];
    function createHref(location){
        let {protocol,host,pathname,search,hash} = location
        return protocol+host+pathname+search+hash;
    }
    function setState(state){
        Object.assign(history,state);
        history.length = globalHistory.length
        listeners.forEach(l=>l());
    }
    function push(path,state){
        const action = "PUSH";
        const location = {path,state}
        globalHistory.pushState(state,null,path)
        setState({action,location})
    }
    function listen(listener){
        listeners.push(listener)
    }
    function replace(path,state){
        const action = "REPLACE";
        const location = {path,state}
        globalHistory.replaceState(state,null,path)
        setState({action,location})
    }
    function go(n){
        globalHistory.go(n)
    }
    function goBack(){
        go(-1)
    }
    function goForward(){
        go(1)
    }
    let isBlock;
    function block(prompt){
        isBlock = prompt;
    }


    let history = {
        length:globalHistory.length,
        action:'POP', //当前路径是怎么来的
        location:initialLocation,
        createHref, //通过location对象得到一个路径字符串
        push, //跳转到新的路径，往历史记录添加一个新条目
        replace,//跳转到新的路径,不增加条目，会替换当前条目
        go,
        goBack,
        goForward,
        block,
        listen


    }
    return history;
}
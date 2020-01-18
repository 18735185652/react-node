//actionCreators {add(){ return {type:xxx} },dec(){}}
function bindActionCreators(actionCreators,dispatch){
    // console.log(actionCreators)
    let boundActionCreators = {}
    for(let key in actionCreators){
        boundActionCreators[key] = function(...args){
            return dispatch(actionCreators[key](...args))
        }
    }
    return boundActionCreators;
}

export default bindActionCreators;


export default function combineReducers(reducers){
  
    return function(state={},action){
       
        let nextState = {};
        for(let key in reducers){
         
            let reducer = reducers[key];
            let previousStateForKey = state[key];
            let nextStateForKey = reducer(previousStateForKey,action)
            nextState[key] = nextStateForKey;
        }
        return nextState;
    }
}
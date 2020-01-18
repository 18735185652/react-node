import * as types from "./action-types";

let initialState = {count:0};

function reducer(state = initialState,action){
    switch(action.type){
        case types.ADD :
            return {count:state.count+1}
        case types.MINUS :
            return {...state,count:state.count-1}
        default :
            return state;
    }

}

export default reducer;


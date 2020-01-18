import * as types from "../action-types";

let initialState = {count:0};

function reducer2(state = initialState,action){
    switch(action.type){
        case types.ADD2 :
            return {count:state.count+1}
        case types.MINUS2 :
            return {...state,count:state.count-1}
        default :
            return state;
    }

}

export default reducer2;


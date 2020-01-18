import * as types from "../action-types";

let initialState = {count:7};
function reducer1(state = initialState,action){
    switch(action.type){
        case types.ADD1 :
            return {count:state.count+1}
        case types.MINUS1 :
            return {...state,count:state.count-1}
        default :
            return state;
    }

}

export default reducer1;


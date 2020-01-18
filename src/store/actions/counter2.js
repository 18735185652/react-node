import * as types from "../action-types";

//这个函数用来创建action的
//这样用来创建action的函数被称为actionCreator

export function add(payload) {
    console.log("payload",payload)  //10
    return {
        type: types.ADD2
    }
}
export function dec() {
    return {
        type: types.MINUS2
    }
}

export default {
    add,
    dec
}
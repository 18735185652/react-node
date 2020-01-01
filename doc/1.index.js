import React from './react';
import ReactDOM from './react-dom/index.js';

// import App from './App';

// let element = <h1 id="title"><span>hello</span><span>world</span></h1>

// let element1 = React.createElement("h1",{id:'title'},React.createElement("span",{className:'hello',style:{color:"red"}},"hello"),React.createElement("span",null,"world"))

/*
function Welcome(props){
    return (
        <div id={props.id}>
            <span>hello</span>
            <span>world</span> 
        </div>
    )
}
*/

function Children(){
    return (
        <div id={"title"}>
           child
        </div>
    )
}
class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
           <Children/>
        ) 
    }
}


let element1 = React.createElement(Welcome,{id:'title'})
// console.log(element1)
ReactDOM.render( element1, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';

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

/*
//this绑定方案1
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }
        this.add = this.add.bind(this);
    }
    add(){
        this.setState({number:this.state.number+1})
    }
    render(){
        return (
           <div>
            <div>{this.state.number}</div>
            <button onClick={this.add}>点击</button>
           </div>
        ) 
    }
}

*/
//this绑定方案2
class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }
     
    }
    add(){
        this.setState({number:this.state.number+1})
    }
    render(){
        return (
           <div>
            <div>{this.state.number}</div>
            <button onClick={this.add.bind(this)}>点击</button>
           </div>
        ) 
    }
}

//this绑定方案3箭头函数

// let element1 = React.createElement(Welcome,{id:'title'})
// console.log(element1)

//
ReactDOM.render( <Welcome />, document.getElementById('root'));


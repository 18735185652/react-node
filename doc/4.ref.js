import React from 'react';
import ReactDOM from 'react-dom';


//ref字符串赋值形式  将被废弃
class Caculator1 extends React.Component{
    add = () => {
        console.log()
        let num1 = parseInt(this.refs.num1.value) 
        let num2 = parseInt(this.refs.num2.value) 
        this.refs.result.value = num1+num2 
    }
    render(){
        return(
            <div>
                <input ref="num1"/>+<input ref="num2"/> <button onClick={this.add}>=</button>
                <input ref="result"/>
            </div>
        )
    }

}



class Caculator2 extends React.Component{
    add = () => {
        console.log()
        let num1 = parseInt(this.num1.value) 
        let num2 = parseInt(this.num2.value) 
        this.result.value = num1+num2 
    }
    /*
    ref值是一个函数的话，那么次函数会在虚拟DOM转成真是DOM插入页面之后执行，参数就是此真是DOM
    
    */
    render(){
        return(
            <div>
                <input ref={instance => {this.num1 = instance}}/>+<input ref={instance => {this.num2 = instance}}/> <button onClick={this.add}>=</button>
                <input ref={instance => {this.result = instance}}/>
            </div>
        )
    }

}



class Caculator3 extends React.Component{
    constructor(){
        super();
        this.num1 = React.createRef(); //{current:null} 变成真实DOM
        this.num2 = React.createRef();
        this.result = React.createRef();
    }
    add = () => {
        console.log()
        let num1 = parseInt(this.num1.current.value) 
        let num2 = parseInt(this.num2.current.value) 
        this.result.current.value = num1+num2 
    }
    /*
    ref值是一个函数的话，那么次函数会在虚拟DOM转成真是DOM插入页面之后执行，参数就是此真是DOM
    
    */
    render(){
        return(
            <div>
                <input ref={this.num1 }/>+<input ref={this.num2}/> <button onClick={this.add}>=</button>
                <input ref={this.result}/>
            </div>
        )
    }

}

//ref reference引用：可以引用一个虚拟DOM的
//1. ref="xxx" this.refs.xxx.value
//2. ref={init=>thix.xxx=init} this.xxx.value
//3. ref=this.xxx this.xxx=React.createRef()  this.xxx.current.value





//通过ref拿到子组件的实例
//点击父组件button，让子组件获得焦点

class User extends React.Component{
    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    render(){
        return (
           <input ref={this.inputRef}/>
        )
    }
}

class Form extends React.Component{
    constructor(){
        super();
        this.userName = React.createRef()
    }
    getFocus=()=>{
        this.userName.current.inputRef.current.focus()
    }
    render(){
        return (
            <div >
               <User ref={this.userName}/>
                <button onClick={this.getFocus}>click</button>     
            </div>
        )
    }
}



/**
 * 如何给函数组件添加ref
 */

 function User1(props){
     return <input ref={props.ref2}/>
 }

 function forwardRef(funComponent){
     
    return class extends React.Component{
        render(){
            return funComponent(this.props,this.props.ref2)
        }
    }
 }
 let NewUser1 = forwardRef(User1)


class Form2 extends React.Component{
    constructor(){
        super();
        this.userName = React.createRef()
    }
    getFocus=()=>{
        this.userName.current.focus()
    }
    render(){
        return (
            <div >
                <NewUser1 ref2={this.userName}/>
                <button onClick={this.getFocus}>click</button>     
            </div>
        )
    }
}








ReactDOM.render( <Form2 />, document.getElementById('root'));


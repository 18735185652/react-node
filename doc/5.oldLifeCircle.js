import React from 'react';
import ReactDOM from 'react-dom';




/**
 * 只有类组件才有生命周期
 */




class ChildCounter extends React.Component{
    constructor(){
        super();
        console.log("child constructor")
    }
    componentWillMount(){
        console.log("child componentWillMount")
    }
    componentDidMount(){
        console.log("child componentDidMount")
    }
    componentWillReceiveProps(newProps){
        console.log("child:componentWillReceiveProps,接收到新的props属性",newProps)
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log("child shouldComponentUpdate")
        return true
    }
    componentWillUpdate(){
        console.log("child componentWillUpdate") 
    }
    componentDidUpdate(){
        console.log("child componentDidUpdate") 
    }
    componentWillUnmount(){
        console.log("child componentWillUnmount 组件将要销毁") 
    }
    
    render(){
       return <p>{this.props.count}</p>
    }
}

class Form2 extends React.Component{
   static defaultProps = { //1.设置默认属性
       name:'jack'
   } 
   constructor(){
       super();
       this.state = { //2.执行此构造函数，设置初始状态
           count:0
       }
       console.log("1,constructor 执行此构造函数，设置初始状态",)
   }
   componentWillMount(){
    console.log("2,componentWillMount 组件将要挂载到页面",)
   }
  
   handleClick=()=>{
       this.setState({count:this.state.count+1})
   }
   //询问组件是否需要更新 返回布尔值 true更新 false不更新
   shouldComponentUpdate(nextProps,nextState){
        console.log("5,shouldComponentUpdate 询问组件是否需要更新?")
        // return nextState.count %3 === 0;
        return true
   }
  
   componentWillUpdate(){
       console.log("6.componentWillUpdate 组件将要更新")
   }
   componentDidUpdate(){
    console.log("7.componentDidUpdate 组件更新完毕")
   }

   //render函数的作用是返回虚拟dom
    render(){
        console.log("3,render 确定要显示的虚拟dom是什么",)
        return (
            <div >
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>+</button> 
                {
                    this.state.count <3 ?<ChildCounter count = {this.state.count}/>  :null
                } 
            </div>
        )
    }
    //当此虚拟DOM已经被挂载到真实DOM之后会执行componentDidMount,这个时候才能获得真实dom元素
    componentDidMount(){
        console.log("4,componentDidMount 组件将要挂载完成后",)
   }

}


//生命周期
//父组件contructor初始化数据 => 父组件componentWillMount => render => 子组件constructor => 子组件componentWillMount => 子组件componentDidMount
//=> 父组件componentDidMount

//有状态更新的时候
//父组件 shouldComponentUpdate => 父组件componentWillUpdate => 父组件render =>子组件componentWillReceiveProps => 子组件shouldComponentUpdate =>
//子组件componentWillUpdate =>子组件componentDidUpdate => 父组件componentDidUpdate





ReactDOM.render( <Form2 />, document.getElementById('root'));


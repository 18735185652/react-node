import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 只有类组件才有生命周期
 * 新生命周期去掉三个 componentWillMount componentWillUpdate componentWillReceiveProps
 * 薪增了2个  
 * getDeriveStateFromProps  getSnapshotBeforeUpdate
 */

class ChildCounter extends React.Component{
    state = {name:'childCounter',count:0}
    componentDidMount(){
        console.log("child componentDidMount")
    }
//getDerivedStateFromProps 存在只为了一个目的。它让组件在 props 发生改变时更新它自身的内部 state。 
//一个常规的准则，应该保守地使用 derived state。    
    static getDerivedStateFromProps(nextProps,nextState){
        console.log("getDeriviedStateFromProps")
        if(nextProps.count %2 ===0){
            return {count:nextProps.count*2}
        }else{
            return {count:nextProps.count*3}
        }
       
    }    

    shouldComponentUpdate(nextprops,nextstate){
        console.log("child shouldComponentUpdate",nextprops.count)
        return {count:nextprops.count}
    }
 
    componentDidUpdate(){
        console.log("child componentDidUpdate") 
    }
    componentWillUnmount(){
        console.log("child componentWillUnmount 组件将要销毁") 
    }
    
    render(){
       return <p>{this.state.count}</p>
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
                <ChildCounter count = {this.state.count}/>
            </div>
        )
    }
    //当此虚拟DOM已经被挂载到真实DOM之后会执行componentDidMount,这个时候才能获得真实dom元素
    componentDidMount(){
        console.log("4,componentDidMount 组件将要挂载完成后",)
   }

}









ReactDOM.render( <Form2 />, document.getElementById('root'));


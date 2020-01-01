import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 1.代码会冗余
 * 2.工作量大
 * 3.逻辑耦合
 * 高阶组件为了解决逻辑复用的问题
 * 如果包裹太多的话 就非常复杂
 */
//从localstrage里面加载数据 
function loadFromLocal(OldComponent,name){
    return class extends React.Component{
        state = {value:null}
        componentDidMount(){
           let value = localStorage.getItem(name);
           this.setState({value})
        }
        render(){
            return <OldComponent value={this.state.value}/>
        }
    }

}

const UserName = (props)=>{
    return <input defaultValue = {props.value}/>;
}
const PassWord = (props)=>{
    return <input defaultValue = {props.value}/>;
}



let LocalUserName = loadFromLocal(UserName,'username');
let LocalPassWord = loadFromLocal(PassWord,"password")
ReactDOM.render( <div>
    <LocalUserName />
    <LocalPassWord/>
</div>, document.getElementById('root'));


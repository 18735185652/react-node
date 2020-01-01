import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 1.代码会冗余
 * 2.工作量大
 * 3.逻辑耦合
 * 高阶组件为了解决逻辑复用的问题
 * 如果包裹太多的话 就非常复杂
 */
function WithLogger(OldComponent){
    return class extends React.Component{
        componentWillMount(){
            this.start = Date.now();
        }
        componentDidMount(){
            console.log(Date.now()-this.start)
        }
        render(){
            return <OldComponent {...this.props}/>
        }
    }
}

class App extends React.Component{ 
  
    render(){    
       return (
            <div >
                {this.props.name}
            </div>
       )
    }
}

let LoggerApp = WithLogger(App);

ReactDOM.render( <LoggerApp name="zf" />, document.getElementById('root'));


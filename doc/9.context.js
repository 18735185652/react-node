import React from 'react';
import ReactDOM from 'react-dom';

function createContext(initialValue){
    
    class Provider extends React.Component{
        static contextValue = initialValue;
        constructor(props){
            super(props);
            Provider.contextValue = props.value;
        }
        // componentWillReceiveProps(nextProps){
        //     contextValue = nextProps.value;
        // }
        // static getDerivedStateFromProps(nextProps,nextState){
        //     Provider.contextValue = nextProps.value
        //     return null;
        // }
        render(){
            Provider.contextValue = this.props.value
            return this.props.children;
        }
    }
    class Consumer extends React.Component{
        render(){
            return this.props.children(Provider.contextValue);
        }
    }
    return {Provider,Consumer}
   
}

// let ThemeContext = React.createContext();

let ThemeContext = createContext('green');
//上下文
function Header(){
    //Consumer 消费者 意思是我要消费上下文中的Provider里的value
    return (
       <ThemeContext.Consumer>
           {
                (value)=>(
                    <div style={{border:`1px solid ${value.color}`}}>
                         <Title />
                    </div>
                )
           }
        </ThemeContext.Consumer>
    )
}

class Title extends React.Component{
    static contextType = ThemeContext;
    constructor(props,context){
        super(props);
        //context 就代表上下文对象=ThemeContext.Provider = this.context
        //在构造函数里，是不能通过this.context拿到上下文对象的，只能通过第二个参数去取
        // console.log(" this.context",  this.myContext.color)
    }
    render(){
        this.myContext = Title.contextType.Provider.contextValue;
        return (
            <div style={{border:`1px solid ${this.myContext.color}`}}>
                title
             </div>
        )
    }
}

function Countent(){
    return (
       <ThemeContext.Consumer>
           {
            (value)=>(
                <div style={{border:`1px solid ${value.color}`}}>
                    coutent
                </div>
            )
           }
        </ThemeContext.Consumer>
    )
}
function Main(){
    //Consumer 消费者 意思是我要消费上下文中的Provider里的value
    return (
       <ThemeContext.Consumer>
           {
            (value)=>(
                <div style={{border:`1px solid ${value.color}`}}>
                    <Countent />
                    <button onClick={()=>{value.changeColor("red")}}>变红</button>
                    <button  onClick={()=>{value.changeColor("green")}}>变绿</button>
                </div>
            )
           }
        </ThemeContext.Consumer>
    )
}

class Panel extends React.Component{ 
    state = {color:'green'}
    changeColor = (color)=>{
        this.setState({
            color
        })
    }
    render(){ 
        let value = {color:this.state.color,changeColor:this.changeColor };
       return (
        <ThemeContext.Provider value={value}>
            <div style={{border:`1px solid ${this.state.color}`,width:200}}>
                <Header />
                <Main />
            </div>
        </ThemeContext.Provider>
       )
    }
}
ReactDOM.render( <Panel />, document.getElementById('root'));


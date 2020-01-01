import React from 'react';
import ReactDOM from 'react-dom';
let ThemeContext = React.createContext();

//上下文
class Header extends React.Component{ 
    static contextType = ThemeContext;
    render(){ 
       return (
        <div style={{border:`1px solid ${this.context.color}`}}>
            <Title />
        </div>
       )
    }
}

class Title extends React.Component{ 
    static contextType = ThemeContext;
    render(){ 
       return (
        <div style={{border:`1px solid ${this.context.color}`}}>
            title
        </div>
       )
    }
}

class Countent extends React.Component{ 
    static contextType = ThemeContext;
    render(){ 
       return (
        <div style={{border:`1px solid ${this.context.color}`}}>
            Countent
        </div>
       )
    }
}
class Main extends React.Component{ 
    static contextType = ThemeContext;
    render(){ 
       return (
        <div style={{border:`1px solid ${this.context.color}`}}>
            <Countent />
            <button onClick={()=>{this.context.changeColor("red")}}>变红</button>
            <button  onClick={()=>{this.context.changeColor("green")}}>变绿</button>
         </div>
       )
    }
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


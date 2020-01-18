import React,{useState} from "react";
import RouterContext from "./RouterContext";

/**
 * HashRouter只是一个容器，并没有Dom结构，他渲染的就是它子组件，为了向下层传递 location
 * 
 */

 export default class HashRouter extends React.Component{
    state = {
        location:{
            pathname:window.location.hash.slice(1),
            state:window.history.state
        }
    }
    componentDidMount(){
        window.addEventListener("hashchange",(event) => {
            this.setState({
                ...this.state,
                location:{
                    ...this.state.location,
                    pathname:window.location.hash.slice(1)
                }
               
            })
        })
        window.location.hash = window.location.hash || "/"
    }
    render(){
        let history = {
            location:this.state.location,
            push(path,state){
                window.location.hash = path;
            }
        }
        let routerValue = {
            location:this.state.location,
            history
        }
        return (
            <RouterContext.Provider value={routerValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
 }

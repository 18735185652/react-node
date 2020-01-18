import React from "react";
import RouterContext  from "./RouterContext"

function Link(props){
    return (
        <RouterContext.Consumer>
           {
                (routerValue) =>(
                    <a 
                   //href={`#${props.to}`} 
                      onClick={()=>routerValue.history.push(props.to)}
                   >{props.children}</a>
                )
           }
        </RouterContext.Consumer>
       
    )
}


export default Link;

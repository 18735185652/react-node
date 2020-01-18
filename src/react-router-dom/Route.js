import React from "react";
import RouterContext from "./RouterContext";
import pathToRegexp from "path-to-regexp";
/**
 * Route 代表一条路由规则
 * path 规则的路由
 * component 渲染的组件
 * 如果说当前路径 #/  hashRouter state location pathname =》 context传下来了
 */
export default class Route extends React.Component{
    static contextType = RouterContext; //this.context.location.pathname
    render(){
        let {path,component:RouteComponent,exact} = this.props;
        let pathname = this.context.location.pathname;
        let paramNames = [];
      
        let reg = pathToRegexp(path,paramNames,{end : exact ? true : false})
        if(reg.test(pathname)){
            return <RouteComponent location={this.context.location} />
        }
        return null;
    }
}
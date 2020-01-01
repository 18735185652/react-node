function createElement(type, config, children) {
    let props = {};
    for (let key in config) {
        props[key] = config[key];
    }
    let childrenLength = arguments.length - 2;
    //如果只有一个儿子，那么props.children是一个字符串(文本节点)，也就是一个ReactNode
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        //如果儿子的数量大于一个 把所有的儿子放到一个数组里 传给props
        props.children = Array.prototype.slice.call(arguments, 2);
    }

    return {
        type,
        props
    }
}
class Component{
    static isReactComponent = true;
    constructor(props){
        this.props = props;
    }
}

export default {
    createElement,
    Component
}
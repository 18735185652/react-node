//element React节点 可以是react元素 节点 字符串
//container 父容器

function render(node, container) {
    if (typeof node === "string") {
        return container.appendChild(document.createTextNode(node))
    }
    let type = node.type; // h1 Function clsssComponent
    let props = node.props;
   
    if (type.isReactComponent) {
        let element = new type(props).render()
        type = element.type;
        props = element.props;
        if(typeof element.type === "function"){
           return render(element,container);
        }
    } else if (typeof type === "function") {
        let element = type(props);
        type = element.type;
        props = element.props;
        if(typeof element.type === "function"){        
            return render(element,container);
        }
    }
    console.log("type",type)
    let domElement = document.createElement(type);
    //迭代属性对象中的所有属性
    for (let propName in props) {
        if (propName === "children") {
            let children = props.children; //
            if (!Array.isArray(children)) {
                children = [children];
            }
            children.forEach(child => render(child, domElement))
        } else if (propName === "className") {
            domElement.className = props[propName];
        } else if (propName === "style") {
            let styleObject = props.style;
            /* 
             for(let attr in styleObject){
                 domElement.style[attr] = styleObject[attr];
             }
             */
            let cssText = Object.keys(styleObject).map(attr => {
                return `${attr.replace(/([A-Z])/g,function(){
                    return '-'+arguments[1].toLowerCase();
                })}:${styleObject[attr]}`
            }).join(";")

            domElement.style.cssText = cssText;
        } else {
            domElement.setAttribute(propName, props[propName]);
        }
    }
    container.appendChild(domElement);
}

export default {
    render
}

/*
let str = "fontSize"
str = str.replace(/([A-Z])/g, function () {
    console.log("arguments", arguments)
    return '-' + arguments[1].toLowerCase();
})
console.log(str)

*/





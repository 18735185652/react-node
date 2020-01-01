//element React节点 可以是react元素 节点 字符串
//container 父容器

function render(node, container) {
    let type = node.type; // h1 Function clsssComponent
    let props = node.props;
    if (typeof node === "string") {
        return container.appendChild(document.createTextNode(node))
    }
    if (type.isReactComponent) {
        let element = new type(props).render()
        type = element.type;
        props = element.props;
    } else if (typeof type === "function") {
        let element = type(props);
        type = element.type;
        props = element.props;
    }
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

let str = "fontSize"
str = str.replace(/([A-Z])/g, function () {
    console.log("arguments", arguments)
    return '-' + arguments[1].toLowerCase();
})
console.log(str)


// class Animal{
//     state={number:0}
// }



"use strict";

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var Animal = function Animal() {
    _classCallCheck(this, Animal);

    _defineProperty(this, "state", {
        number: 0
    });
};


var animal = new Animal();

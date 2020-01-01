/*
let updateQueue = [];
let state = {
    number: 0
}

function setState(newState) {
    updateQueue.push(newState);
}

setState({
    number: state.number + 1
});
setState({
    number: state.number + 1
});
setState({
    number: state.number + 1
});

//updateQueue ->  [ { number: 1 }, { number: 1 }, { number: 1 } ]

updateQueue.forEach(item => state = item)
console.log(state);

*/
//当你在进行事件处理的时候，会进行批量更新状态，先缓存所有的更新，然后等事件结束之后进行
//统一更新


/*
class Component{
    constructor(){
        this.state = {number:0}
        this.batchUpdate= false;
        this.updateQueue = [];
    }
    add(){
        this.batchUpdate= true;  //开启批量更新模式

        this.setState({number: this.state.number + 1});
        this.setState({number: this.state.number + 1});
        this.setState({number:this.state.number + 1});
        console.log(this.state.number) // 0
        this.flushUpdate()
    }
    setState(newState){
        if(this.batchUpdate){
            this.updateQueue.push(newState)
        }
    }
    flushUpdate(){
        this.updateQueue.forEach(newState=>this.state = newState);
    }
}

let c = new Component();
c.add();
console.log(c.state)
*/

/*
class Component{
    constructor(){
        this.state = {number:0}
        this.batchUpdate= false;
        this.updateQueue = [];
        this.callbackQueue = [];
    }
    add(){
        this.batchUpdate= true;  //开启批量更新模式

        //现在不推荐直接写值，推荐setState里面放函数  参数是上一个状态，返回值是下一个状态
        this.setState((previousState)=>({number: previousState.number + 1}),()=>{
            console.log(1,this.state)
        });
        this.setState((previousState)=>({number: previousState.number + 2}),()=>{
            console.log(2,this.state)
        });
        this.setState((previousState)=>({number: previousState.number + 3}),()=>{
            console.log(3,this.state)
        });
        console.log(this.state.number) // 0
        this.flushUpdate()
    }
    setState(updateState,callback){
        if(this.batchUpdate){
            this.updateQueue.push(updateState)
            this.callbackQueue.push(callback)
        }
    }
    flushUpdate(){
      //  this.updateQueue.forEach(newState=>this.state = newState);
      let state = this.state;
      for(let i =0;i<this.updateQueue.length;i++){
        state = this.updateQueue[i](state);  // {number:1}

      }
      this.state = state;
      this.callbackQueue.forEach(cb=>cb());
    }
}

let c = new Component();
c.add();
console.log(c.state)

*/



class Component{
    constructor(){
        this.state = {name:'jack',number:0}
        this.batchUpdate= false;
        this.updateQueue = [];
        this.callbackQueue = [];
        let oldAdd = this.add;
        this.add = (...args)=>{
            this.batchUpdate= true;
            console.log("args",args)
            oldAdd.apply(this,args);
            this.flushUpdate()
            this.batchUpdate = false;
        }
    }
    add(num){
          //开启批量更新模式
        //在setTimeout里面如果调用setState的话，会立刻更新
        console.log("num",num)
        setTimeout(()=>{
            this.setState({number: this.state.number + num});
            this.setState({number: this.state.number + 4});
            console.log(this.state)
        })
        
       
    }
    setState(updateState,callback){
        if(this.batchUpdate){
            this.updateQueue.push(updateState)
            if(callback)this.callbackQueue.push(callback)
        }else{
            this.state = typeof updateState==="function"? Object.assign(this.updateState(this.state)):Object.assign(this.state,updateState);   
        }
    }
    flushUpdate(){
      let state = this.state;
      for(let i =0;i<this.updateQueue.length;i++){
        state = typeof this.updateQueue[i] === "function" ? this.updateQueue[i](state):this.updateQueue[i]; 
      }
      this.state = Object.assign(this.state,state);
      this.callbackQueue.forEach(cb=>{
          if(typeof cb==="function")cb()
      });
     
    }
}

let c = new Component();
c.add(5);









//在组件类的实例中 this 是不是类的实例？
//一般来说类的方法的this 是 undefined
//如何让普通方法的this指向组件实例
//1.匿名函数   onClick={()=>{this.add()}} add(){}
//2.bing绑定   onClick={this.add.bind(this)}} add(){}
//             构造函数绑定this.add = this.add.bind(this)


//类有实例，而且类不能轻易销毁，而且类上的属性很多，管理起来比较麻烦，也难以销毁
//多用函数组件，少用类组件 但是函数组件没有状态，也没有声明周期




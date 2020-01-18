import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 只有类组件才有生命周期
 * 新生命周期去掉三个 componentWillMount componentWillUpdate componentWillReceiveProps
 * 薪增了2个  
 * getDeriveStateFromProps  getSnapshotBeforeUpdate
 */

class ChildCounter extends React.Component{
    constructor(){
        super();
        this.container = React.createRef();
        this.state = {
            messages:[1,2]
        }
    }
    addMessage = ()=>{
       
        this.setState({
            messages:[this.state.messages.length,...this.state.messages,]
        },()=>{
            // console.log(this.state.messages)
        })
    }
    componentDidMount(){
       this.$timerID = window.setInterval(() => {
         
            this.addMessage()
        }, 1000);
    }
    //先获取DOM更新前的快照
    getSnapshotBeforeUpdate(){
        //scrollHeight 获取容器的内容高度
       

        console.log("getSnapshopBeforeUpdate")
       
       return this.container.current.scrollHeight; //内容高度 200px
    }
    componentDidUpdate(prevProps,prevState,prevScrollHeight){
        
        let scrollHeight = this.container.current.scrollHeight;
        let newScrollTop =this.container.current.scrollTop + (scrollHeight - prevScrollHeight) ;
        this.container.current.scrollTop = newScrollTop;
      
    }
    componentWillUnmount(){
        this.clearInterval(this.$timerID);
    }

    render(){
       let style={
           height:100,
           width:200,
           border:'1px solid red',
           overflow:'auto'
       }
       let color = ['red','green','blue','yellow']
       return (
        <div style={style} ref={this.container}>
            {
                this.state.messages.map((message,index)=>(
                    <div key={index} style={{backgroundColor:color[index%4]}}>{message}</div>
                ))
            }
        </div>
       )
    }
}










ReactDOM.render( <ChildCounter />, document.getElementById('root'));


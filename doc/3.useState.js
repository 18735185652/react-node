import React from 'react';
import ReactDOM from 'react-dom';

function useState(initialState){
    let count = initialState;
    function setCount(newState){
        count = count + newState
        console.log("count",count);
    }
    return [count,setCount];
}
function Couter(){
    let [count,setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>click</button>
        </div>
    )
}

ReactDOM.render( <Couter />, document.getElementById('root'));


import React from 'react';
import ReactDom from 'react-dom';
import Counter1 from "./component/Counter1";
import Counter2 from "./component/Counter2";
ReactDom.render(<>
    <Counter1 />
    <hr/>
    <Counter2 />
</>,document.getElementById("root"));





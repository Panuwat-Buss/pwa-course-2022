import { useState } from 'react';
import './TestState.css';

function TestState() {
    const [size, setSize] = useState("small");
    const [count, setCount] = useState(10);

    function imcrement() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function reset() {
        setCount(10);
    }

    function changSize(){
        if(size === "small"){
            setSize("medium")
        } if(size === "medium"){
            setSize("large")
        } if(size === "large"){
            setSize("small")
        }
    }


    return (
        <div>
            <input type="button" value="click me" onClick={changSize}/>
            <div className={"circle "+size}/>


        </div>
    )
}

export default TestState;
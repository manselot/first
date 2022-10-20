import "../components/styles/counter.css"
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((count) => count + 1);
    }
    
    const handleDecrement = () => {
        setCount((count) => count - 1);
    }

    return (
        <div className={"counter_frame"}>
          <p className={"counter_text"}>Счётчик</p>
          <div className={"button_container"}>
            <button className={"counter_button"} onClick={handleDecrement}>-</button>
            <p className={"counter_text"}>{count}</p>
            <button className={"counter_button"} onClick={handleIncrement}>+</button>
          </div>
        </div>
    )
}

export default Counter;

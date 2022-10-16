import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  }
  
  const handleDecrement = () => {
    setCount((count) => count - 1);
  }

  return (
    <div className="root">
      <nav className={"up_frame"}>
        <h2 className={"up_text"}>"UI/UX - 4 курс Щитов"</h2>
      </nav>
      <main className={"main"}>
        <div className={"button_container"}>
          <button className={"button"}>Задание 1</button>
          <button className={"button"}>Задание 2</button>
          <button className={"button"}>Задание 3</button>
          <button className={"button"}>Задание 4</button>
        </div>
        <div className={"counter_frame"}>
          <p className={"counter_text"}>Счётчик</p>
          <div className={"button_container"}>
            <button className={"counter_button"} onClick={handleDecrement}>-</button>
            <p className={"counter_text"}>{count}</p>
            <button className={"counter_button"} onClick={handleIncrement}>+</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

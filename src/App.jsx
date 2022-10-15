import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

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
          <p>Текст1</p>
          <p>Текст2</p>
        </div>
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="root">
      <nav className={"up_frame"}>
        <h2 className={"up_text"}>"UI/UX - 4 курс Щитов"</h2>
      </nav>
      <div className={"button_container"}>
          <button>Кнопка 1</button>
          <button>Кнопка 2</button>
        </div>
      <main className={"main"}>
        <button>Кнопка 3</button>
      </main>
    </div>
  )
}

export default App

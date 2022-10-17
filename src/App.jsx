import "./index.css"
import Navbar from "./components/Navbar";
import Tasklist from "./components/Tasklist";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="root">
      <main className={"main"}>
        <Navbar/>
        <Tasklist/>
        <Counter/>
      </main>
    </div>
  )
}

export default App

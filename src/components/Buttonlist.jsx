import "./styles/buttonlist.css"
import { Link } from "react-router-dom";

const Buttonlist = () => {
    return (
        <div className={"button_container"}>
          <Link to={"/index"}>
            <button className={"button"}>На главную</button>
          </Link>
          <Link to={"/counter"}>
            <button className={"button"}>Счётчик</button>
          </Link>
          <Link to={"/tutorial"}>
            <button className={"button"}>API туториал</button>
          </Link>
          <button className={"button"}>Задание 4</button>
        </div>
    )
}

export default Buttonlist;

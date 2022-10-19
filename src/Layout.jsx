import "./components/styles/index.css"
import Navbar from "./components/Navbar";
import Buttonlist from "./components/Buttonlist";
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className="root">
            <Navbar/>
            <Buttonlist/>
            <main className={"main"}>
                {children}
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
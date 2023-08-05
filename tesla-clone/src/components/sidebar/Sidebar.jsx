import { useNavigate } from "react-router-dom";
import { headerElements } from "../header/Header";
import "./Sidebar.css"
export default function Sidebar({showSidebar, setShowSidebar}){
    const navigate = useNavigate()
    if(!showSidebar) return null;
    return (
        <nav className="sidebar">
            <button onClick={() => {
                setShowSidebar(false)
            }}>X</button>
            <ul>
                {
                    headerElements.map(({label, route}) => {
                        if(route === "Menu") return null;
                        return <li onClick={() => {
                            navigate(route)
                        }} key={label}>{label}</li>
                    }
                    )
                }
            </ul>

        </nav>
        
    )
    
}
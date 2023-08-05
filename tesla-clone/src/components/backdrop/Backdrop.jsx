
import "./Backdrop.css"
export default function Backdrop({onClick}){
    return  (
        <div className="backdrop" onClick={onClick}></div>
    ) 
}
import "./Product.css"
import { useSetRecoilState } from "recoil"
import { CartState } from '../global-state/CartState';
import {v4 as uuidv4} from "uuid"


export default function Product(props){
    const setCart = useSetRecoilState(CartState)
    const {image,title,description,price} = props
    function addtoCard(){
        const uniqueId = uuidv4();
        setCart((prevCard) => [
            ...prevCard,{...props,id:uniqueId}
        ])
        
        
    }
    return(
        <div className="product">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">{price}$</p>
            <button onClick={addtoCard} className="product-button" >Add To Card</button>
       </div>
    )
}
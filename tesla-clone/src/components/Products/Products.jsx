import "./Products.css";
import Product from "../Product/Product";
import React from "react";
import cybertruck from "../../assets/cybertruck.jpg";
import modelS from "../../assets/model-s.jpg";
import modelX from "../../assets/model-x.jpg";
import modelY from "../../assets/model-s1.jpg";

const products=[
    {
        id:1,
        image:cybertruck,
        title:"Model S",
        description:"Order Online for Touchless Delivery",
        price:"$69,420",
    }
    ,
    {
        id:2,
        image:modelS,
        title:"Model S",
        description:"Order Online for Touchless Delivery",
        price:"$69,420",

    }
    ,
    {
        id:3,
        image:modelX,
        title:"Model X",
        description:"Order Online for Touchless Delivery",
        price:"$69,420",
    }
    ,
    {
        id:4,
        image:modelY,
        title:"Model Y",
        description:"Order Online for Touchless Delivery",
        price:"$69,420",
    }
]

export default function Products(){
    return(
        <div className="products">
            {products.map((product)=>(
                <Product
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                />
    ))}
        </div>
    )
            

}
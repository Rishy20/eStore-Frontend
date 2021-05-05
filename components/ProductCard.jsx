import React from "react";

import image from 'url:../public/images/iphone.jpg';
import "./ProductCard.css"
import Button from "./Button";


function ProductCard(props){
    return(
        <div className="product-card">

            <div className="product-img">
                <img src={"http://localhost:3000/"+props.img} />
            </div>
            <div className="product-title">{props.name}</div>
            <div className="product-price">Rs.{props.price}</div>
            <Button btnStyle="btn-cart" name="Add to Cart" onclick={props.onClick} />
        </div>
    )
}

export default ProductCard
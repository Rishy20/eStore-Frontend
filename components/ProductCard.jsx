import React from "react";

import image from 'url:../public/images/iphone.jpg';
import "./ProductCard.css"
import Button from "./Button";


function ProductCard(){
    return(
        <div className="product-card">

            <div className="product-img">
                <img src={image} />
            </div>
            <div className="product-title">Iphone 12</div>
            <div className="product-price">Rs.25,000</div>
            <Button btnStyle="btn-cart" name="Add to Cart" />
        </div>
    )
}

export default ProductCard
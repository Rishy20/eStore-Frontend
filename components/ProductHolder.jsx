import React from "react";
import ProductCard from "./ProductCard";
import "./ProductHolder.css"
import PageTitle from "./PageTitle";

function ProductHolder(){

    return(
        <div className="product-holder-div">
            <PageTitle title="All Products"/>
            <div className="product-holder">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )

}

export default ProductHolder
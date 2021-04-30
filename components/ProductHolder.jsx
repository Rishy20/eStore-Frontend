import React from "react";
import ProductCard from "./ProductCard";
import "./ProductHolder.css"
import PageTitle from "./PageTitle";
import image from 'url:../public/images/iphone.jpg';

const products = [
    {
        id:1,
        name:"Iphone 12",
        price:25000,
        img:image
    },
    {
        id:2,
        name:"Iphone 1",
        price:25000,
        img:image
    },
    {
        id:3,
        name:"Iphone 2",
        price:25000,
        img: image
    },
    {
        id:4,
        name:"Iphone 3",
        price:25000,
        img:image
    },
    {
        id:5,
        name:"Iphone 4",
        price:25000,
        img:image
    },
    {
        id:6,
        name:"Iphone 5",
        price:25000,
        img:image
    },
    {
        id:7,
        name:"Iphone 6",
        price:25000,
        img:image
    },
]

function ProductHolder({callback}){

    function addToCart(product){
        // console.log(product);
        callback(product);
    }
    return(
        <div className="product-holder-div">
            <PageTitle title="All Products"/>
            <div className="product-holder">
                {
                    products.map(product => {
                        return <ProductCard img={product.img} name={product.name} price={product.price} onClick={()=>addToCart(product)} key={product.id} id={product.id}/>
                    })
                }
            </div>
        </div>
    )

}

export default ProductHolder
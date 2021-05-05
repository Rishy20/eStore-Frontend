import React, {useState} from 'react';
import ProductHolder from "../ProductHolder";

const url = "http://localhost:8280/estore?service=products"
function Home({addToCart}){

    return(
        <div className='Home'>
                <ProductHolder callback={addToCart} url={url} title={"All Products"}/>
        </div>
    )
}
export default Home;
import React, {useState} from 'react';
import ProductHolder from "../ProductHolder";


function Home({addToCart}){

    return(
        <div className='Home'>
                <ProductHolder callback={addToCart}/>
        </div>
    )
}
export default Home;
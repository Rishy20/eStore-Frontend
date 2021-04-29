import React from 'react';
import './App.css'
import Header from "./components/Header";
import UserRegister from "./components/pages/UserRegister";
import Login from "./components/pages/Login";
import ProductCard from "./components/ProductCard";
import ProductHolder from "./components/ProductHolder";


function App(){
return(
    <div className='App'>

        <Header/>
        <div className="main">
            <ProductHolder/>

        </div>
    </div>
)
}
export default App;
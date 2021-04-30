import React, {useState} from "react";

import "./Header.css"
import Search from "./Search";
import Cart from "./Cart";

const WEBSITE = "eStore";
function Header({toggleCart}){


    return(
        <div className="header">
            <span className="header-title">{WEBSITE}</span>
            <div className="search-bar">
                <Search/>
            </div>

            <span className="login-links">
                <a className="header-link" href="#">Login</a>
                <a className="header-link" href="#">Register</a>
                <span className="header-link" href="#" onClick={toggleCart}><i className="fas fa-shopping-cart cart-icon"/></span>
            </span>


        </div>
    )
}
export default Header;
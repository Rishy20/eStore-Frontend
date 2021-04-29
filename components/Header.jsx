import React from "react";

import "./Header.css"
import Search from "./Search";

const WEBSITE = "eStore";
function Header(){
    return(
        <div className="header">
            <span className="header-title">{WEBSITE}</span>
            <div className="search-bar">
                <Search/>
            </div>

            <span className="login-links">
                <a className="header-link" href="#">Login</a>
                <a className="header-link" href="#">Register</a>
                <a className="header-link" href="#"><i className="fas fa-shopping-cart cart-icon"/></a>
            </span>

        </div>
    )
}
export default Header;
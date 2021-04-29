import React from "react";

import Button from "./Button";
import "./Search.css"

function Search(){
    return(
        <div className="search">

                <input className="input-box" name="search" placeholder="Enter the name of the Product to Search"/>


            <Button btnStyle="btn-search" name="Search"/>
        </div>
    )
}
export default Search;
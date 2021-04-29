import React from "react";
import store from 'url:../public/images/shop.svg';
import "./SideImage.css"
export default function SideImage(){
    return(
        <div className="side-img">
            <div className="store-name-container">
                <img src={store} className="store-icon"/>
                <span className="store-name">eStore</span>
                <h5 className="copyright">Copyright © 2021 eStore. All rights reserved.</h5>
            </div>
        </div>
    )
}
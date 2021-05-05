import React from "react";
import jwt_decode from "jwt-decode";


const checkLogin = () => {
    const check = () => {
        const isAuth = !!localStorage.getItem("token");
        if (isAuth) {
            let decoded = jwt_decode(localStorage.getItem("token"));
            return decoded.userType;
        } else {
            return false;
        }
    };
    return check;
};

export default checkLogin;
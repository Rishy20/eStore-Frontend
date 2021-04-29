import React from 'react';
import './App.css'
import Header from "./components/Header";
import UserRegister from "./components/pages/UserRegister";
import Login from "./components/pages/Login";


function App(){
return(
    <div className='App'>
        <Login/>
        {/*<Header/>*/}
        {/*<div className="main">*/}
        {/*    <UserRegister/>*/}
        {/*</div>*/}
    </div>
)
}
export default App;
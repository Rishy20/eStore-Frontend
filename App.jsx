import React, {useState} from 'react';
import './App.css'
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/pages/Home";
import Billing from "./components/pages/Billing";
import image from 'url:./public/images/iphone.jpg';
import UserRegister from "./components/pages/UserRegister";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Login from "./components/pages/Login";
import checkLogin from "./components/CheckLogin";
import SearchResult from "./components/pages/SearchResult";
import OrderSuccess from "./components/OrderSuccess";


function App(){

    const [isCartClicked,setIsCartClicked] = useState(false);
    const [loginStatus,setLoginStatus] = useState(checkLogin());

    function toggleCart(){
        setIsCartClicked(!isCartClicked);
    }
    const [cartProducts,setCartProducts] = useState([]);

    function addToCart(product){

        setCartProducts(prevState => {
            const isItemInCart = prevState.find(item=>item.id === product.id)
            if(isItemInCart){
                return prevState.map(item=>{
                    return item.id===product.id?{...item,qty:item.qty+1}:item
                })
            }
            return [...prevState,{...product,qty:1}]
        })


    }
    function updateQty(index,e){
        const {name,value} = e.target;
        if(value==0)removeProducts(name);
        setCartProducts(prevState => {
            return prevState.map(item=>{
                return item.id==name?{...item,qty:parseInt(value)}:item
            })
        })
    }
    function removeProducts(id){
        setCartProducts(prevState => {
          return prevState.reduce((ack,item)=>{
                if (item.id==id) {
                    return ack;
                }else {
                    return [...ack, item];
                }
            },[])
        })
    }
    function calculateTotal(){
        let total =  cartProducts.reduce((ack,item)=>ack+item.price*item.qty,0);

        return total;
    }
    function logout() {
        localStorage.removeItem("token");
        setLoginStatus(false)
    }

    function emptyCart(){
        setCartProducts([]);
    }



return(
    <Router>
    <div className='App'>
        <Header toggleCart={toggleCart} userType={loginStatus} logout={logout}/>
        {
            isCartClicked?<Cart toggle={toggleCart} products={cartProducts} updateQty={updateQty} remove={removeProducts} total={calculateTotal}/>:""
        }
        <div className="main">

                <Switch>
                    <Route exact path="/">
                        <Home addToCart={addToCart}/>

                    </Route>
                    <Route exact path="/register">
                        {!loginStatus?<UserRegister setLogin={(data)=>{setLoginStatus(data)}}/>:<Redirect to={"/"}/>}
                    </Route>
                    <Route exact path="/login">
                        {!loginStatus?<Login setLogin={(data)=>{setLoginStatus(data)}}/>:<Redirect to={"/"}/>}
                    </Route>
                    <Route exact path="/checkout">
                        <Billing cart={cartProducts} total={calculateTotal} clearCart={emptyCart} />
                    </Route>
                    <Route path="/search/:query">
                        <SearchResult addToCart={addToCart}/>
                    </Route>
                </Switch>



        </div>


    </div>
    </Router>
)
}
export default App;
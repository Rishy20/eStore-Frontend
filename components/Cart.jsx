import React,{useState} from "react";
import "./Cart.css"
import CartItem from "./CartItem";
import image from 'url:../public/images/iphone.jpg';
import Button from "./Button";


function Cart({toggle,products,updateQty,remove,total}){

    const cartProducts=products;

    return(
        <div className={`cart`}>
            <div className="cart-heading">
                <h3 className="cart-title">My Cart</h3>
                <span className="close-icon" onClick={toggle}><i className="fas fa-times"></i></span>
            </div>

            {cartProducts.length === 0 ? <p className="no-items">No items in cart.</p> : null}
            {

                cartProducts.map((product,index)=>{
                    return <CartItem img={product.img} pname={product.name} price={product.price} remove={()=>remove(product.id)} qty={product.qty} key={product.id} id={product.id} updateQty={(e)=>updateQty(index,e)} />
                })
            }

            {
                cartProducts.length!==0?
                    <div>
                        <div className="cart-total">
                            <span className="total-text">Total</span>
                            <span className="total-amount">Rs.{total().toFixed(2)}</span>
                        </div>
                        <div className="cart-btn">
                        <Button name="CHECKOUT" btnStyle="btn-checkout" />
                        </div>
                    </div>
                :null
            }

        </div>
    )
}
export default Cart;
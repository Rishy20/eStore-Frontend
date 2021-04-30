import React, {useState} from 'react';
import './App.css'
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/pages/Home";


function App(){

    const [isCartClicked,setIsCartClicked] = useState(false);

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

return(
    <div className='App'>
        <Header toggleCart={toggleCart} />
        {
            isCartClicked?<Cart toggle={toggleCart} products={cartProducts} updateQty={updateQty} remove={removeProducts} total={calculateTotal}/>:""
        }
        <div className="main">
            <Home addToCart={addToCart}/>
        </div>
    </div>
)
}
export default App;
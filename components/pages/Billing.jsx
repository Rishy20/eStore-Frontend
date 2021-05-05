import React,{useState} from "react";
import BillingInfo from "../BillingInfo";
import "./Billing.css"
import PaymentInfo from "../PaymentInfo";
import Progress from "../Progress";
import Checkout from "../Checkout";
import OrderSuccess from "../OrderSuccess";

export default function Billing({cart,total,clearCart}){

    const[isSubmitted,setIsSubmitted] = useState(false);
    const[isConfirmed, setIsConfirmed] = useState(false);
    const[isShippingEntered, setIsShippingEntered] = useState(false);
    const [isPaymentMade, setIsPaymentMade] = useState(false);
    const [error,setError] = useState(false);
    const[values,setValues] = useState({products:cart});
    const [orderId,setOrderId] = useState(0);

    function setPayment(payment){
        setValues({...values,...payment});
        setIsPaymentMade(true);
        submitForm(payment);
    }
    function submitForm(payment){

        const obj = {
            "delivery":{
                "fname":values.fname,
                "lname":values.lname,
                "contact":values.contact,
                "address1":values.address1,
                "address2":values.address2,
                "city":values.city,
                "state":values.state,
                "zipcode":values.zipcode,
                "country":values.country,
                "deliverytype":payment.deliverytype,
                "email":values.email,
            },
            "payment":{
                "paymenttype":payment.paymenttype,
                "total":values.total
            },
            "products":values.products
        }
        if(payment.paymenttype === "Card"){
            obj.payment.chname=payment.chname;
            obj.payment.cvc=payment.cvc;
            obj.payment.cnum=payment.cnum;
            obj.payment.expiry=payment.expiry;
        }else{
            obj.payment.mobile=payment.mobile;
            obj.payment.pincode=payment.pincode;
            obj.payment.mobilesp=payment.mobilesp;
        }
        console.log(obj);
        fetch("http://localhost:8280/checkout",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method:"POST",
            body: JSON.stringify(obj)
        }).then(res => res.json())
            .then(data=>{
                if(data.status==="Success"){
                    setOrderId(data.OrderId);
                    setIsSubmitted(true);
                    clearCart();
                }else{
                    setError(data.message);
                }
            })
            .catch(err=>console.log(err));


    }
    function shippingEntered(val){
        setIsShippingEntered(true);
        setValues({...values,...val});
    }






    function setTotal(total){
        setValues({...values,["total"]:parseInt(total)});
    }
    function backToCheckout(){
        setIsConfirmed(false);
    }
    function backToShipping(){
        setIsShippingEntered(false);
    }
    return(
        <div className="billing-container">
            {
                (()=>{
                    if(!isConfirmed){
                        return <>
                            <Progress labels={["Checkout","Shipping", "Payment"]} selected={1} />
                            <Checkout cart={cart} total={total} callback={()=>{setIsConfirmed(true)}}/>
                        </>
                    }
                   else if(!isShippingEntered && isConfirmed){
                       return <>
                           <Progress labels={["Checkout","Shipping", "Payment"]} selected={2} />
                           <BillingInfo callback={shippingEntered} backBtn={backToCheckout}/>
                       </>
                   } else if(isShippingEntered && !isSubmitted) {

                        return <>
                            <Progress labels={["Checkout", "Shipping", "Payment"]} selected={3}/>

                            <PaymentInfo callback={setPayment} total={total} setTotal={setTotal}
                                         backBtn={backToShipping}/>
                            {error?<div className="payment-error">{error}</div>:null}
                        </>
                    }else if(isSubmitted){
                       return <OrderSuccess orderId={orderId}/>
                    }
                    })()
            }
        </div>
    )
}
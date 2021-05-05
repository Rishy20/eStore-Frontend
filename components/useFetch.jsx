import {useState,useEffect} from "react";

export const useFetch = (url) =>{

    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);

    const getProducts = async () =>{

        const response = await fetch(url).catch(err=>console.log(err));
        const prod = await response.json();
        setProducts(prod)
        console.log(products)
        setLoading(false);
    };
    useEffect(()=>{
        getProducts();
    },[url]);

    return {loading,products};
}
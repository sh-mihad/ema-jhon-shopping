import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';

import './Shop.css'

const Shop = () => {
   
    const [products, setProducts] =useState([]);
    const [cart ,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

   useEffect(()=>{
      const addedCart = getStoredCart();
      const savedCart = [];
      for(const id in addedCart){
       const product = products.find(product=>product.id === id);
       if(product){
        const quantity = addedCart[id];
        product.quantity = quantity;
        savedCart.push(product)
       }
       
      }
      setCart(savedCart)
   },[products])

    const addToCartHandler =(product)=>{
      let newCart =[];
      const existProduct = cart.find(perProduct=> perProduct.id === product.id);
      if(!existProduct){
        product.quantity =1;
        newCart = [...cart, product];
      }else{
        const rest = cart.filter(perProduct=> perProduct.id !== product.id);
        existProduct.quantity = existProduct.quantity +1;
        newCart = [...rest ,existProduct]
      }
         
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className="shope">
           <div className="products-container">
             {
                products.map(product=><Product product = {product} buttonHandler ={addToCartHandler} key={product.id}></Product>)
             }
           </div>

           <div className="cart-containar">
             <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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

    const addToCartHandler =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart)
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
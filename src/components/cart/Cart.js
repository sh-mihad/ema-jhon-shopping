import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
    return (
        <div className ="cart">
              <h3>this is for cart</h3>
               <p>Items Selected : {cart.length}</p>
        </div>
    );
};

export default Cart;
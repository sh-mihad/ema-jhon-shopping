import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
    

    let sum = 0;
    let charge = 0;
    let quantity =0;
    for(const x of cart){
        // console.log(x);
       sum = sum+x.price * x.quantity;
       charge = charge+x.shipping;
       quantity = quantity + x.quantity;
    }
  const tax = +(sum*0.1).toFixed(2);
   const grandTotal = sum + charge + tax;
    return (
        <div className ="cart">
              <h3>this is for cart</h3>
               <p>Items Selected : {quantity}</p>
               <p>Total Price : ${sum}</p>
               <p>Total Shipping charge : ${charge}</p>
               <p>Tax: ${tax}</p>
               <h4>Grand Total : ${grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;
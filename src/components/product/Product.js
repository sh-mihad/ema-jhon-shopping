import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"

const Product = (props) => {
    // console.log(props)
    const{buttonHandler,product} = props;
   const {img,name,price,seller,ratings} =product
    return (
        <div className="product">
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>Price : ${price}</p>
            <div className = "secendory-div">
                <span>Manufacture : {seller}</span>
                <span>Rating : {ratings}</span>
            </div>
          
          <button onClick={()=>buttonHandler(product)} className="cart-button">
              <p>Add to Cart</p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
        </div>
    );
};

export default Product;
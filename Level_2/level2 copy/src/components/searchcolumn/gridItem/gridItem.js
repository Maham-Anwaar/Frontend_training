import React, { useState } from "react";
import './gridItem.css'

export default function GridItem(props){

    // const [CartItem, setCartItem] = useState([props.setCartItem])
    return(
        <div className="menu-grid-item">
        <div className="card-heading">{props.name}</div>
            <div className="amount-price">
                <div className="price">{props.price}</div>
                <div className="tick-amount">
                    <img className="tick-img" src="tick.png"/>
                    <div className="amount">{props.amount}x</div>
                </div>
            </div>
            <button className="card-button"
                onClick={() => {
                    props.setCartItem(props.id)
                }}>
                ADD TO CART 
            </button>
        </div>
    )
}
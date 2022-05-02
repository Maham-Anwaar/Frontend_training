import React, {useState, useEffect} from "react";
import './cart.css'
import CartItemContainer from "./cartItemcontainer";
import GrandTotal from "./grandtotal";
import ActionButtons from "./actionbuttons";
import { useSelector } from "react-redux";
let total = 0


export default function Cart(props){
    
    const myItems = useSelector(state => state)
    const totalPrice = useSelector(state => {
        total = 0;
        for (let i in state)
            total += state[i].amount * state[i].price;
        return total
    })

    return(
        // <!-- Cart stuff -->
        <div className="cart-items">
            <div className="cart-header">
                <div className="heading-amount">
                    <span className="cart-heading">Cart Item</span>
                    <span className="cart-amount-border">{myItems? myItems.length:0}</span>
                </div>
                <div className="number-img">
                    <img className="dot-img" src="dot.png"/>
                </div>
            </div>
            <CartItemContainer />
            <GrandTotal totalValue={totalPrice? totalPrice: 0}/>
            <ActionButtons />
        </div>
    )
}
import React, {useState} from "react";
import './cart.css'
import CartItem from "./cartitem";
export default function Cart(){
    
    const [cartItems, setCartItems] = useState(
        [{
            name: 'Hi',
            price: 'Rs 700'

        }]
    )

    return(
        // <!-- Cart stuff -->
        <div className="cart-items">
            <div className="cart-header">
                <div className="heading-amount">
                    <span className="cart-heading">Cart Item</span>
                    <span className="cart-amount-border">
                        <span className="cart-amount">3</span>
                    </span>
                </div>
                <div className="number-img">
                    {/* <span className="cart-number">004</span> */}
                    <img className="dot-img" src="dot.png"/>
                </div>
            </div>
            <CartItem/>
        </div>
    )
}
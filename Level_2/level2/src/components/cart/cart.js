import React, {useState, useEffect} from "react";
import './cart.css'
import CartItemContainer from "./cartItemcontainer";
import GrandTotal from "./grandtotal";
import ActionButtons from "./actionbuttons";
let total = 0
export default function Cart({myCart, setMyCart, setSelectedMenu, menuItems, setMenuItem}){
    
    const [totalValue, setTotalValue] = useState({value: 0})


    useEffect(
        ()=>{
            total=0
            for (let i in myCart)
                total += (myCart[i].amount*myCart[i].price)
            setTotalValue({value: total})
        }
        , [menuItems, myCart])


    return(
        // <!-- Cart stuff -->
        <div className="cart-items">
            <div className="cart-header">
                <div className="heading-amount">
                    <span className="cart-heading">Cart Item</span>
                    <span className="cart-amount-border">{myCart.length}</span>
                </div>
                <div className="number-img">
                    <img className="dot-img" src="dot.png"/>
                </div>
            </div>
            <CartItemContainer 
                myCart={myCart} setMyCart={setMyCart} setSelectedMenu={setSelectedMenu}
                menuItems={menuItems} setMenuItem={setMenuItem}
            />
            <GrandTotal totalValue={totalValue.value}/>
            <ActionButtons />
        </div>
    )
}
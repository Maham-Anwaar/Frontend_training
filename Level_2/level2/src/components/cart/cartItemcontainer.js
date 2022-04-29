import React from "react";
import CartItem from "./cartitem";


export default function CartItemContainer({myCart, setMyCart, setSelectedMenu, menuItems, setMenuItem}){
    return(
        myCart.length>0 ? 
        myCart.map(item=>{
            return <CartItem key={item.id} id={item.id} name={item.name} amount={item.amount} price={item.price}
                    setSelectedMenu={setSelectedMenu}
                    menuItems={menuItems} setMenuItem={setMenuItem}
                    />
        }) : null
    )
}
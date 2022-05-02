import React from "react";
import CartItem from "./cartitem";
import { useSelector } from "react-redux";



export default function CartItemContainer(props){
    
    const myItems = useSelector(state => state) 
    return(
        
        myItems ? 
        myItems.map(item=>{
            return <CartItem key={item.name} id={item.price} name={item.name} amount={item.amount} price={item.price}/>
        }) : null
    )
}
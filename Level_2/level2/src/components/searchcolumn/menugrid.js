import React, {useState} from "react";
import GridItem from "./gridItem/gridItem";


export default function MenuGrid(props){
    
    return (
        props.menuItems.map(items=>{
            if (items.itemOf==props.selectedOption) 
                
                return (
                    <div key={items.id}>
                        <GridItem name={items.name} price={items.price} setCartItem={props.setCartItem} id={items.id} amount={items.amount}/>
                    </div>
                )
        })
    )
}
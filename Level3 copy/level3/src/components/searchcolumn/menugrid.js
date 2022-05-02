import React, {useState} from "react";
import GridItem from "./gridItem/gridItem";


export default function MenuGrid(props){
    return (
        props.ingrdients.data ? 
        props.ingrdients.data.map(
            item=>{
                return (
                    <div key={item.price}>
                    <GridItem name={item.name} price={item.price} id={item.price}  store={props.store}/>
                    </div>
                )
            }
        )
        : 
        null
    )
}
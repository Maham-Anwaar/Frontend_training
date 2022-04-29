import React from "react";
import './gridItem.css'

export default function GridItem(props){
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
                    
                    let x = [...props.menuItems]
                    x.map(item=>{
                        if(item.id==props.id) {
                            item.amount +=1;
                            props.setMenuItem([...x]);
                            props.setSelectedMenu(props.id)
                        }
                    })                
                }}>
                ADD TO CART 
            </button>
        </div>
    )
}

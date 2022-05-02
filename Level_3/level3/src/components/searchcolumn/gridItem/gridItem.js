import React from "react";
import './gridItem.css'
import {addObjectToList} from '../../../myRedux/actions.js'
import { useDispatch } from "react-redux";



export default function GridItem(props){
    const dispatch = useDispatch();
    return(
        <div className="menu-grid-item">
        <div className="card-heading">{props.name}</div>
            <div className="amount-price">
                <div className="price">Rs {props.price}</div>
                {/* <div className="tick-amount"> */}
                    {/* <img className="tick-img" src="tick.png"/> */}
                    {/* <div className="amount">{props.amount}x</div> */}
                {/* </div> */}
            </div>
            <button className="card-button"
                onClick={()=>{
                    dispatch(addObjectToList(props.name, props.price))
                }}>
                ADD TO CART 
            </button>
        </div>
    )
}

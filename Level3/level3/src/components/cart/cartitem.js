import React from "react";
import {increment} from '../../myRedux/actions.js'
import {decrement} from '../../myRedux/actions.js'
import { useDispatch } from "react-redux";

export default function CartItem(props){
    const inc = useDispatch();
    const dec = useDispatch();
    return(
        <div className="cart-stuff">
            <div className="stuff-name-amount">
                <div className="stuff-name">{props.name}</div>
                <div className="stuff-amount">
                    <img src='minus.png' className="minus-plus" 
                        onClick={()=> dec(decrement(props.name))}
                    />

                    <div className="amount-bar">{props.amount}</div>
                    <img src='plus.png' className='minus-plus'
                        onClick={()=> inc(increment(props.name))}
                    />
                </div>
            </div>
            <div className="align-total">
                <div className="total">Total</div>
                <div className="total-amount">Rs {props.price}</div>
            </div>
        </div>
    )
}
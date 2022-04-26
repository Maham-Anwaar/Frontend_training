import React from "react";

export default function CartItem(){
    return(
        <div className="cart-stuff">
            <div className="stuff-name-amount">
                <div className="stuff-name">Dim sums</div>
                <div className="stuff-amount">
                    <img src='minus.png' className="minus-plus"/>
                    <div className="amount-bar">3</div>
                    <img src='plus.png' className='minus-plus'/>
                </div>
            </div>
            <div className="align-total">
                <div className="total">Total</div>
                <div className="total-amount">Rs 700</div>
            </div>
        </div>
    )
}
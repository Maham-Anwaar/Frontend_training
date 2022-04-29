import React from "react";

export default function CartItem(props){
    return(
        <div className="cart-stuff">
            <div className="stuff-name-amount">
                <div className="stuff-name">{props.name}</div>
                <div className="stuff-amount">
                    <img src='minus.png' className="minus-plus" 
                        onClick={()=> performOperation(props, -1)}
                    />

                    <div className="amount-bar">{props.amount}</div>
                    <img src='plus.png' className='minus-plus'
                        onClick={()=> performOperation(props, 1)}
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

function performOperation(props, operator){
    let menu = [...props.menuItems]
    menu.map(item=>{
        if(item.id==props.id && item.amount >0) {
            item.amount =item.amount + (operator*1);
            props.setMenuItem([...menu]);
            props.setSelectedMenu(props.id)
        }
    })   
}
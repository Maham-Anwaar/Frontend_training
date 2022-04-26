import React, {useEffect, useState} from "react";
import Categories from '../categories/categories.js'
import SearchColumn from "../searchcolumn/searchcolumn.js";
import './bodypage.css'
import Cart from "../cart/cart.js";
export default function BodyPage(){
    const [selectedOption, setSelectedOption] = useState({option: 1})
    const [cartItem, setCartItem] = useState({itemAdded: 0})
    const [menuItems, setMenuItem] = useState([
        {
            name: 'Dim Sums',
            price: 'Rs 700',
            itemOf: 1,
            id: 1,
            amount: 0
        },
        {
            name: 'Fried Rice',
            price: 'Rs 500',
            itemOf: 1,
            id: 2,
            amount: 0
        },
        {
            name: 'Cheese',
            price: 'Rs 1500',
            itemOf: 2,
            id: 6,
            amount: 0
        },
        {
            name: 'Fish',
            price: 'Rs 1500',
            itemOf: 2,
            id: 3,
            amount: 0
        },
        {
            name: 'Fruit',
            price: 'Rs 2000',
            itemOf: 2,
            id: 4,
            amount: 0
        },
        {
            name: 'MnMs',
            price: 'Rs 2000',
            itemOf: 2,
            id: 5,
            amount: 0
        }
        
    ])
    useEffect(
        ()=>{
            menuItems.map(item=>{
                if(item.id==cartItem) {
                    item.amount+=1   
                }
            })
        }, [cartItem]
    );

    return(
            <div className="menu-container">
                <Categories setSelectedOption={setSelectedOption}/>
                <SearchColumn selectedOption={selectedOption} setCartItem={setCartItem} menuItems={menuItems}/>
                <Cart/>
            </div>
    )
}
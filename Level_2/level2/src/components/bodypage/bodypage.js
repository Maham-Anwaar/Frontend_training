import React, {useEffect, useState} from "react";
import Categories from '../categories/categories.js'
import SearchColumn from "../searchcolumn/searchcolumn.js";
import './bodypage.css'
import Cart from "../cart/cart.js";


export default function BodyPage(){
    const [selectedOption, setSelectedOption] = useState({option: 1})
    const [selectedMenu, setSelectedMenu] = useState({option: 0})
    const [menuItems, setMenuItem] = useState([
        {
            name: 'Dim Sums',
            price: 700,
            itemOf: 1,
            id: 1,
            amount: 0
        },
        {
            name: 'Fried Rice',
            price: 500,
            itemOf: 1,
            id: 2,
            amount: 0
        },
        {
            name: 'Cheese',
            price: 1500,
            itemOf: 2,
            id: 6,
            amount: 0
        },
        {
            name: 'Fish',
            price: 1500,
            itemOf: 2,
            id: 3,
            amount: 0
        },
        {
            name: 'Fruit',
            price: 2000,
            itemOf: 2,
            id: 4,
            amount: 0
        },
        {
            name: 'MnMs',
            price: 200,
            itemOf: 2,
            id: 5,
            amount: 0
        },
        {
            name: 'More Fish',
            price: 250,
            itemOf: 3,
            id: 7,
            amount: 0
        },
        {
            name: 'Kit kat',
            price: 150,
            itemOf: 3,
            id: 8,
            amount: 0
        }
        
    ])
    const [myCart, setMyCart] = useState([])

    useEffect(()=>{
        if (selectedMenu>0) {
            let newObj;
            menuItems.map(item=>{
                if(item.id===selectedMenu){
                    newObj=item;  // Object that is changed
                    if(item.amount===0){  // Object which needs to be deleted from list
                        setMyCart(myCart.filter(x=>x!==item))
                        newObj=undefined
                    }
                }
            })
            if (newObj!==undefined){  // If there is no new object and cart doesnt already have obj then add to cart
                if (!myCart.includes(newObj)) setMyCart([...myCart, newObj])
            }
        }
    } , [menuItems]);

    return(
            <div className="menu-container">
                <Categories setSelectedOption={setSelectedOption}/>
                <SearchColumn 
                    selectedOption={selectedOption}
                    menuItems={menuItems} setMenuItem={setMenuItem} setSelectedMenu={setSelectedMenu}
                />
                <Cart 
                    myCart={myCart} setMyCart={setMyCart} setSelectedMenu={setSelectedMenu}
                    menuItems={menuItems} setMenuItem={setMenuItem}
                />
            </div>
    )
}

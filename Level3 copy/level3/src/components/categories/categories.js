import React, {useState} from "react";
import './categories.css';
import MenuItems from "./menuitems.js";

export default function Categories({setSelectedOption}){

    const [items, setItems] = useState([
        {
            id: 1, name: 'PIZZA', isClicked: true
        },
        {
            id: 2, name: 'PASTA', isClicked: false
        },
        {
            id: 3, name: 'BURGER', isClicked: false
        }
    ])
    
    return(
        <>
            {/* MENU HEADER */}
            <div className="menu-category-container">
                <div className="menu-categories-heading">
                    <span className="menu-categories-header">Categories</span>
                    <span className="menu-categories-amount">({items.length})</span>
                </div>
                <MenuItems items={items} setSelectedOption={setSelectedOption}/>
            </div>
        </>
    )
}
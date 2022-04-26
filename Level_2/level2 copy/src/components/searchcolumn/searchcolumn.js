import React, {useState} from "react";
import './searchcolumn.css'
import MenuGrid from "./menugrid";



export default function SearchColumn({selectedOption, setCartItem, menuItems}){
    
    return (
        <div className="search-items">
            <div className="search-header">
                <img src="search.png" className="search-img"/>
                <span className="search-heading">Search Item</span>
            </div>

            <div className="menu-grid">
                <MenuGrid selectedOption={selectedOption} menuItems={menuItems} setCartItem={setCartItem}/>
            </div>
        </div>
    )
}
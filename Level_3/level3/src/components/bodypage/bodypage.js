import React, {useEffect, useState} from "react";
import Categories from '../categories/categories.js'
import SearchColumn from "../searchcolumn/searchcolumn.js";
import './bodypage.css'
import Cart from "../cart/cart.js";
import axios from "axios";
import listReducer from '../../myRedux/reducers.js'
import {Provider} from 'react-redux'
import {legacy_createStore as createStore} from "redux";

let store = createStore(
    listReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default function BodyPage(){
    const [selectedOption, setSelectedOption] = useState({option: 1})
    const [ingrdients, setIngrdients] = useState({})

    async function getRequest(id){
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json`,
            {
                params: {apiKey:'8b073d413e33448a84b80831747950bb'}
            }
        );
        setIngrdients({data: response.data.ingredients})
    }

    useEffect(()=>{
        getRequest(selectedOption.option);
    },
    [selectedOption])
    
    useEffect(()=>{
        setSelectedOption({option: 1})
    },
    [])


    return(
        <Provider store={store}>
            <div className="menu-container">
                <Categories setSelectedOption={setSelectedOption}/>
                <SearchColumn selectedOption={selectedOption} ingrdients={ingrdients}/>
                <Cart/>
            </div>
        </Provider>
    )
}

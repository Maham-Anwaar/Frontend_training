import React, {useState, useEffect} from "react";
import TextPicture from "../textpicture/textpicture";


export default function MenuItems(props){

    const [myItems, setMyItems] = useState(props.items)

    // this will change color of selected div whenever items list is changed.
    useEffect(()=>{
        myItems.map(item=>{
            if (item.isClicked){
                document.getElementById(item.id).querySelector("span").style.backgroundColor = '#5bbc79';
                document.getElementById(item.id).querySelector("span").querySelector("span").style.color = '#ffffff';
                props.setSelectedOption(item.id)
            }
        })
    }, [myItems]);

    function changeColorOfPreviouslySelectedItem (currentID) {
        myItems.map(item=>{

            if (item.isClicked){
                document.getElementById(item.id).querySelector("span").style.backgroundColor = '#f8f8f8';
                document.getElementById(item.id).querySelector("span").querySelector("span").style.color = '#a2acba';
                item.isClicked = !item.isClicked
            }
            if(item.id==currentID) item.isClicked = true
        })
        setMyItems(item=>{
            return [...item]
        })
    }
    
    const changeColor = (e) => changeColorOfPreviouslySelectedItem(e.currentTarget.dataset.index)


    return(
        props.items.map(item =>{
        return (
            <div key={item.id} data-index={item.id} onClick={changeColor} id={item.id}>
                <TextPicture
                    text={item.name} pic='arrow.png' 
                    containerClass='menu-item-1'
                    textClass= 'menu-item-heading-1'
                    picClass='menu-item-img-1'
                />
            </div>
        )})
    )
}
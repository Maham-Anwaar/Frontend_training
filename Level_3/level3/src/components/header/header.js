import React from "react";
import './header.css'
import TextPicture from "../textpicture/textpicture";

export default function Header(){
    return(
            <div className="header">
            <img src="header.png" className="header-header"/>
            <span className="header-profile-container">
                <span className="header-bell">
                    <img src="bell.png"/>
                </span>
                <TextPicture text='Adam Lane' pic='pic.png' containerClass='text-pic-container' textClass='text' picClass='pic'/>
            </span>
        </div> 
    )
}
import React from "react";
import "./sidebar.css";



export default function Sidebar(){
    return(
        <div className="sidebar">
            <span className="sidebarTitle">About Me</span>
            <div className="sidebarItem">
                
                <img src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet
                    , consectetur adipisicing 
                    elit. Fugiat, harum ipsa? Laborum
                    veritatis inventore </p>

            </div>
            <span className="sidebarTitle">Categories</span>
            <div className="sidebarItem">
                
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarsocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
             
        </div>
    )
}
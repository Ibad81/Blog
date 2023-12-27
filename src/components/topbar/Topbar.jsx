
import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
// import Login from '../../pages/login/Login';
function Topbar(){
    const user=false;
    return (
        <>
        <div className='Top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >Home</Link></li>
                    <li className="topListItem">
                    <Link className="link" to="/about" >About</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/contact" >Contact</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write" >Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user?(<img className='topImg' src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg" alt="" />):
                    (
                    <ul className='topList'>
                        <li className='topListItem'>
                        <Link className='link' to="/login">Login </Link>
                        </li>
                        <li className='topListItem'>
        
                        <Link className='link' to="/register">REGISTER</Link>
                        </li>
                    </ul>
                    )
                }
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        </>
    )
}

export default Topbar;
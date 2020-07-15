import React,{useState,useEffect,useCallback,useContext} from 'react';
import {NavLink} from "react-router-dom"
import './scss/index.scss'
function Header(){

    return(
        <div className='header'>
            {/* header */}
            <NavLink to='/home'>3d</NavLink>
        </div>
    )
}

export default Header

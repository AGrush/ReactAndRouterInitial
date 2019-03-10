import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () =>{
    return(
        <div class="main-menu  col-12 col-sm-6 mx-auto d-flex flex-row justify-content-between px-0 pt-0">
            <NavLink className="menulink" to="/">Home</NavLink>
            <NavLink className="menulink" to="/about">About</NavLink>
            <NavLink className="menulink" to="/contact">Contact</NavLink>
        </div>
    )
}

export default Navigation 
    

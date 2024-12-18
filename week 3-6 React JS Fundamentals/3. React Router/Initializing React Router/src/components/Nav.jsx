import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='navBar'>
            <p><NavLink className='navBarLink' to="/">Home</NavLink></p>
            <p><NavLink className='navBarLink' to="/About">About</NavLink></p>
            <p><NavLink className='navBarLink' to="/Contact">Contact</NavLink></p>
        </div>
    )
}

export default Nav

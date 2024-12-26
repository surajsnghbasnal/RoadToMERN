import React from 'react';
import { NavLink } from 'react-router-dom';

function BasicExample() {
    return (
        <div className="Nav">
            <p><NavLink className='navBarLink' to="/">Home</NavLink></p>
            <p><NavLink className='navBarLink' to="/About">About</NavLink></p>
            <p><NavLink className='navBarLink' to="/Contact">Contact</NavLink></p>
            <p><NavLink className='navBarLink' to="/Users">Users</NavLink></p>
            <p><NavLink className='navBarLink' to="/Career">Career</NavLink></p>
            <NavLink
                className={({ isActive }) => (isActive ? 'navBarLink active' : 'navBarLink')}
                to="/login"
            >
                Login
            </NavLink>
        </div>
    );
}

export default BasicExample;

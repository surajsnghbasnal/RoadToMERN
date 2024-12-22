import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <h2>Here we have Multiple users.</h2>
            <div className="links">
                <NavLink className='navBarLink' to='Sandeep'>Sandeep</NavLink>
                <NavLink className='navBarLink' to='Ankit'>Ankit</NavLink>
                <NavLink className='navBarLink' to='Shashi'>Shashi</NavLink>
                <NavLink className='navBarLink' to='Suraj'>Suraj</NavLink>
                <Outlet />
            </div>
        </div>
    )
}

export default Users

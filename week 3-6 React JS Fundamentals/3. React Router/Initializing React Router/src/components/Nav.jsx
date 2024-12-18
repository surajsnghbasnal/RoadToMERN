import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div style={{ width: '100%', backgroundColor: 'salmon', display: 'flex', justifyContent: 'center', padding: '20px', gap: '20px' }}>

            <p><Link to="/">Home</Link></p>
            <p><Link to="/About">About</Link></p>
            <p><Link to="/Contact">Contact</Link></p>
            <p><Link to="/User">User</Link></p>
        </div>
    )
}

export default Nav

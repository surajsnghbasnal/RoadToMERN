import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <Link to='/User/suraj'>Click for Suraj</Link><br />
            <Link to='/User/sandeep'>Click for Sandeep</Link>
        </div>
    )
}

export default Contact

import React, { useEffect } from 'react'
import Home from './Home'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ cmp }) => {
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login')
        console.log(login);

        if (!login) {
            navigate('login')
        }
    })
    return (
        <div>
            <Home />
        </div>
    )
}

export default ProtectedRoute

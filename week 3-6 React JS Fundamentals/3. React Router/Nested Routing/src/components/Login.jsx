import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const handleLogin = () => {
        localStorage.setItem('login', true)
    }
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('login')
        if (login) {
            navigate('/F')
        }
    })

    return (
        <div>
            <h1>Login</h1>
            <input type='text' /><br />
            <input type='text' /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login

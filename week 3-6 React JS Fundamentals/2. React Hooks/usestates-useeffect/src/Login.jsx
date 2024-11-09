import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState('')
    const [pw, setPw] = useState('')

    const loginHandler = (e) => {
        e.preventDefault()
    }

    const UsernameHandler = (e) => {
        setUser(e.target.value)
    }
    
return (
    <div>
        <form onSubmit={loginHandler}>
            <h1>Login</h1>
            <input
                type='text'
                placeholder='Enter Your Username'
                onChange={UsernameHandler} />
                <p>{user.length<8? <p>Enter Valid Username</p>:null}</p>
            <br /><br />

            <input type='password' placeholder='Enter Your Password' onChange={(e) => { setPw(e.target.value) }} />
            <p>{pw.length<8? <p>Enter Valid Password</p>:null}</p>
            <br /><br />

            <button>Submit</button>
            <h1>{user}</h1>
            <h1>{pw}</h1>
        </form>
    </div>
)
}

export default Login
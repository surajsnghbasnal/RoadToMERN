import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [userErr, setUserErr] = useState(true)
    const [passErr, setPassErr] = useState(true)
    // const [login, setLogin] = useState(true)

    const loginHandle = (e) => {
        e.preventDefault()
        username.length <= 10 ? setUserErr(false) : setUserErr(true)
        pass.length <= 8 ? setPassErr(false) : setPassErr(true)
    }


    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={loginHandle}>
                <input type='text' placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
                {userErr ? <span></span> : <span style={{ color: 'red' }}>Enter valid Username</span>}<br />

                <input type='text' placeholder='Enter Password' onChange={(e) => setPass(e.target.value)} />
                {passErr ? <span></span> : <span style={{ color: 'red' }}>Enter valid Password</span>}<br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
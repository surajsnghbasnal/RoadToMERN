import React, { useState } from 'react'
import Login from './Login'
import Props from './Props'
import Props2 from './Props2'

const App2 = () => {
    const showAlert = () => {
        alert('hello')
    }
    return (
        <div>
            {/* <h1 style={{ color: '#0866FF', textAlign:'center' }}>Form Validation!</h1>
            <Login /> */}
            <h1>Pass Function As Props.</h1>
            <Props func={showAlert} />
            <Props2 func={showAlert} />
        </div>
    )
}

export default App2

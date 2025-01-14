import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0)
    const [prevCount, setPrevCount] = useState(0)
    const handleClick = () => {
        let randNo = Math.floor(Math.random() * 10)
        setCount((prev) => {
            setPrevCount(prev);
            return randNo
        }
        )
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Prev Count: {prevCount}</h1>    
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default App

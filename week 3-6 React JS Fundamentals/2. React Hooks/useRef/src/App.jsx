import React, { useRef } from 'react'

const App = () => {
    const inputRef = useRef(null)
    const handleInput = () => {
        console.log('called')
        inputRef.current.value = '1000'
        inputRef.current.focus()
    }
    return (
        <div>
            <h1>useRef in react</h1>
            <input type='text' ref={inputRef} />
            <button onClick={handleInput}>Handle Input</button>
        </div>
    )
}

export default App

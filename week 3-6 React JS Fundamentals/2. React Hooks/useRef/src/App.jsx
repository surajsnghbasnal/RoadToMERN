// import React, { useRef } from 'react'

// const App = () => {
//     const inputRef = useRef(null)

//     const handleInput = () => {
//         console.log('called')
//         inputRef.current.value = '1000'
//         inputRef.current.focus()
//     }
//     return (
//         <div>
//             <h1>useRef in react</h1>
//             <input type='text' ref={inputRef} />
//             <button onClick={handleInput}>Handle Input</button>
//         </div>
//     )
// }

// export default App


//* forwardRef

import React, { useRef } from 'react'
import User from './UserRef.jsx'

const App = () => {
    const inputRef = useRef(null)

    const userFunc = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <User ref={inputRef} />
            <button onClick={userFunc}>Update</button>
        </div>
    )
}

export default App

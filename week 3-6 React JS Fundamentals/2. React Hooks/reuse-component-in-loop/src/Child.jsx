import React, { useState } from 'react'

// const Child = ({ inc, dec }) => {
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => inc(count, setCount)}>Increment</button>
//             <button onClick={() => dec(count, setCount)}>Decrement</button>
//         </div>
//     )
// }


const Child = ({ getData }) => {
    
    return <>
        <input type='text' placeholder='First Name' onChange={(e) => getData(fName, setFName, e)} /><br />
    </>
}

export default Child

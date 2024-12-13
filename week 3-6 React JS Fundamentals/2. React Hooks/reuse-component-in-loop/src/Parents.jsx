import React, { useState } from 'react'
import Child from './Child'

// const Parents = () => {
//     const increment = (count, setCount) => {
//         setCount(count + 1)
//     }
//     const decrement = (count, setCount) => {
//         setCount(count - 1)
//     }

//     return <>
//         <Child inc={increment} dec={decrement} />
//     </>
// }


const Parents = () => {
    const [fName, setFName] = useState()
    const getData = (e) => {
        setFName(e.target.value)
    }
    return <>
        <Child getData={getData} />
        <p>First Name: {fName}</p>
    </>
}

export default Parents

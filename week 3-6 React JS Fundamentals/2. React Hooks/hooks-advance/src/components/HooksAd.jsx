import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const HooksAd = () => {
    const [data, setData] = useState(10)
    const [count, setCount] = useState(100)

    useEffect(() => {
        console.log('Data Updated')
    },[data])
    useEffect(() => {
        console.log('Count Updated')
    },[count])

    return (
        <div>
            <h1>useEffect Component.</h1>
            <h2>Count:{count}</h2>
            <h2>Data:{data}</h2>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setData(data + 1)}>Update data</button>
        </div>
    )
}

export default HooksAd


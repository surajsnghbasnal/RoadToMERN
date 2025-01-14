import React, { useState } from 'react'
import User from './User'

const PrevProps = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <User count={count} />
            <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update Counter</button>
        </div>
    )
}

export default PrevProps

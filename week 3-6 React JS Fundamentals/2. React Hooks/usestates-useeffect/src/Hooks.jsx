import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [count, setCount] = useState(100)

    useEffect(() => {
        if (count != 0) {
            setTimeout(() => {
                setCount(count - 1)
            }, 100);
            console.log(count)
        }
    })
    return (
        <div>
            <h1>UsEffect Hook {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Hooks

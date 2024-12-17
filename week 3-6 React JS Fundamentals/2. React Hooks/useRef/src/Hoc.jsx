import React, { useState } from 'react'

const Hoc = () => {
    return (
        <div>
            <h1>HOC</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <RedCounter Cmp={Counter} />
                <GreenCounter Cmp={Counter} />
                <BlueCounter Cmp={Counter} />
            </div>
        </div>
    )
}

const RedCounter = ({ Cmp }) => {
    return <div>
        <div style={{ backgroundColor: 'red', padding: '5px' }}>
            <h2>Red</h2>
            <Cmp />
        </div>
    </div>
}

const GreenCounter = ({ Cmp }) => {
    return <div>
        <div style={{ backgroundColor: 'blue', padding: '5px' }}>
            <h2>Blue</h2>
            <Cmp />
        </div>
    </div>
}
const BlueCounter = ({ Cmp }) => {
    return <div>
        <div style={{ backgroundColor: 'green', padding: '5px' }}>
            <h2>Green</h2>
            <Cmp />
        </div>
    </div>
}

const Counter = () => {
    const [count, setCount] = useState(0)

    return <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Update</button>
    </div>

}


export default Hoc;

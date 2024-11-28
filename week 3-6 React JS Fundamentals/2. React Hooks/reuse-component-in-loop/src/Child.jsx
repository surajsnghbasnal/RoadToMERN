import React, { useState } from 'react'

const Child = ({ data, func }) => {
    const [name, setName] = useState(data)
    let frndName = "shashi"
    return (
        <div>
            <p>User Name: {name}</p>
            <button onClick={() => setName("Suraj Singh Basnal")}>Click</button>
            <button onClick={() => func(frndName)}>Alert</button>
        </div>
    )
}

export default Child

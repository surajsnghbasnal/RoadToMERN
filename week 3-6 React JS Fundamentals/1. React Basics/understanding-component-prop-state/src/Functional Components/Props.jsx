import React, { useState } from 'react'

const Props = (props) => {
    const [name, setName] = useState(props.name)

    return (
        <>
            <h1>Props in React.</h1>
            <h2>Hello {name}</h2>
            <h3>Your Email : {props.email}</h3>
            <button onClick={() => setName("Suraj Basnal")}>Update Name</button>
        </>
    )
}

export default Props

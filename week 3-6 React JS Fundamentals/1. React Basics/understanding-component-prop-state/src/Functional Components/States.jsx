import React, { useState } from 'react'

const States = () => {
    const [data, setData] = useState("suraj")

    function updateData(){
        setData("Suraj Basnal")
    }

    return (
        <>
            <h1>State in React.</h1>
            <h2>{data}</h2>
            <button onClick={updateData}>Update date</button>

        </>
    )
}

export default States

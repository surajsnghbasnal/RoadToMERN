import React from 'react'
import Child from './Child'

const Parents = () => {
    const name = "Suraj basnal"

    const getData = (frndName) => {
        alert(frndName)
    }
    return (
        <div>
            <h1>Parent component</h1>
            <Child data={name} func={getData} />
        </div>
    )
}

export default Parents

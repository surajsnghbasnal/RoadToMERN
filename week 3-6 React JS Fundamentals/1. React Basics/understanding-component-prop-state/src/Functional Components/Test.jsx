import React, { useState } from 'react'

const Test = () => {
    const[name, setName]=useState()

    const getData = (e)=>{
        setName(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={getData}/>
            <h1>{name}</h1>
        </div>
    )
}

export default Test

import React, { useState } from 'react'

const Student = ({ name, RollNo, add }) => {
    const [stName, setName] = useState(name)

    return (

        <div style={{ backgroundColor: "#dadada", padding: "5px", marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: "center" }}>

            <p>Student Name: {stName}</p>
            <p>Roll No.: {RollNo}</p>
            <p>Adrress: {add} </p>
            <button onClick={() => {
                setName(prompt("Edit Your Name"))
            }}>Edit Name</button>
        </div>
    )
}

export default Student

import React from 'react'

const Students = ({ student }) => {
    return (
        <div style={{ border: "1px solid #fff" }}>
            <p><span>Roll No.:</span> {student.rollNo}</p>
            <p><span>Name:</span> {student.name}</p>
            <p><span>Email:</span> {student.email}</p>
        </div>
    )
}

export default Students

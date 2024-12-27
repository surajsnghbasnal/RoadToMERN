import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const GetApi = () => {
    const [student, setStudent] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/students').then((result) => {
            result.json().then((res) => {
                setStudent(res)
            })
        })
    }, [])
    console.log(student)
    return (
        <div>
            <h1>Get API Method</h1>
            {student.map((item) => (
                <p key={item.rollNo}>{item.name}</p>
            ))}

        </div>
    )
}

export default GetApi

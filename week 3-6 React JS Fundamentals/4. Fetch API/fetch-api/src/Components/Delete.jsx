import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const GetApi = () => {
    const [student, setStudent] = useState([])

    const getData = () => {
        fetch('http://localhost:8000/students').then((result) => {
            result.json().then((res) => {
                setStudent(res)
            })
        })
    }
    useEffect(() => {
        getData()
    }, [])

    const deleteUser = (id) => {
        fetch(`http://localhost:8000/students/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((res) => {
                getData()
            })
        })
    }

    return (
        <div>
            <h1>Get API Method</h1>
            <table style={{ border: '1px solid ' }}>
                <thead style={{ border: '1px solid ' }}>
                    <tr>
                        <th style={{ border: '1px solid ' }}>Roll No.</th>
                        <th style={{ border: '1px solid ' }}>Name</th>
                        <th style={{ border: '1px solid ' }}>Class</th>
                        <th style={{ border: '1px solid ' }}>Location</th>
                        <th style={{ border: '1px solid ' }}>Delete</th>
                    </tr>
                </thead>
                <tbody style={{ border: '1px solid ' }}>
                    {student.map((item) => (
                        <tr style={{ border: '1px solid ' }} key={item.id}>
                            <td style={{ border: '1px solid ' }}>{item.rollNo}</td>
                            <td style={{ border: '1px solid ' }}>{item.name}</td>
                            <td style={{ border: '1px solid ' }}>{item.std}</td>
                            <td style={{ border: '1px solid ' }}>{item.location}</td>
                            <td>
                                <button onClick={() => deleteUser(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GetApi

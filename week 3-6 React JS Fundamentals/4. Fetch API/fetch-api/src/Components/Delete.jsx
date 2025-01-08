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

    const [name, setName] = useState('')
    const [rollNo, setRollNo] = useState(0)
    const [std, setStd] = useState('')
    const [location, setLocation] = useState('')

    const handleSave = () => {
        fetch('http://localhost:8000/students', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, rollNo, std, location })
        }).then((res) => {
            res.json().then((response) => {
                getData()
            })
        })
    }

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
        <div className="App">
            <div className="container">
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
                <div className='add'>
                    <h2>POST API Method.</h2>
                    <input
                        type='text'
                        value={name}
                        name='name'
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                    /><br /><br />

                    <input
                        type='text'
                        value={rollNo}
                        name='rollNo'
                        placeholder='rollNo'
                        onChange={(e) => setRollNo(e.target.value)}
                    /><br /><br />

                    <input
                        type='text'
                        value={std}
                        name='class'
                        placeholder='class'
                        onChange={(e) => setStd(e.target.value)}
                    /><br /><br />

                    <input
                        type='text'
                        value={location}
                        name='location'
                        placeholder='location'
                        onChange={(e) => setLocation(e.target.value)}
                    /><br /><br />

                    <button type='button' onClick={handleSave}>Save new user</button>
                </div>
            </div>
        </div>
    )
}


export default GetApi

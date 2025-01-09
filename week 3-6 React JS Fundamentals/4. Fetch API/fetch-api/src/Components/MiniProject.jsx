import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const MiniProject = () => {
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

    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [rollNo, setRollNo] = useState(0)
    const [std, setStd] = useState('')
    const [location, setLocation] = useState('')

    const [newName, setNewName] = useState('')
    const [newRollNo, setNewRollNo] = useState(0)
    const [newStd, setNewStd] = useState('')
    const [newLocation, setNewLocation] = useState('')




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

    const updateUser = (id) => {
        setNewName(student[id].name)
        setNewRollNo(student[id].rollNo)
        setNewStd(student[id].std)
        setNewLocation(student[id].location)
        setShow(true)
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
                                <th style={{ border: '1px solid ' }}>Update</th>
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
                                    <td>
                                        <button onClick={() => updateUser(item.id)}>View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
                    show ?
                        <div className="overlap">
                            <div className="add">
                                <h2>User</h2>
                                <p>Name: <span className='value'>{newName}</span></p>
                                <p>Roll No.: <span className='value'>{newRollNo}</span></p>
                                <p>Class: <span className='value'>{newStd}</span></p>
                                <p>Location: <span className='value'>{newLocation}</span></p>
                                <button onClick={() => setShow(false)}>Close</button>
                            </div>
                        </div>
                        : null
                }
                <div className='add'>
                    <h1>POST API Method.</h1>
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


export default MiniProject

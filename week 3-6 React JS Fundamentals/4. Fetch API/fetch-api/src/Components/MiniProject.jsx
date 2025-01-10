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

    const [selectedUser, setSelectedUser] = useState()


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

    const viewUser = (no) => {
        setNewName(student[no - 1].name)
        setNewRollNo(student[no - 1].rollNo)
        setNewStd(student[no - 1].std)
        setNewLocation(student[no - 1].location)
        setShow(true)
        setSelectedUser(no)
    }

    const updateUser = () => {
        fetch(`http://localhost:8000/students/${selectedUser}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                rollNo: newRollNo,
                std: newStd,
                location: newLocation
            })
        }).then((result) => {
            result.json().then((res) => {
                getData()
                setShow(false)
            })
        })
        setShow(false)

    }
    console.log(selectedUser);

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
                                <th style={{ border: '1px solid ' }}>View</th>
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
                                        <button onClick={() => viewUser(item.rollNo)}>View</button>
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
                                <p>Name: <input
                                    type='text'
                                    defaultValue={newName}
                                    onChange={(e) => setName(e.target.value)}
                                /></p>
                                <p>Roll No.: <input
                                    type='text'
                                    defaultValue={newRollNo}
                                    onChange={(e) => setRollNo(e.target.value)}
                                /></p>
                                <p>Class: <input
                                    type='text'
                                    defaultValue={newStd}
                                    onChange={(e) => setStd(e.target.value)}
                                /></p>
                                <p>Location: <input
                                    type='text'
                                    defaultValue={newLocation}
                                    onChange={(e) => setLocation(e.target.value)}
                                /></p>
                                <button onClick={updateUser}>Update</button>
                            </div>
                        </div>
                        : null
                }
                <div className='add'>
                    <h1>POST API Method.</h1>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                    /><br /><br />

                    <input
                        type='text'
                        name='rollNo'
                        placeholder='rollNo'
                        onChange={(e) => setRollNo(e.target.value)}
                    /><br /><br />

                    <input
                        type='text'
                        name='class'
                        placeholder='class'
                        onChange={(e) => setStd(e.target.value)}
                    /><br /><br />

                    <input
                        type='text'
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

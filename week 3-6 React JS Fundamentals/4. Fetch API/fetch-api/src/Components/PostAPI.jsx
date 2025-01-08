import React, { useState } from 'react'

const PostAPI = () => {
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
            body: JSON.stringify({name, rollNo, std, location})
        }).then((res) => {
            res.json().then((response) => {
                console.log('response', response);

            })
        })
    }

    return (
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
    )
}

export default PostAPI

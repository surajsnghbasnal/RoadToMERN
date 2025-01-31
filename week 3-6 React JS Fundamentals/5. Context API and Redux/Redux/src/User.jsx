import React from 'react'

const User = ({ data }) => {
    const { name, rollNo, location } = data
    return (
        <div>

            <ul>
                <li>Name: {name}</li>
                <li>Roll No.: {rollNo}</li>
                <li>Location: {location}</li>
            </ul>
        </div>
    )
}

export default User

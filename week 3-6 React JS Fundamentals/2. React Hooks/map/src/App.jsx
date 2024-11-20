import React from 'react'
import './App.css'
const App = () => {
    const students = ['Sandeep', 'Kunal', 'Ankit', 'Shashi', 'Suraj']
    return (

        <div>
            <h2>App components</h2>
            <></>
            {
                students.map((val, index) => (
                    <p key={index}>{index + 1}. {val}</p>
                ))
            }
        </div>
    )
}

export default App

import React from 'react'
import User from './User'

const App = () => {
  return (
    <div>
      <h1>User Details</h1>
      <User data={{ name: 'Suraj', rollNo: '99', location: 'Indirapuram' }} />
      <User data={{ name: 'Sandeep', rollNo: '100', location: 'Arjun nagar' }} />
    </div>
  )
}

export default App

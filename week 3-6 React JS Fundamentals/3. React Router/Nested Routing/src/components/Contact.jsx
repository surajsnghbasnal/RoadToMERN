import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

  return (
    <div>
      <h1>Contact</h1>
      <Link to='/ContactThru/phone'>Connect Via Phone.</Link><br />
      <Link to='/ContactThru/email'>Connect via Email.</Link>
    </div>
  )
}

export default Contact

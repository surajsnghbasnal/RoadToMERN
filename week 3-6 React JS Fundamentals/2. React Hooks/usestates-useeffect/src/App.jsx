import React, { useState } from 'react'

const App = () => {
  const [status, setStatus] = useState(true)
  const [show, setShow] = useState(false)
  const [name, setName] = useState()
  const [tnc, setTnc] = useState()
  const [interest, setInterest] = useState()

  const getFormData = (e) => {
    e.preventDefault()
    setShow(true)
  }

  return (
    <div className='App'>
      {status ? <h1>Hello Guys!</h1> : null}
      <button onClick={() => setStatus(!status)}>{status ? "Hide" : "Show"}</button>

      <br></br>
      <br></br>
      <h1>Handle Form in React</h1>

      <form  onSubmit={getFormData}>
        <input
          type='text'
          placeholder='Enter name'
          onChange={(e) => setName(e.target.value)}></input><br></br><br></br>

        <select
          onChange={(e) => setTnc(e.target.value)}>
          <option>Select Option</option>
          <option>Batman</option>
          <option>Superman</option>
          <option>Spiderman</option>
        </select><br></br><br></br>

        <input
          type='checkbox'
          onChange={(e) => setInterest(e.target.checked)}
        ></input>
        <label>Accept Terms & Conditions</label><br></br><br></br>
        {show ? <p>{name}, {tnc}, {interest ? 'Agreed' : 'Not Agreed'}</p> : null}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App

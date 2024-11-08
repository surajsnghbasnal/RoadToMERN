import React, { useState } from 'react'

const App = () => {
  const [status, setStatus] = useState(true)


  return (
    <div className='App'>
      {status ? <h1>Hello Guys!</h1> : null}
      <button onClick={() => setStatus(!status)}>{status ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App

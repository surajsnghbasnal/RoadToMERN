import { useState } from "react"
import Student from "./Functional Components/Student"

function App() {



  return (
    <>
      <h1>Student component</h1>
      <Student name="Shashi" RollNo="10099" add="Gautam nagar, Delhi" />
      <Student name="Suraj" RollNo="10100" add="Indirapuram, Ghaziabad" />
      <Student name="Sandeep" RollNo="10101" add="Arjun Nagar, Delhi" />
      
    </>
  )
}

export default App

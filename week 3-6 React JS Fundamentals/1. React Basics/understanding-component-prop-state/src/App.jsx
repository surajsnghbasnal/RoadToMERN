import Student from "./Functional Components/Student"
import Test from "./Functional Components/Test"

function App() {


  return (
    <>
      <h1>Update State and Props.</h1>
      <h1>Student component</h1>
      <Student name="Shashi" RollNo="10099" add="Gautam nagar, Delhi" />
      {/* <Student name="Suraj" RollNo="10100" add="Indirapuram, Ghaziabad" />
      <Student name="Sandeep" RollNo="10101" add="Arjun Nagar, Delhi" />       */}


      <h1>Get Input Data.</h1>
      <h1>Test Component.</h1>
      <Test></Test>
    </>
  )
}

export default App

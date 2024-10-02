import User from "./Functional Components/User"
import User2 from "./Class Components/User2"
import States from "./Functional Components/States"
import Props from "./Functional Components/Props"

function App() {

  const Apple = () => {
    alert("clicked function")

    return (
      <h1>this is apple Component, under the App component.</h1>
    )
  }

  return (
    <>
      {/* <User />
      <User2 /> */}
      {/* <Apple/> */}
      <h1>Suraj Basnal</h1>
      <button onClick={Apple}>Click me</button>
      <States/>
      <Props name="Suraj" email="suraj@gmail.com"/>
    </>
  )
}

export default App

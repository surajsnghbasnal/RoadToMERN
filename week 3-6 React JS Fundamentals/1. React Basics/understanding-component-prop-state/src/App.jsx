import User from "./Functional Components/User"
import User2 from "./Class Components/User2"
function App() {

  function Apple() {
    return (
      <h1>this is apple Component, under the App component.</h1>
    )
  }


  return (
    <>
      <User />
      <User2 />
      <Apple/>
    </>
  )
}

export default App

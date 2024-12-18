import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Page404 from './components/Page404'
import Users from './components/Users'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/User/:name' element={<Users />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

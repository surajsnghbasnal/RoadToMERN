import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Career from './components/Career';
import Page404 from './components/Page404';
import './index.css';
import Footer from './components/Footer';
import ContactThru from './components/ContactThru';
import Users from './components/Users';
import Sandeep from './components/Users/Sandeep';
import Ankit from './components/Users/Ankit';
import Shashi from './components/Users/Shashi';
import Suraj from './components/Users/Suraj';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<ProtectedRoute cmp={Home} />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/ContactThru/:source' element={<ContactThru />} />
          <Route path='/Users' element={<Users />}>
            <Route path='Sandeep' element={<Sandeep />} />
            <Route path='Ankit' element={<Ankit />} />
            <Route path='Shashi' element={<Shashi />} />
            <Route path='Suraj' element={<Suraj />} />
          </Route>
          <Route path='/Career' element={<Career />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

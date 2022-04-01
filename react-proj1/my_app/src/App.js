import React from 'react'
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Product from './pages/Product'
import ToDo from './pages/ToDo';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Footer from './components/Footer';


function App() {
  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
        

      </Routes>
      {/* <Footer/> */}
 
    </>
  )
}

export default App
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AllFoods from '../pages/AllFoods'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import FoodDetails from '../pages/FoodDetails'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/foods' element={<AllFoods/>} ></Route>
        <Route path='/foods/:id' element={<FoodDetails/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
        <Route path='/checkout' element={<Checkout/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>
    </Routes>
  )
}

export default Routers
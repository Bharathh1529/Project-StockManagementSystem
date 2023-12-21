import React from 'react'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Home1 from './Home1'
export default function Stock() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Home1' element={<Home1/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

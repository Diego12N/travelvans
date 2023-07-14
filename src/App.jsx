import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function HomePage () {
  return(
    <h1>Home</h1>
  )
}

function AboutPage () {
  return(
    <h1>About</h1>
  )
}

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/about"  element={<AboutPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

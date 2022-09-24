import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Helmet } from 'react-helmet'
import Artikel2 from './pages/artikel2'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Artikel1 from './pages/artikel1'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel1" element={<Artikel1 />} />
        <Route path="/artikel2" element={<Artikel2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

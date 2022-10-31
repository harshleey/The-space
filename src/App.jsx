import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Destinations from './pages/Destinations'


export default function App() {
    return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
    )
}
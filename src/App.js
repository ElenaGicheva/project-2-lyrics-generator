import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import SongLyrics from './components/SongLyrics'
import SearchBars from './components/SearchBars'
import Footer from './components/Footer'

function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SongLyrics" element={<SongLyrics />} />
          {/* <Route path="/components" element={<SearchBars />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
  
}

export default App

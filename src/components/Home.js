import React from 'react'
import { Link } from 'react-router-dom'
import SearchBars from './SearchBars'

const Home = () => (
  <div className='home text-center'>
    <div className='home-overlay'>
    <h1 className='display-4'>
      Do you have a favourite song?
    </h1>
    <h2 className='display-5'>
    🎵 Search the lyrics here 🎵
    </h2>
    <Link to='SongLyrics' className='btn btn-info' type='submit'>See lyrics</Link>
    </div>
    < SearchBars />
  </div>
)

export default Home
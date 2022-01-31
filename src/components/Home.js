import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBars from './SearchBars'
import SongLyrics from './SongLyrics'
import ErrorMsg from './ErrorMsg'

const Home = () => {
  const [lyrics, setLyrics] = useState('')
  const [error, setError] = useState('')

  return (
    <div className='home text-center'>
      <div className='home-overlay'>
      <h1 className='display-4'>
        Do you have a favourite song?
      </h1>
      <h2 className='display-5'>
      🎵 Search the lyrics here 🎵
      </h2>
      </div>
      <SearchBars 
        OnGetLyrics={(lyrics) => {
          setLyrics(lyrics)
        }}
        onError={(err) => {
          setLyrics('')
          setError(err)
        }}
      />
      {error !== '' ? <ErrorMsg error={error.response.data.error} /> : '' }
      {lyrics !== '' ? <SongLyrics lyrics={lyrics} /> : ''}
    </div>
  )
}

export default Home

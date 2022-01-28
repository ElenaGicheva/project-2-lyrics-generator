import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SongLyrics = () => {

  const [ lyrics, setLyrics ] = useState([])
  const [ hasError, setHasError ] = useState({ error: false, message: 'There was an error'})
  
  useEffect(() => {
    const getLyrics = async () => {
      try {
        const { data } = await axios.get('https://api.lyrics.ovh/v1/artist/title')
        setLyrics(data)
      } catch (error) {
        setHasError({ error: true, message: 'There was an error'})
      }
    }
    getLyrics()
  }, [])
}


export default SongLyrics
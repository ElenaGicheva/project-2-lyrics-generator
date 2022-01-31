import React, { useState, useRef } from "react"
import axios from "axios"

import Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SongLyrics from './SongLyrics'

const SearchBars = ({
  OnGetLyrics = f => f,
  onError = f => f,
}) => {

  const artist = useRef()
  const song = useRef()

  const getLyrics = async (song, artist) => {
    if (song === '' || artist === '') {
      return
    }
    const { data } = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
    return data.lyrics
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const lyrics = await getLyrics(song.current.value, artist.current.value)
      OnGetLyrics(lyrics)
    } catch (err) {
      onError(err)
    }
  }
  return (
    <div className='search-bar'>
      <Container>
        <Row>
          <form onSubmit={handleSubmit} className='mt-4'>
            <h3>Search</h3>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='artist'>Artist</Form.Label>
              <Form.Control ref={artist} name='artist' id='artist' type='text' placeholder='Artist' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='song'>Song</Form.Label>
              <Form.Control ref={song} name='song' id='song' type='text' placeholder='Song' />
            </Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </form>
        </Row>
      </Container>
    </div>
  )


}


export default SearchBars

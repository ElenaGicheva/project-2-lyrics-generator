import React from "react"
import axios from "axios"

import Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

const SearchBars = () => {

  const handleSubmit = async (e) => {
    console.log(e)
  }
  return (
    <div className='search-bar'>
      <Container>
        <Row>
          <form onSubmit={handleSubmit} className='mt-4'>
            <h3>Search</h3>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='artist'>Artist</Form.Label>
              <Form.Control type='text' placeholder='' />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='song'>Song</Form.Label>
              <Form.Control type='text' placeholder='' />
            </Form.Group>
          </form>
        </Row>
      </Container>
    </div>
  )


}


export default SearchBars
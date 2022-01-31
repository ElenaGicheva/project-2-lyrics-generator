import React from 'react'
import Alert from 'react-bootstrap/Alert'

const ErrorMsg = (props) => {
  return (
    <Alert variant='danger'>
      { props.error }
    </Alert>
  )
}


export default ErrorMsg

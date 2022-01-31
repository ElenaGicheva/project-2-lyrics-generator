import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SongLyrics = (props) => {
  return (
    <div className="lyrics">
      <pre>
        { props.lyrics }
      </pre>
    </div>
  )
}


export default SongLyrics

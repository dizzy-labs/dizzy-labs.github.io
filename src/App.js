import React from 'react'
import { Root, Routes } from 'react-static'
// import { Link } from '@reach/router'

import './app.css'
import './pico8.css'

function App () {
  return (
    <Root id='root'>
      {
      /* anything to be on every page goes here
      <nav>
        <Link to='/'>Back to Home</Link>
      </nav>
      */
      }
      <Routes />
    </Root>
  )
}

export default App

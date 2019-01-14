import React from 'react'
import { Root, Routes } from 'react-static'
// import { Link } from '@reach/router'

import './app.css'

function App () {
  return (
    <Root>
      {
      /* anything to be on every page goes here
      <nav>
        <Link to='/'>Back to Home</Link>
      </nav>
      */
      }
      <div className='content'>
        <Routes />
      </div>
    </Root>
  )
}

export default App

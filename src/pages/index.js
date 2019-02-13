import React from 'react'
import { withSiteData } from 'react-static'
//import { Link } from '@reach/router'

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>This page should get reworked soon.</h1>
    <p>In the meantime, here's some links to other more interesting pages:</p>
    <p><a href='/pico-8'>Play some pico-8 games</a></p>
    <p><a href='/emojos'>Look at all of my free emoji</a></p>
    {
      // <p><a href='/FishyWords'>Randomly generate some fish</a></p>
    }
  </div>
))

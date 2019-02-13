import React from 'react'
import { withSiteData } from 'react-static'
import { Link } from '@reach/router'

export default withSiteData(() => (
  <div style={{ textAlign: 'center' }}>
    <h1>This page should get reworked soon.</h1>
    <p>In the meantime, here's some links to other more interesting pages:</p>
    <p><Link to='/pico-8/'>Play some pico-8 games</Link></p>
    <p><Link to='/emojos/'>Look at all of my free emoji</Link></p>
    {
      // <p><Link to='/FishyWords'>Randomly generate some fish</Link></p>
    }
  </div>
))

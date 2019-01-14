import React, { Component } from 'react'
import { withSiteData } from 'react-static'
// import { Link } from '@reach/router'
import './index.css'

const emojoData = [
  {
    url: '/assets/emojos/alien_blue.png',
    alt: 'test image',
    shortcode: ':test:',
    description: 'this is a test'
  },
  {
    url: '/assets/emojos/alien_green.png',
    alt: 'test image',
    shortcode: ':test:',
    description: 'this is a test'
  },
  {
    url: '/assets/emojos/alien_red.png',
    alt: 'test image',
    shortcode: ':test:',
    description: 'this is a test'
  }
]

export default withSiteData(() => (
  <EmojosLibrary emojos={emojoData} />
))
class EmojosLibrary extends Component {
  render () {
    const emojos = this.props.emojos.map((emojo, index) =>
      <EmojoCard key={index}
        url={emojo.url}
        alt={emojo.alt}
        shortcode={emojo.shortcode}
        description={emojo.description}
      />
    )
    return (
      <div className='content'>
        <div>
          <h2>Creatures and Characters</h2>
          {emojos}
        </div>
      </div>
    )
  }
}
function EmojoCard (props) {
  return (
    <div className='card'>
      <img className='card__image card__image--px-art'
        src={props.url}
        alt={props.alt} />
      <h3 className='card__title'>{props.shortcode}</h3>
      <span className='card__text'>{props.description}</span>
    </div>
  )
}

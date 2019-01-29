import React, { Component } from 'react'
import { withSiteData } from 'react-static'
// import { Link } from '@reach/router'

export default withSiteData(({ emojoData }) => (
  <EmojosLibrary emojos={emojoData} />
))

class EmojosLibrary extends Component {
  render () {
    const emojoData = this.props.emojos
    const sections = []
    emojoData.forEach((section) => {
      const emojos = section.emojos.map((emojo, index) =>
        <EmojoCard key={emojo.shortcode}
          url={emojo.url}
          alt={emojo.alt}
          shortcode={emojo.shortcode}
          description={emojo.description}
        />
      )
      sections.push((
        <div key={section.title}>
          <h2>{section.title}</h2>
          {emojos}
        </div>
      ))
    })

    return sections
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

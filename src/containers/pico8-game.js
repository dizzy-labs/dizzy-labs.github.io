import React from 'react'
import {withRouteData} from 'react-static'
// import {Link} from '@reach/router'
import './pico8-game.css'

export default withRouteData(({game}) => (
  <div className='flex flex--center-item flex--center-content fill-height fill-width'>

    <aside id='game-info' className='flex__auto'>
      <a href="/pico-8/">
        Back to library
      </a>
      <h1>Now Playing</h1>
      <p>
        {game.name}
        <br />
        By: {game.author}
      </p>

      <div className='card card--pico8 p8-cart'>
        <img className='card__image p8-cart__image'
          src={`/assets/pico8-assets/${game.filePrefix}.p8.png`}
          title={`${game.name} by ${game.author}`}
          alt={`${game.name} by ${game.author}`} />
          { (game.bbsLink)
            ? <a className='p8-cart__link' href={game.bbsLink} >
              Open Pico-8 BBS thread
            </a> : ''
          }
      </div>

    </aside>

    <iframe id="p8-player"
      className='flex__fit'
      src={`/assets/pico8-assets/${game.filePrefix}.html`}
      allowfullscreen
      style={{border:'none'}, {overflow: 'hidden'}}>
    </iframe>
  </div>
))

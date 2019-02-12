import React from 'react'
import {withRouteData} from 'react-static'
import {Link} from '@reach/router'
import './pico8-game.css'

export default withRouteData(({game}) => (
  <div className='flex flex--center-item flex--center-content fill-height fill-width'>
    <aside id='game-info' className='flex__auto'>
      <Link to="/pico-8/">
        Back to library
      </Link>
      <h1>Now Playing</h1>
      <div className='card card--pico8'>
        <img className='card__image card__image--px-art'
          src={`/assets/pico8-assets/${game.filePrefix}.p8.png`}
          title={`${game.gameName} by ${game.author}`}
          alt={`${game.gameName} by ${game.author}`} />
          { (game.bbsLink)
            ? <a href={game.bbsLink} >
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

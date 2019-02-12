import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'
import './pico8.css'

export default withRouteData(({ gamesData }) => (
  GameLibrary(gamesData)
))

function GameLibrary (games) {
  const carts = games.map((game, index) =>
    <GameCart key={index}
      filePrefix={game.filePrefix}
      gameName={game.name}
      author={game.author}
      cartImage={game.image}
      bbsLink={game.bbsLink}
    />
  )
  return (
    <div id='game-library' className='content'>
      <span>
          Click a game to open it in a pico-8 player!
          All games on this page are released under a
        <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>
            Creative Commons Licence.
        </a>
      </span>
      <noscript>
          Sorry but you'll need javascript to play pico8 games in your browser.
      </noscript>
      <div id='cart-shelf'>
        {carts}
      </div>
    </div>
  )
}

function GameCart (game) {
  return (
    <Link to={`/pico-8/play/${game.filePrefix}`}
      className='card card--pico8 clickable'>
      <img className='card__image card__image--px-art'
        src={`/assets/pico8-assets/${game.filePrefix}.p8.png`}
        title={`${game.gameName} by ${game.author}`}
        alt={`${game.gameName} by ${game.author}`} />
      { (game.bbsLink)
        ? <a href={game.bbsLink} >
          Open Pico-8 BBS thread
        </a> : ''
      }
    </Link>
  )
}

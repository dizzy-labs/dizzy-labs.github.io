import React from 'react'
import { withRouteData } from 'react-static'
import { Link } from '@reach/router'

export default withRouteData(({ gamesData }) => (
  <React.Fragment>
    <Link to='/'>Back to Home</Link>
    {GameLibrary(gamesData)}
  </React.Fragment>
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
    <div className='card card--pico8 p8-cart'>
      <Link className='no-sparkles' to={`/pico-8/play/${game.filePrefix}/`}>
        <img className='card__image p8-cart__image'
          src={`/assets/pico8-assets/${game.filePrefix}.p8.png`}
          title={`${game.gameName} by ${game.author}`}
          alt={`${game.gameName} by ${game.author}`} />
      </Link>
      { (game.bbsLink)
        ? <a className='p8-cart__link'
          href={game.bbsLink} >
          Open Pico-8 BBS thread
        </a> : ''
      }
    </div>
  )
}

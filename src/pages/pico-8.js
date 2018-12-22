import React, { Component } from 'react'
import { withSiteData } from 'react-static'
// import { Link } from '@reach/router'
import './index.css'
import './pico8.css'

const gamesData = [
  {
    name: 'test game',
    author: 'dizzy-labs',
    image: '/assets/pico8-assets/hike.p8.png',
    bbsLink: ''
  },
  {
    name: 'test game',
    author: 'dizzy-labs',
    image: '/favicon.ico',
    bbsLink: ''
  },
  {
    name: 'test game',
    author: 'dizzy-labs',
    image: '',
    bbsLink: ''
  }
]

export default withSiteData(() => (
  <GameLibrary games={gamesData} />
))
class GameLibrary extends Component {
  constructor (props) {
    super(props)
    this.openGame = this.openGame.bind(this)
  }
  openGame () {

  }
  render () {
    const carts = this.props.games.map((game, index) =>
      <GameCart key={index}
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
}
function GameCart (props) {
  return (
    <div className='card clickable'
      onClick={props.handleClick} >
      <img className='card__image card__image--px-art'
        src={props.cartImage}
        title={`${props.gameName} by ${props.author}`}
        alt={`${props.gameName} by ${props.author}`} />
      <a href={props.bbsLink} >
        Open Pico-8 BBS thread
      </a>
    </div>
  )
}

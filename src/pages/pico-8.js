import React, { Component } from 'react'
import { withSiteData } from 'react-static'
// import { Link } from '@reach/router'
import './pico8.css'

const gamesData = [
  {
    name: 'Spaceshooter Aleph',
    author: 'dizzy-labs',
    image: '/assets/pico8-assets/spaceshooter_aleph.p8.png',
    bbsLink: ''
  },
  {
    name: 'Slime Factory',
    author: 'dizzy-labs',
    image: '/assets/pico8-assets/slime_factory.p8.png',
    bbsLink: ''
  },
  {
    name: 'Patty Brawl 8',
    author: 'dizzy-labs',
    image: '/assets/pico8-assets/pattybrawl8.p8.png',
    bbsLink: ''
  },
  {
    name: 'Hike',
    author: 'Solar',
    image: '/assets/pico8-assets/hike.p8.png',
    bbsLink: ''
  },
  {
    name: 'Karaoke',
    author: 'Solar',
    image: '/assets/pico8-assets/karaoke.p8.png',
    bbsLink: ''
  },
  {
    name: 'Shodo',
    author: 'oinariman',
    image: '/assets/pico8-assets/shodo.p8.png',
    bbsLink: ''
  },
  {
    name: 'PICO Racer',
    author: 'Kometbomb',
    image: '/assets/pico8-assets/pico_racer.p8.png',
    bbsLink: ''
  },
  {
    name: 'Marballs 2',
    author: 'Lucatron',
    image: '/assets/pico8-assets/marballs2.p8.png',
    bbsLink: ''
  },
  {
    name: 'PICO-8 Tunes vol. 1',
    author: 'Gruber and Krajzeg',
    image: '/assets/pico8-assets/pico8_tunes_vol1.p8.png',
    bbsLink: ''
  },
  {
    name: '9 Songs in PICO-8',
    author: 'Robby Duguay',
    image: '/assets/pico8-assets/9_songs_in_pico8.p8.png',
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
        handleOpenGame={this.openGame}
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
    <div tabIndex={0} role='button' className='card clickable'
      onClick={props.handleOpenGame}
      onKeyPress={
        (e) => {
          if (e.which === 32) { props.handleOpenGame() }
        }} >
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

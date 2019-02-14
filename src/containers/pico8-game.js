import React from 'react'
import {withRouteData} from 'react-static'
// import {Link} from '@reach/router'
import './pico8-game.css'

window.Module = {}

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

    {
      /*
    <iframe id="p8-player"
      className='flex__fit'
      src={`/assets/pico8-assets/${game.filePrefix}.html`}
      allowfullscreen
      style={{border:'none'}, {overflow: 'hidden'}}>
    </iframe>
    */
    }
    <P8Player game={game}/>
  </div>
))

class P8Player extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {

    // inject scripts duplicated across other pico8 html files
		const canvas = document.getElementById("canvas")
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		// show Emscripten environment where the canvas is
		// arguments are passed to PICO-8

		//Module = {}
		window.Module.canvas = canvas

    // loading the correct game source code to play as a script
    const gameScript = document.createElement('script')
    gameScript.type = 'text/javascript'
    gameScript.async = true
    gameScript.src = `/assets/pico8-assets/${this.props.game.filePrefix}.js`
    document.body.appendChild(gameScript)
		/*
			// When pico8_buttons is defined, PICO-8 takes each int to be a live bitfield
			// representing the state of each player's buttons

			var pico8_buttons = [0, 0, 0, 0, 0, 0, 0, 0]; // max 8 players
			pico8_buttons[0] = 2 | 16; // example: player 0, RIGHT and Z held down

			// when pico8_gpio is defined, reading and writing to gpio pins will
			// read and write to these values
			var pico8_gpio = new Array(128);
		*/

    //document.body.appendChild(canvasScript)

    const keyBlockerScript = document.createElement('script')
    keyBlockerScript.type = 'text/javascript'
    keyBlockerScript.async = false
    keyBlockerScript.innerHtml = `
      // key blocker. prevent cursor keys from scrolling page while playing cart.

  		function onKeyDown_blocker(event) {
  			event = event || window.event;
  			var o = document.activeElement;
  			if (!o || o == document.body || o.tagName == "canvas")
  			{
  				if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1)
  				{
  					if (event.preventDefault) event.preventDefault();
  				}
  			}
  		}

  		document.addEventListener('keydown', onKeyDown_blocker, false);
    `
    document.body.appendChild(keyBlockerScript)

  }

  render (props) {
    return (
    <center id='p8-player'>
      <div style={{width:"512px"}}>
        <canvas className="emscripten" id="canvas" onContextMenu={((event) => event.preventDefault())}></canvas>
        <br />

      	<div className='pico8_el' onClick={((event) => Module.pico8Reset())}>

      	  <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAaklEQVR4Ae2dOwoAMQhE15A+rfc/3bZ7AlMnQfywCkKsfcgMM9ZP+QHtIn0vLeBAFduiFdQ/0DmvtR5LXJ6CPSXe2ZXcFNlTxFbemKrbZPs35XogeS9xeQr+anT6LzoOwEDwZJ7jwhXUnwkTTiDQ2Ja34AAAABB0RVh0TG9kZVBORwAyMDExMDIyMeNZtsEAAAAASUVORK5CYII="} alt={"Reset"} style={{width:12}, {height:	12}}/>
          Reset
        </div>

  	    <div className='pico8_el' onClick={((event) => Module.pico8TogglePaused())}>

  	    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAPUlEQVR4Ae3doQ0AIAxEUWABLPtPh2WCq26DwFSU/JPNT166QSu/Hg86W9dwLte+diP7AwAAAAAAgD+A+jM2ZAgo84I0PgAAABB0RVh0TG9kZVBORwAyMDExMDIyMeNZtsEAAAAASUVORK5CYII="} alt="Pause" style={{width:12}, {height:	12}}/>

  	    Pause
        </div>
  	    <div className='pico8_el' onClick={((event) => Module.requestFullScreen(true, false))}>
  	    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAaklEQVR4Ae2dsQ1AIQhExfze1v2ns3UCrfgFhmgUUAoGgHscp21wX9BqaZoDojbB96OkDJKNcTN2BHTyYNYmoT2BlPL7BKgcPfHjAVXKKadkHOn9K1r16N0czN6a95N8mnA7Aq2fTZ3Af3UKmCSMazL8HwAAABB0RVh0TG9kZVBORwAyMDExMDIyMeNZtsEAAAAASUVORK5CYII="} alt="Fullscreen" style={{width:12}, {height:	12}}/>

  	     Fullscreen
        </div>
  	    <div className='pico8_el' onClick={((event) => Module.pico8ToggleSound())}>
  	    <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXklEQVR4Ae2doQ4AIQxD4YLH8v9fh+ULhjpxxSwLg2uyapr1JRu1iV5Z+1BGl4+xNpX38SYo2uRvYiT5LwEmt+ocgXVLrhPEgBiw8Q5w7/kueSkK+D2tJO4E/I3GrwkqQCBabEj/4QAAABB0RVh0TG9kZVBORwAyMDExMDIyMeNZtsEAAAAASUVORK5CYII="} alt="Toggle Sound" style={{width:12}, {height:	12}}/>

  	     Sound
         </div>
  	     <div className='pico8_el' >
          <a className='no-sparkles' target="_new" href={this.props.game.bbsLink}>
  	       <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAlElEQVR4Ae2dMQ5FQBCGh6jcwAkkateg3DiAa+iQUGqVKi95FQfAJRQOoHeBUf8JyQqKjZ1uMzuz2e/LTE3KhyF7kSlgLOykas23f6D+A9Yp84aAOYU15pcJnfji0Il2ID8HzC4y38ZrnfIBGxeRoR3c3EWrACdsV5BOsx7OSRnrOXh4F5HzA6bevwUn8wlz7eCDsQM99B3ks0s/4QAAABB0RVh0TG9kZVBORwAyMDExMDIyMeNZtsEAAAAASUVORK5CYII="} alt="More Carts" style={{width:12}, {height:	12}}/>

  	       Carts
           </a>
        </div>

  	     <br />

  	  </div>
    </center>
  )
  }
}

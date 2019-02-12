import axios from 'axios'
import React from 'react'

const charaEmojo = [
  {
    url: '/assets/emojos/alien_blue.png',
    alt: 'a pixel art buglike blue alien',
    shortcode: ':alien_blue:',
    description: 'The blue alien enemies from Spaceshooter Aleph'
  },
  {
    url: '/assets/emojos/alien_green.png',
    alt: 'a pixel art buglike green alien',
    shortcode: ':alien_green:',
    description: 'The green alien enemies from Spaceshooter Aleph'
  },
  {
    url: '/assets/emojos/alien_red.png',
    alt: 'a pixel art buglike red alien',
    shortcode: ':alien_red:',
    description: 'The red alien enemies from Spaceshooter Aleph'
  },
  {
    url: '/assets/emojos/patty.png',
    alt: 'a pixel art witch with flaming blue hair',
    shortcode: ':patty:',
    description: 'A witch named Patty'
  },
  {
    url: '/assets/emojos/patty_fly.png',
    alt: 'a pixel art witch with flaming blue hair flying',
    shortcode: ':patty_fly:',
    description: 'Patty flying'
  },
  {
    url: '/assets/emojos/slime_blue.png',
    alt: 'a pixel art blue colored slime',
    shortcode: ':slime_blue:',
    description: 'A blue slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_blue_crawl.png',
    alt: 'a pixel art blue colored slime crawling',
    shortcode: ':slime_blue_crawl:',
    description: 'A crawling blue slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_green.png',
    alt: 'a pixel art green colored slime',
    shortcode: ':slime_green:',
    description: 'A green slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_green_crawl.png',
    alt: 'a pixel art greeb colored slime crawling',
    shortcode: ':slime_green_crawl:',
    description: 'A crawling green slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_red.png',
    alt: 'a pixel art red colored slime',
    shortcode: ':slime_red:',
    description: 'A red slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_red_crawl.png',
    alt: 'a pixel art red colored slime crawling',
    shortcode: ':slime_red_crawl:',
    description: 'A crawling red slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_rainbow.png',
    alt: 'a pixel art rainbow colored slime',
    shortcode: ':slime_rainbow:',
    description: 'A rainbow slime from Slime Factory'
  },
  {
    url: '/assets/emojos/slime_rainbow_crawl.png',
    alt: 'a pixel art rainbow colored slime crawling',
    shortcode: ':slime_rainbow_crawl:',
    description: 'A crawling rainbow slime from Slime Factory'
  },
  {
    url: '/assets/emojos/spaceship.png',
    alt: 'a pixel art spaceship',
    shortcode: ':alien_spaceship:',
    description: 'The spaceship from Spaceshooter Aleph'
  },
  {
    url: '/assets/emojos/emojojojo.png',
    alt: 'a pixel art Mojojojo',
    shortcode: ':emojojo:',
    description: 'An emojo of Mojojojo\nAn Emojojojo'
  }
]
const foodEmojo = [
  {
    url: '/assets/emojos/cappuccino.png',
    alt: 'a pixel art cappuccino',
    shortcode: ':cappuccino:',
    description: 'A cappuccino'
  },
  {
    url: '/assets/emojos/mocha.png',
    alt: 'a pixel art mocha',
    shortcode: ':mocha:',
    description: 'A cup of mocha'
  },
  {
    url: '/assets/emojos/lattentacle.png',
    alt: 'a pixel art cup of coffee with a tentacle coming out of it',
    shortcode: ':lattentacle:',
    description: 'A latte with a tentacle chilling out in it'
  },
  {
    url: '/assets/emojos/coffee_pot.png',
    alt: 'a pixel art coffee pot',
    shortcode: ':coffee_pot:',
    description: 'A pot of coffee'
  },
  {
    url: '/assets/emojos/rice.png',
    alt: 'a pixel art bowl of rice',
    shortcode: ':rice:',
    description: 'A bowl of rice from Slime Factory'
  }
]
const miscEmojo = [
  {
    url: '/assets/emojos/block_brass.png',
    alt: 'a pixel art block of brass',
    shortcode: ':block_brass:',
    description: 'A brass colored block from Slime Factory'
  },
  {
    url: '/assets/emojos/block_clay.png',
    alt: 'a pixel art block of clay',
    shortcode: ':block_clay:',
    description: 'A clay block from Slime Factory'
  },
  {
    url: '/assets/emojos/block_grass.png',
    alt: 'a pixel art block of dirt with grass on top',
    shortcode: ':block_grass:',
    description: 'A grass covered block from Slime Factory'
  },
  {
    url: '/assets/emojos/block_iron.png',
    alt: 'a pixel art block of iron',
    shortcode: ':block_iron:',
    description: 'An iron block from Slime Factory'
  },
  {
    url: '/assets/emojos/bomb.png',
    alt: 'a pixel art cartoon bomb',
    shortcode: ':bomb:',
    description: 'The screen clearing bomb item from Spaceshooter Aleph'
  },
  {
    url: '/assets/emojos/candle.png',
    alt: 'a pixel art candle',
    shortcode: ':candle:',
    description: 'The shop\'s candle from Slime Factory'
  },

  {
    url: '/assets/emojos/coin.png',
    alt: 'a pixel art coin',
    shortcode: ':coin:',
    description: 'A coin from Slime Factory'
  },
  {
    url: '/assets/emojos/coin_up.png',
    alt: 'a pixel art coin with a plus sign',
    shortcode: ':coin_up:',
    description: 'The sprite that appears when a slime finds a coin from Slime Factory'
  },
  {
    url: '/assets/emojos/coinjar.png',
    alt: 'a pixel art jar with several gold coins at the bottom',
    shortcode: ':coinjar:',
    description: 'The shop\'s coin jar from Slime Factory'
  },
  {
    url: '/assets/emojos/spaceship_up.png',
    alt: 'a pixel spaceship with a plus sign',
    shortcode: ':spaceship_up:',
    description: 'The extra life icon from Spaceshooter Aleph'
  },
  {
    url: '/assets/emojos/fireball.png',
    alt: 'a pixel fireball',
    shortcode: ':fireball:',
    description: 'A fireball from the unfinished Super Patty Brawl 8'
  }
]
const gamesData = [
  {
    name: 'Spaceshooter Aleph',
    filePrefix: 'spaceshooter_aleph',
    author: 'dizzy-labs',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=41638#p41649'
  },
  {
    name: 'Slime Factory',
    filePrefix: 'slime_factory',
    author: 'dizzy-labs',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=42292#p42291'
  },
  {
    name: 'Patty Brawl 8',
    filePrefix: 'pattybrawl8',
    author: 'dizzy-labs',
    bbsLink: ''
  },
  {
    name: 'Hike',
    filePrefix: 'hike',
    author: 'Solar',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=16152#p16151'
  },
  {
    name: 'Karaoke',
    filePrefix: 'karaoke',
    author: 'Solar',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=31029#p31028'
  },
  {
    name: 'Shodo',
    filePrefix: 'shodo',
    author: 'oinariman',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=11020#p22602'
  },
  {
    name: 'PICO Racer',
    filePrefix: 'pico_racer',
    author: 'Kometbomb',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=19673#p20068'
  },
  {
    name: 'Marballs 2',
    filePrefix: 'marballs2',
    author: 'Lucatron',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=34773#p46032'
  },
  {
    name: 'PICO-8 Tunes vol. 1',
    filePrefix: 'pico8_tunes_vol1',
    author: 'Gruber and Krajzeg',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=38442#p38440'
  },
  {
    name: '9 Songs in PICO-8',
    filePrefix: '9_songs_in_pico8',
    author: 'Robby Duguay',
    bbsLink: 'https://www.lexaloffle.com/bbs/?pid=15487#p16503'
  }
]
const emojoData = [
  {
    title: 'Characters and Creatures',
    emojos: charaEmojo
  },
  {
    title: 'Food and Beverages',
    emojos: foodEmojo
  },
  {
    title: 'Miscellaneous',
    emojos: miscEmojo
  }
]

export default {
  getSiteData: () => ({
    title: 'Dizzy Directory'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/'
      }, {
        path: '/emojos',
        getData: () => ({emojoData})
      }, {
        path: '/pico-8',
        getData: () => ({gamesData}),
        children: gamesData.map(game => ({
          path: `/play/${game.filePrefix}`,
          component: 'src/containers/pico8-game',
          getData: () => ({game})
        }))
      }
    ]
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Dizzy Directory</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}

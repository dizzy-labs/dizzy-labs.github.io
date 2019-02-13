

import universal, { setHasBabelPlugin } from '/home/dizzy/Code/dizzy-labs.github.io/node_modules/react-universal-component/dist/index.js'
  


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
const t_1 = universal(import('../src/pages/emojos.js'), universalOptions)
const t_2 = universal(import('../src/pages/index.js'), universalOptions)
const t_3 = universal(import('../src/pages/pico-8.js'), universalOptions)
const t_4 = universal(import('../src/containers/pico8-game'), universalOptions)


export const template404ID = 0

// Template Map
export default [
  t_0,
t_1,
t_2,
t_3,
t_4
]

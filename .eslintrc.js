module.exports = {
  extends: ['react-tools', 'standard', 'standard-jsx'],
  rules: {
    'jsx-a11y/anchor-is-valid': ['off']// disable cause it fights with <Link /> s
  }
}

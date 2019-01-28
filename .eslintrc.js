module.exports = {
  extends: ['standard-react', 'standard', 'standard-jsx'],
  rules: {
    'jsx-a11y/anchor-is-valid': ['off'],// disable cause it fights with <Link /> s
    'react/prop-types': 0// disable propType checks
  }
}

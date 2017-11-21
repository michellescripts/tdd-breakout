let yellPhrase = (phrase) => {
  if (!phrase || typeof phrase !== 'string') {
    return 'Please input a phrase'
  }
  return phrase.toUpperCase()
}

module.exports = {
  yellPhrase
}

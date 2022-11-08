const fs = require('fs')

const loadMovie = () => {
  const fileBuffer = fs.readFileSync('tmdbMovies.json', 'utf-8')
  const movies = JSON.parse(fileBuffer)
  return movies;
}

module.exports = { loadMovie }
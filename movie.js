const fs = require('fs')

const loadMovie = () => {
  const fileBuffer = fs.readFileSync('tmdbMovies.json', 'utf-8')
  const movies = JSON.parse(fileBuffer)
  return movies;
}

const findMovie = (id) => {
  const movie = loadMovie()
  let foundMovie = null
  const keys = Object.keys(movie)
  for(let i=0; i<keys.length; i++){
    if (movie[keys[i]].id == id) {
      foundMovie = movie[keys[i]];
      break;
    }
  }
  return foundMovie
}

module.exports = { loadMovie, findMovie }
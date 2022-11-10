const fs = require('fs')

const saveMovies = (movies) => {
  fs.writeFileSync('tmdbMovies.json', JSON.stringify(movies));
}

const loadMovie = () => {
  const fileBuffer = fs.readFileSync('tmdbMovies.json', 'utf-8')
  const movies = JSON.parse(fileBuffer)
  return movies;
}

const findMovie = (id) => {
  const movies = loadMovie()
  let foundMovie = null
  const keys = Object.keys(movies)
  for(let i=0; i<keys.length; i++){
    if (movies[keys[i]].id == id) {
      foundMovie = movies[keys[i]];
      break;
    }
  }
  return foundMovie
}

const updateMovie = (id, NewMovieData) => {
  const movies = loadMovie()
  const keys = Object.keys(movies)
  for(let i=0; i<keys.length; i++){
    if (movies[keys[i]].id == id) {
      movies[keys[i]].budget = NewMovieData.budget
      movies[keys[i]].homepage = NewMovieData.homepage
      movies[keys[i]].original_language = NewMovieData.original_language
      movies[keys[i]].overview = NewMovieData.overview
      movies[keys[i]].popularity = NewMovieData.popularity
      movies[keys[i]].runtime = NewMovieData.runtime
      movies[keys[i]].tagline = NewMovieData.tagline
      movies[keys[i]].title = NewMovieData.title
      break;
    }
  }
  saveMovies(movies)
}

const addMovie = (movie) => {
  const movies = loadMovie()
  movies.push(movie)
  saveMovies(movies)
}

const deleteMovie = (id) => {
  const movies = loadMovie()
  const filteredMovies = movies.filter((movie)=> movie.id != id)
  saveMovies(filteredMovies)
}

module.exports = { loadMovie, findMovie, addMovie, deleteMovie, updateMovie }
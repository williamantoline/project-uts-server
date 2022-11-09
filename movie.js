const fs = require('fs')
const fsPromises = require('fs/promises')

const saveMovies = (movies) => {
  fs.writeFileSync('tmdbMovies.json', JSON.stringify(movies));
}

const loadMovie = async () => {
  try{
    const fileBuffer = await fsPromises.readFile('tmdbMovies.json', { encoding: 'utf-8' })
    const movies = JSON.parse(fileBuffer)
    return movies
  }catch(err){
    console.log(err)
  }
}

const findMovie = async (id) => {
  const movies = await loadMovie()
  let foundMovie = null
  const keys = Object.keys(movies)
  for(let i=0; i<keys.length; i++){
    if (movies[keys[i]].id == id) {
      foundMovie = movies[keys[i]]
      break;
    }
  }
  return foundMovie
}

const updateMovie = async (id, movie) => {
  await deleteMovie(id)
  await addMovie(movie)
}

const addMovie = async (movie) => {
  const movies = await loadMovie()
  movies.push(movie)
  saveMovies(movies)
}

const deleteMovie = async (id) => {
  const movies = await loadMovie()
  const filteredMovies = movies.filter((movie)=> movie.id != id)
  saveMovies(filteredMovies)
}

module.exports = { loadMovie, findMovie, addMovie, deleteMovie, updateMovie }
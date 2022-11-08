const express = require('express')
const cors = require('cors')
const { loadMovie } = require('./movie')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/movies', (req, res) => {
  const movie = loadMovie()
  res.send(movie)
})

app.get('/movie/:id', (req, res) => {
  const movie = loadMovie()
  let foundMovie = null
  const keys = Object.keys(movie)
  for(let i=0; i<keys.length; i++){
    if (movie[keys[i]].id == req.params.id) {
      foundMovie = movie[keys[i]];
      break;
    }
  }
  if(foundMovie == null){
    res.status(404).send("Movie Not Found")
  }else{
    res.send(foundMovie)
    res.status(200)
  }
})

app.use('/', (req,res) => {
  res.status(404).send("File Not Found")
})

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

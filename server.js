const express = require('express')
const cors = require('cors')
const { loadMovie, findMovie } = require('./movie')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/movies', (req, res) => {
  const movie = loadMovie()
  res.send(movie)
})

app.get('/movie/:id', (req, res) => {
  found = findMovie(req.params.id)
  if(found == null){
    res.status(404).send("Movie is not found")
  }else{
    res.send(found)
    res.status(200)
  }
})

app.use('/', (req,res) => {
  res.status(404).send("File Not Found")
})

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

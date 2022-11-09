const express = require('express')
const cors = require('cors')
const { loadMovie, findMovie, addMovie, deleteMovie, updateMovie } = require('./movie')
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

app.get('/movies', (req, res) => {
  const movies = loadMovie()
  movies.then((result)=>{
    res.status(200).send(result)
  })
})

app.get('/movie/:id', (req, res) => {
  let found = findMovie(req.params.id)
  found.then((result)=>{
    if(result == null){
      res.status(404).send("Movie is not found")
    }else{
      res.send(result).status(200)
    }
  })
})

app.put('/movie/:id', (req, res) => {
  let found = findMovie(req.params.id)
  found.then((result)=>{
    if(result == null){
      addMovie(req.body)
      res.status(200).end()
    }else{
      updateMovie(req.params.id, req.body)
      res.status(200).end()
    }
  })
})

app.delete('/movie/:id', (req, res) => {
  let found = findMovie(req.params.id)
  found.then((result)=>{
    if(result == null){
      res.status(404).send("Movie is not found")
    }else{
      deleteMovie(req.params.id)
      res.status(200).send("Movie deleted successfully")
    }
  })
})

app.use('/', (req,res) => {
  res.status(404).send("File Not Found")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

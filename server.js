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

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

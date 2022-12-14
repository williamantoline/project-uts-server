const express = require("express");
const cors = require("cors");
const {
  loadMovie,
  findMovie,
  addMovie,
  deleteMovie,
  updateMovie,
} = require("./movie");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;
const HOST = "http://localhost:3000";

app.get("/api/movies", (req, res) => {
  const movie = loadMovie();
  res.status(200).send(movie);
});

app.get("/api/movie/:id", (req, res) => {
  let found = findMovie(req.params.id);
  if (found == null) {
    res.status(404).send("Movie is not found");
  } else {
    res.send(found).status(200);
  }
});

app.put("/api/movie/:id", (req, res) => {
  let found = findMovie(req.params.id);
  if (found == null) {
    addMovie(req.body);
    res.status(200).send("Movie added successfully");
  } else {
    updateMovie(req.params.id, req.body);
    res.status(200).send("Movie updated successfully");
  }
});

app.delete("/api/movie/:id", (req, res) => {
  let found = findMovie(req.params.id);
  if (found == null) {
    res.status(404).send("Movie is not found");
  } else {
    deleteMovie(req.params.id);
    res.status(200).send("Movie deleted successfully");
  }
});

app.use("/", (req, res) => {
  res.status(404).send("File Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${HOST}`);
});

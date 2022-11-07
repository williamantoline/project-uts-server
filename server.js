const express = require("express");
const app = express();
const PORT = 3000;

app.get("/test", (req, res) => {
  res.send({ message: "ok" });
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

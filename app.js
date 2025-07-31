const express = require("express");
const app = express();
const bookRoutes = require("./routes/bookRoutes");
const PORT = 3000;

app.use(express.json());

app.use("/books", bookRoutes);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log("Server running on ${PORT}");
});

const express = require("express");
const connectToDatabase = require("./src/databases/database.js")
const cors = require('cors');
const port = 3001;
const app = express();
connectToDatabase();
const route = require('./src/routes/objetivos.route');

app.use(cors());
app.use(express.json());

app.use('/home', route);

app.get("/home", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

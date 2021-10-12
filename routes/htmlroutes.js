const path = require('path');
const app = require('express').Router();

//to get notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'), console.log("going to notes"))

);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'), console.log("going to index"))

);

module.exports = app;
const express = require('express');
const fs = require('fs');
const PORT = process.env.port || 3001;
const uuid = require('./helpers/uuid');
const app = express();
const htmlroutes = require('./routes/htmlroutes');
const apiroutes = require('./routes/apiroutes');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(htmlroutes);
app.use(apiroutes);
app.use(express.static('public'));


app.get("/api/notes", (req, res) =>
  fs.readFile(path.join(__dirname, './db/db.json'), "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    const notes = JSON.parse(data);
    res.json(notes);
  }));

// poste route using DB.JSON file
app.post('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, './db/db.json'), "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    }
    const notes = JSON.parse(data);
    console.log('Parse!', notes)
    const noteRequest = req.body;
    const newNote = {
      id: uuid(),
      title: noteRequest.title,
      text: noteRequest.text,
    };
    notes.push(newNote);
    res.json(newNote);

    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(notes, null, 2), "utf-8", (function (err) {
      if (err) throw err; console.log("New note created!")
    }));
  });

});










app.listen(PORT, () =>
  console.log(`Listening to http://localhost:${PORT}`)
);
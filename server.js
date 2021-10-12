const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.port || 3001;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//to get notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'),
    console.log("notes connection achieved!")
})
app.listen(3000)
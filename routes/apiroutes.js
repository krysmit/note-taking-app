const app = require('express').Router();
const fs = require('fs');
const db = require('../db/db.json');
app.get('/api/notes', function(req, res){
    db = fs.readFileSync("./db/db.json")
    console.log('get', db)
    res.json(db);
});

module.exports = app;
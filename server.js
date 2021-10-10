const express = require('express');
const app = express();
// const pulls = require('../db/db.json')
// const util = require("util");
// const fs = require("fs");

app.get("/", (req, res) => {
    console.log('get working')
    res.send("HELLO")
})
app.listen(3000)
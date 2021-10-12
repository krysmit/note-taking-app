const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.port || 3001;
const app = express();

app.get("/", (req, res) => {
    console.log('get working')
    res.send("HELLO")
})
app.listen(3000)
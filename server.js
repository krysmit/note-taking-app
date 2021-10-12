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
app.use(express.static('public'));
app.use(htmlroutes);
app.use(apiroutes);





app.listen(PORT, () =>
  console.log(`Listening to http://localhost:${PORT}`)
);
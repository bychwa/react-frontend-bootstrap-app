'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const APP_PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(compression());

app.get('/app', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(APP_PORT, () => {
  console.log(`App is running through port ${APP_PORT}!`)
});
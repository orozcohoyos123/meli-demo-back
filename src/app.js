const express = require('express');

const router = require('./routes/index.routes');

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}));
router(app);

module.exports = app; 
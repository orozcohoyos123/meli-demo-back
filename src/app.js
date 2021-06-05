const express = require('express');
const cors = require('cors');
const router = require('./routes/index.routes');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
router(app);

module.exports = app; 
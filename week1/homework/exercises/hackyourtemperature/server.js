'use strict';

const express = require('express');
const app = express();

/*
 * const axios = require('axios');
 * const expressHandelbars = require('express-handlebars');
 */

app.get('/', function (req, res) {
    res.send('Hello from backend to frontend!');
});

app.listen(3000);
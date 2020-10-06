'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');
const expressHandelbars = require('express-handlebars');
app.use(express.urlencoded({ extended: false }));
// app.get('/', function (req, res) {
//     res.send('Hello from backend to frontend!');
// });
// the Frontend, make express aware of the templating engine by using the `engine()` and `set()` functions
app.set('view engine', 'handlebars');
app.engine('handlebars', expressHandelbars({ defaultLayout: false }));
// Rendering index page send a template using the `render()` function
app.get('/', function(req, res) {
  res.render('index');
});

// the Backend, creating a city name from the request
app.post('/weather', function(req, res) {
  const cityName = req.body.cityName;
  res.writeHead(200, "OK", {'Content-Type': 'application/json'});
  res.end(cityName); 
  console.log(cityName);
});

app.listen(3000);

'use strict';

const express = require('express');
const app = express();
app.use(express.json());
const axios = require('axios');
const expressHandelbars = require('express-handlebars');
app.use(express.urlencoded({ extended: false }));
const API_KEY = require('./sources/keys.json').API_KEY;

/*  sources with information what was used are https://expressjs.com/ru/api.html#express
* https://github.com/axios/axios
*/

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
    // pass the value of the API endpoint in variable and to add &units=metric for temperature in Celsius
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    axios.get(apiEndpoint)
    // if the city is found we return a message that includes the city name and current temperature
    .then(response => { 
        res.render('index',
    { 
        weatherText: `In ${response.data.name} now is ${Math.trunc(response.data.main.temp)} degrees.` 
    })
})
// if the city name is not found, we send to client a response with a message that the city isn't found
    .catch(error => { 
        console.error(error.response.status);
        res.render('index',
        { 
            weatherText: 'City is not found!' 
        }) 
    }
)
});

app.listen(3000);
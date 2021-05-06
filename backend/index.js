const express = require('express')
const app = express();
const axios = require('axios');
app.use(express.json());

app.get('/getAnimalDescription', function (req, res) {

    axios.get('https://codubee-projects-api.herokuapp.com/animal/getAnimalDescription')
    .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) { 
        //handle error and send back error message
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })
})

app.get('/getWeather', function (req, res) {

    axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeather')
    .then(function (response) {
        // handle success and send back a 200 response with the data
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) { 
        //handle error and send back error message
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })
})

app.listen(8080, () => console.log('Listening at localhost:8080'));

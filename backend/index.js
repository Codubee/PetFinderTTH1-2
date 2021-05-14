const express = require('express')
const app = express();
const axios = require('axios');
var cors = require('cors')
app.use(express.json());
app.use(cors())


app.post('/addAnimal', function(req,res){
    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal',req.body)
    .then(function (response) {
        console.log(response.data)
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })       
})

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

app.listen(8080, () => console.log('Listening at localhost:8080'));

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

app.listen(process.env.PORT || 8080, () => console.log('Listening at localhost:8080'));

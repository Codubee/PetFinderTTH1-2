const express = require('express')
const app = express();
const axios = require('axios');
var cors = require('cors')
app.use(express.json());
app.use(cors())


app.post('/addAnimal', function(req,res){
    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal',req.body)
    .then(function (response) {
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
        res.status(200).json(response.data);
    })
    .catch(function (error) { 
        //handle error and send back error message
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })
})

app.get('/getMatches', function(req, res){
    //gets the query parameter
    let id = req.query.id;

    //Make a get request with the name query parameter
    axios.get('https://codubee-projects-api.herokuapp.com/animal/getMatches?id='+id)
    .then(function (response) {

         //if successful, sends the match data and the responce code
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        //if fails, sends an error message and the responce code
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})

app.get('/getWeather', function (req, res) {

    axios.get('https://codubee-projects-api.herokuapp.com/translate/getWeather')
    .then(function (response) {
        // handle success and send back a 200 response with the data

        res.status(200).json(response.data);
    })
    .catch(function (error) { 
        //handle error and send back error message
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })
})

app.listen(process.env.PORT || 8080, () => console.log('Listening at localhost:8080'));

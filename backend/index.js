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

app.get('/getMatches', function(req, res){
    //gets the query parameter
    console.log(req.query)
    let name = req.query.name;

    //Make a get request with the name query parameter
    axios.get('https://codubee-projects-api.herokuapp.com/animal/getMatches'+name)
    .then(function (response) {
        console.log(response.data);
         //if successful, sends the match data and the responce code
        res.status(200).json({});
    })
    .catch(function (error) {
        //if fails, sends an error message and the responce code
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})

app.listen(8080, () => console.log('Listening at localhost:8080'));

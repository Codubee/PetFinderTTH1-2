const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());

app.post('/addAnimal', function(req,res){

    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal',req)
    .then(function (response) {
        console.log(response.data)
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })       
})

app.listen(8080, () => console.log('Listening at localhost:8080'))
const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());

app.post('/addAnimal', function(req,res){

    const body = {
        "id":1,
        "record": {
            "name": "Brownie",
            "type": "Labrador Retriever",
            "sex": "Male",
            "shelter_name": "Austin Pets Alive",
            "adoption_url": "https://www.austinpetsalive.org/adopt/dogs/apa-a-56615",
            "image": "https://www.austinpetsalive.org/assets/animals/_largeThumb/20190606003943.jpeg"
        }
    }

    axios.post('https://codubee-projects-api.herokuapp.com/animal/addAnimal',body)
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
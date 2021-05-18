import React from 'react';
import '../styles/MPbuttons.css';
import AnimalImage from '../components/AnimalImage'
import { Collapse, Container } from 'reactstrap';
import ShowMatches from '../components/ShowMatches'
import '../styles/MatchPage.css'
import AnimalDescription from '../components/AnimalDescription'
import axios from 'axios'

class MatchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            isOpen: false,
            petDescription: {
                "name": "Ruff",
                "type": "Dog",
                "sex": "Female",
                "shelter_name": "Shelter",
                "adoption_url": "example.com",
                "image": "/images/dog1.jpg"
            }
        }
        this.setIsOpen = this.setIsOpen.bind(this)
        this.addAnimal = this.addAnimal.bind(this)
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
    }

    addAnimal() {
        console.log("addAnimal")
        const req = {
            "id":1,
            "record": this.state.petDescription
        }

        axios.post("/addAnimal", req)
        .then((response) => {
            console.log(response.data)
        })
        .catch(function (error) { 
            //handle error and send back error message
            console.log(error);
        })
    }

    render() {
        return (
            <div id="matchPage">
                <AnimalImage image={this.state.petDescription.image} altText="chow chow" />
                <div>
                    <AnimalDescription petDescription={this.state.petDescription}/>
                </div>
                <div className="buttonGroup">
                    <button className="mp-button" id="green" onClick={this.addAnimal} >YES</button>
                    <button className="mp-button" id="red">NO</button>
                </div>
                <div className="toggleButton">
                    <button onClick={this.setIsOpen} className="mp-button" id="blue">Show Matches</button>
                    <Collapse isOpen={this.state.isOpen}>
                        <Container>
                            <ShowMatches />
                        </Container>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default MatchPage;

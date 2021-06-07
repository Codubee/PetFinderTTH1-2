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
        this.state = { isOpen: false, data: {},id:0,matches:[]}
        this.setIsOpen = this.setIsOpen.bind(this)
        this.addAnimal = this.addAnimal.bind(this)
        this.getAnimalDescription = this.getAnimalDescription.bind(this)
        this.getUserId = this.getUserId.bind(this)
        this.getMatches = this.getMatches.bind(this)
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
    }

    componentDidMount() {
        this.getAnimalDescription();
        this.setState({id:this.getUserId()})

    }
  
    addAnimal() {
        const req = {
            "id":this.state.id,
            "record": this.state.data
        }

        axios.post("/addAnimal", req)
        .then((response) => {
            this.getAnimalDescription()
            this.getMatches()
        })
        .catch(function (error) { 
            //handle error and send back error message
            console.log(error);
        })
    }

    getAnimalDescription(){
        axios.get("/getAnimalDescription")
        .then((response) => {
            this.setState({
                data: response.data
            })
        })
        .catch(err => console.error(err));
    }
    getMatches(){
        axios.get("/getMatches?id="+this.state.id)
        .then((response) => {
            this.setState({
                matches: response.data
            })
        })
        .catch(err => console.error(err));
    }

    getUserId(){
        return Math.floor(Math.random() * 100) + 1 
    }

    render() {
        return (
            <div id="matchPage">
                <AnimalImage image={this.state.data.image} altText="chow chow" />
                <div>
                    <AnimalDescription data={this.state.data}/>

                </div>
                <div className="buttonGroup">
                    <button className="mp-button" id="green" onClick={this.addAnimal} >YES</button>
                    <button className="mp-button" onClick={this.getAnimalDescription} id="red">NO</button>
                </div>
                <div className="toggleButton">
                    <button onClick={this.setIsOpen} className="mp-button" id="blue">Show Matches</button>
                    <Collapse isOpen={this.state.isOpen}>
                        <Container>
                            <ShowMatches matches={this.state.matches}/>
                        </Container>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default MatchPage;

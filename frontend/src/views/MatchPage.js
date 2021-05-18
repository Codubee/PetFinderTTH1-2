import React, { useState } from 'react';
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
        this.state = { isOpen: false, data: {}}
        this.setIsOpen = this.setIsOpen.bind(this)
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
    }

    componentDidMount() {
        axios.get("/getAnimalDescription")
            .then((response) => {
                console.log(response.data);
                this.setState({
                    data: response.data
                })
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div id="matchPage">
                <AnimalImage image={this.state.data.image} altText="chow chow" />
                <div>
                    <AnimalDescription data={this.state.data}/>
                </div>
                <div className="buttonGroup">
                    <button className="mp-button" id="green">YES</button>
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

import React, { useState } from 'react';
import '../styles/MPbuttons.css';
import AnimalImage from '../components/AnimalImage'
import { Collapse, Container } from 'reactstrap';
import ShowMatches from '../components/ShowMatches'
import '../styles/MatchPage.css'
import AnimalDescription from '../components/AnimalDescription'

class MatchPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOpen: false }
        this.setIsOpen = this.setIsOpen.bind(this)
    }

    setIsOpen() {
        var open = !this.state.isOpen;
        this.setState({ isOpen: open })
    }
    render() {


        return (
            <div id="matchPage">
                <AnimalImage image={'/images/dog1.jpg'} altText="chow chow" />
                <div>
                    <AnimalDescription />
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

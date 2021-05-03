import React, { useState } from 'react';
import '../styles/MPbuttons.css';
import AnimalImage from '../components/AnimalImage'
import { Collapse, Container } from 'reactstrap';
import ShowMatches from '../components/ShowMatches'
import '../styles/MatchPage.css'
import AnimalDescription from '../components/AnimalDescription'

function MatchPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
                <button onClick={toggle} className="mp-button" id="blue">Show Matches</button>
                <Collapse isOpen={isOpen}>
                    <Container>
                        <ShowMatches />
                    </Container>
                </Collapse>
            </div>
        </div>
    )
}

export default MatchPage;

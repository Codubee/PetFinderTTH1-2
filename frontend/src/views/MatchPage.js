import React, {useState} from 'react';
import '../styles/MPbuttons.css';
import AnimalImage from '../components/AnimalImage'
import { Collapse, Button, CardBody, Card } from 'reactstrap';


function MatchPage(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div id="matchPage">
            <h1>MatchPage</h1>
            <AnimalImage image={'/images/dog1.jpg'} altText={"chow chow"}/>
            <div class="buttonGroup">
                <button class="mp-button" id="green">YES</button>
                <button class="mp-button" id="red">NO</button>
            </div>
            <div class="toggleButton">
            <button color="primary" onClick={toggle} class="mp-button" id="blue">Show Matches</button>
            <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                Match descriptions
                </CardBody>
                </Card>
            </Collapse>
            </div>
        </div>
    )
}

export default MatchPage;

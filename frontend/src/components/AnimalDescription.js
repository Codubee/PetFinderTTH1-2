import '../styles/AnimalDescription.css';
import React from 'react';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row, Col
  } from 'reactstrap';
/*I think a card or a table without the borders for how the description should be displayed*/

const Description = {
    "name": "Ruff",
    "type": "Dog",
    "sex": "Female",
    "shelter_name": "Shelter",
    "adoption_url": "example.com"
};

function AnimalDescription()
{
    return
    (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Description.name</CardTitle>
                    <CardSubtitle>Description.type, Description.sex</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default AnimalDescription;
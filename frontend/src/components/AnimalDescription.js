import '../styles/AnimalDescription.css';
import React from 'react';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Row, Col
  } from 'reactstrap';

const Description = {
    "name": "Ruff",
    "type": "Dog",
    "sex": "Female",
    "shelter_name": "Shelter",
    "adoption_url": "example.com"
};

function AnimalDescription()
{
    return(
        <div class = "cardSize">
            <Card>
                <CardBody class = "cardDecoration">
                    <CardText></CardText>
                    <CardTitle>{Description.name}</CardTitle>
                    <CardSubtitle>{Description.type}, {Description.sex}</CardSubtitle>
                    <CardText></CardText>
                    <CardText>{Description.name} lives at {Description.shelter_name}.</CardText>
                    <CardText>Adopt: {Description.adoption_url}</CardText>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default AnimalDescription;
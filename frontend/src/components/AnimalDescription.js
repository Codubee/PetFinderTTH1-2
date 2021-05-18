import '../styles/AnimalDescription.css';
import React from 'react';
import {
    Card, CardTitle, CardText,
    CardSubtitle, CardBody} from 'reactstrap';

function AnimalDescription(props)
{
    return(
        <div class = "cardSize">
            <Card>
                <CardBody class = "cardDecoration">
                    <CardText></CardText>
                    <CardTitle>{props.petDescription.name}</CardTitle>
                    <CardSubtitle>{props.petDescription.type}, {props.petDescription.sex}</CardSubtitle>
                    <CardText></CardText>
                    <CardText>{props.petDescription.name} lives at {props.petDescription.shelter_name}.</CardText>
                    <CardText>Adopt: {props.petDescription.adoption_url}</CardText>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default AnimalDescription;
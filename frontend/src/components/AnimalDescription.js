import '../styles/AnimalDescription.css';
import React from 'react';
import {
    Card, CardTitle, CardText,
    CardSubtitle, CardBody} from 'reactstrap';

function AnimalDescription(props)
{
    if(Object.keys(props.data)){
        return(
            <div class = "cardSize">
                <Card>
                    <CardBody class = "cardDecoration">
                        <CardText></CardText>
                        <CardTitle>{props.data.name}</CardTitle>
                        <CardSubtitle>{props.data.type}, {props.data.sex}</CardSubtitle>
                        <CardText></CardText>
                        <CardText>{props.data.name} lives at {props.data.shelter_name}.</CardText>
                        <CardText><a href={props.data.adoption_url}>Adopt Me</a></CardText>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else{
        return(<></>)
    }
  
}

export default AnimalDescription;
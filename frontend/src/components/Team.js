import React from 'react';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import '../styles/Team.css';
import data from '../jsonData/TeamData.json'

const cardStyle = {
  backgroundColor: '#E4A58F',
  borderWidth: 'thick',
  borderColor: '#333',
}

function Team() {
  return (
    <div id="team">
      <Row>
        {data.map((person, index) => (
          <Col sm="4">
            <div key={index}>
              <Card body inverse style={cardStyle}>
                <CardImg top width="100%" src={person.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h1">{person.name}</CardTitle>
                  <CardSubtitle tag="h4">Major:</CardSubtitle>
                  <CardText tag="h5">{person.major}</CardText>
                  <CardSubtitle tag="h4">School:</CardSubtitle>
                  <CardText tag="h5">{person.school}</CardText>
                  <CardSubtitle tag="h4">Year:</CardSubtitle>
                  <CardText tag="h5">{person.year}</CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
        ))}

      </Row>
    </div>

  );
};

export default Team;

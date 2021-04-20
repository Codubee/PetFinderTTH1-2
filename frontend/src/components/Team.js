import React from 'react';
import {
  Card, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import '../styles/Team.css';
import data from '../jsonData/TeamData.json'

function Team() {
  return (
    <div id="team">
      <Row className="justify-content-sm-center">
        {data.map((person, index) => (
          <Col sm="4">
            <div key={index}>
              <Card body inverse id="cardStyle">
                <CardImg top width="100%" src={person.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h2">{person.name}</CardTitle>
                  <CardSubtitle tag="h4">Major:</CardSubtitle>
                  <CardText tag="h5">{person.major}</CardText>
                  <CardSubtitle tag="h4">School:</CardSubtitle>
                  <CardText tag="h5">{person.school}</CardText>
                  <CardSubtitle tag="h4">Year:</CardSubtitle>
                  <CardText tag="h5">{person.year}</CardText>
                  <div className="btn-group">
                    <a href={person.linkedIn} rel="noreferrer" target="_blank" className="button">LinkedIn</a>
                    <a href={person.gitHub} rel="noreferrer" target="_blank" className="button">GitHub</a>
                  </div>
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

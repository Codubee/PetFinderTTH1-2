import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import '../styles/Team.css';
import imgAQ from '../images/areeba.jpg';
import imgAT from '../images/abigail.jpg';
import imgPB from '../images/palak.jpg';
import imgRA from '../images/renee.jpg';
import imgRW from '../images/rosie.jpg';

const cardStyle = {
  backgroundColor: '#E4A58F',
  borderWidth: 'thick',
  borderColor: '#333',
}

function Team(){
  return (
    <div id="team">
      <Row>
        <CardDeck>
          <Col sm="4">
            <Card body inverse style={cardStyle}>
              <CardImg top width="100%" src={imgAT} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h2">ABIGAIL THOMAS</CardTitle>
                <CardSubtitle tag="h4">Major:</CardSubtitle>
                <CardText tag="h5">Computer Science</CardText>
                <CardSubtitle tag="h4">School:</CardSubtitle>
                <CardText tag="h5">The University of Texas at Dallas</CardText>
                <CardSubtitle tag="h4">Year:</CardSubtitle>
                <CardText tag="h5">Freshman (2020-2024)</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            <Card body inverse style={cardStyle}>
              <CardImg top width="100%" src={imgAQ} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h2">AREEBA QAZI</CardTitle>
                <CardSubtitle tag="h4">Major:</CardSubtitle>
                <CardText tag="h5">Biomedical Engineering</CardText>
                <CardSubtitle tag="h4">School:</CardSubtitle>
                <CardText tag="h5">The University of Texas at Dallas</CardText>
                <CardSubtitle tag="h4">Year:</CardSubtitle>
                <CardText tag="h5">Freshman (2020-2024)</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            <Card body inverse style={cardStyle}>
              <CardImg top width="100%" src={imgPB} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h2">PALAK BHARGAVA</CardTitle>
                <CardSubtitle tag="h4">Major:</CardSubtitle>
                <CardText tag="h5">Computer Science</CardText>
                <CardSubtitle tag="h4">School:</CardSubtitle>
                <CardText tag="h5">The University of Texas at Dallas</CardText>
                <CardSubtitle tag="h4">Year:</CardSubtitle>
                <CardText tag="h5">Freshman (2020-2024)</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            <Card body inverse style={cardStyle}>
              <CardImg top width="100%" src={imgRA} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h2">RENEE AL-TABATABAIE</CardTitle>
                <CardSubtitle tag="h4">Major:</CardSubtitle>
                <CardText tag="h5">Software Engineering</CardText>
                <CardSubtitle tag="h4">School:</CardSubtitle>
                <CardText tag="h5">The University of Texas at Dallas</CardText>
                <CardSubtitle tag="h4">Year:</CardSubtitle>
                <CardText tag="h5">Freshman (2020-2024)</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            <Card body inverse style={cardStyle}>
              <CardImg top width="100%" src={imgRW} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h2">ROSIE WANG</CardTitle>
                <CardSubtitle tag="h4">Major:</CardSubtitle>
                <CardText tag="h5">Software Engineering</CardText>
                <CardSubtitle tag="h4">School:</CardSubtitle>
                <CardText tag="h5">The University of Texas at Dallas</CardText>
                <CardSubtitle tag="h4">Year:</CardSubtitle>
                <CardText tag="h5">Freshman (2020-2024)</CardText>
              </CardBody>
            </Card>
          </Col>
        </CardDeck>
      </Row>

    </div>

  );
};

export default Team;

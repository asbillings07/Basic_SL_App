import React, { Component } from 'react';
import axios from 'axios';
import Config from '../Config'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


export default class People extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    this.goGetPeople();
  }

  goGetPeople = async () => {

    const res = await axios.get(`${Config.apiBaseURL}`)
    this.setState({
      people: res.data.data
    })
    console.log(this.state.data)
  };

  showPeople = () => {

    const { people } = this.state

    people.map(person => (
      <Card style={{ width: '18rem' }} key={person.id}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ))

  }


  render() {
    return (
      <Container>
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>
    );
  }
}

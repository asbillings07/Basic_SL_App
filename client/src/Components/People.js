import React, { Component } from 'react';
import axios from 'axios';
import Config from '../Config';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import styled from 'styled-components';

const People = ({ people }) => {
  const showPeople = () => {
    return people.map(person => (
      <Col sm={4} key={person.id}>
        <StyledCard>
          <Card.Body>
            <Card.Title>{person.display_name}</Card.Title>
            <Card.Text>title: {person.title}</Card.Text>
            <Card.Text>email: {person.email_address}</Card.Text>
            <Card.Text>city: {person.city}</Card.Text>
            <Card.Text>state: {person.state}</Card.Text>
            <Card.Text>phone: {person.phone}</Card.Text>
            <Card.Text>
              company website: {person.person_company_website}
            </Card.Text>
          </Card.Body>
        </StyledCard>
      </Col>
    ));
  };

  return (
    <Container>
      <Row>
        <CardGroup>{showPeople()}</CardGroup>
      </Row>
    </Container>
  );
};

export default People;

const StyledCard = styled(Card)`
  width: '22rem';
  margin-top: 3px;
  &:hover {
    background: #53a7ea;
  }
`;

import React from 'react';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import styled from 'styled-components';

const People = ({ people }) => {
  const showPeople = () => {
    return people.map(person => (
      <Col sm={4} key={person.id}>
        <StyledCard>
          <Card.Body>
            <StyledTitle>{person.display_name}</StyledTitle>
            <Card.Text>
              <strong>title:</strong> {person.title}
            </Card.Text>
            <Card.Text>
              <strong>email: </strong>
              {person.email_address}
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
  margin-top: 20px;
  &:hover {
    background: #e2efff;
    transition: ease-in-out 0.5s;
  }
  transition: ease-in-out 0.5s;
`;

const StyledTitle = styled(Card.Title)`
  color: #057aff;
`;

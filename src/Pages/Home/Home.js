import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddCalorie from "./AddCalorie";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <AddCalorie />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

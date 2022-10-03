import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UseAuth from "../../Context/UseAuth";
import AddCalorie from "./AddCalorie";

const Home = () => {
  const user = UseAuth();
  const email = user?.user?.email;
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

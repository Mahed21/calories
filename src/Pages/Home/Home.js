import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddCalorie from "./AddCalorie";

const Home = () => {
  const { user } = useAuth0();
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <h5 className="text-center mt-5">Hello {user?.name}</h5>
          <AddCalorie />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

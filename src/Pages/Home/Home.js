import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddCalorie from "./AddCalorie";
import RecentCalories from "./RecentCalories";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <h5>Add new calorie intake</h5>
          <AddCalorie />
        </Col>
        <Col xs={12} lg={12}>
          <h5>Recent calorie intakes</h5>
          <RecentCalories />
          <div className="d-flex justify-content-end">
            <Link to="/totalCalorie" type="button" class="btn btn-danger">
              View All
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

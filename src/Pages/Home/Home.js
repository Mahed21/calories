import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import AddCalorie from "./AddCalorie";
import RecentCalories from "./RecentCalories";

const Home = () => {
  const user = UseAuth();
  const email = user?.user?.email;
  return (
    <Container fluid>
      <Row>
        <Col xs={12} lg={12}>
          <AddCalorie />
        </Col>
        <Col xs={12} lg={12}>
          {/* <h3 className="text-center mt-5">Recent calorie intakes</h3> */}
          {/* <RecentCalories />
          {email ? (
            <div className="d-flex justify-content-end">
              <Link to="/totalCalorie" type="button" class="btn btn-danger">
                View All
              </Link>
            </div>
          ) : (
            <></>
          )} */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

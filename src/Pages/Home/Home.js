import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CalorieCard from '../Home/CalorieCard';

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} lg={6}>
                    <h5>Add new calorie intake</h5>
                </Col>
                <Col xs={12} lg={6}>
                    <h5>Recent calorie intakes</h5>
                    <CalorieCard />
                    <CalorieCard />
                </Col>
            </Row>
        </Container >
    );
};

export default Home;
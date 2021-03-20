import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeRide from '../../fakeRide/fakeRide';
import Header from '../Header/Header';
import './BookingPage.css'
import map from '../../images/Map.png'
import { Link } from 'react-router-dom';

const BookingPage = () => {

    return (
        <Container>
            <Header></Header>
            <Row>
                <Col className="col-md-5">
                    <Form className=" booking-form">
                        <Form.Group >
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control placeholder="Enter Location" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Pick to</Form.Label>
                            <Form.Control placeholder="Enter Location" />
                        </Form.Group>
                        <br />
                        <Link to="/ticketPage">
                        <Button variant="danger" block> Search </Button>
                        </Link>
                    </Form>
                </Col>
            
                <Col className="col-md-5 map">
                    <img src={map} alt=""/>
                </Col>
            </Row>

        </Container>
    );
};

export default BookingPage;
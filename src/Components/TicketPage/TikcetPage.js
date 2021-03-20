import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import map from '../../images/Map.png'
import Header from '../Header/Header';
import './TicketPage.css';
import peopleIcon from "../../images/peopleicon.png"

const TikcetPage = () => {
    return (
        <div>
            <Container>
            <Header></Header>
            <Row>
                <Col className="col-md-5">
                    <div className="destination">
                        <h5>Mirpur</h5>
                        <p>to</p>
                        <h5>Gulshan-1</h5>
                    </div>
                    <div className="ticket d-flex justify-content-around">
                        <div className="peopleIcon">
                        <img src={peopleIcon} alt=""/>
                        <h3>4</h3>
                        </div>
                        <h3>$50</h3>
                    </div>
                    <div className="ticket d-flex justify-content-around">
                        <div className="peopleIcon">
                        <img src={peopleIcon} alt=""/>
                        <h3>2</h3>
                        </div>
                        <h3>$70</h3>
                    </div>
                    
                </Col>
            
                <Col className="col-md-5 map">
                    <img src={map} alt=""/>
                </Col>
            </Row>

        </Container>
        </div>
    );
};

export default TikcetPage;
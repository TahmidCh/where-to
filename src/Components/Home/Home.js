import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';
import fakeRide from '../../fakeRide/fakeRide'
import SingleRide from '../SingleRide/SingleRide';


const Home = () => {
    
    const [content, setContent]= useState(fakeRide[0]);
    const handleRideContent =(id)=>{
        setContent(fakeRide[id]);
    }
    // console.log(content);
    return (
        <div className="App">
            <Container>
                <Header></Header>
                <Row className="ride-mapping"> 
                    
                    {
                        fakeRide.map(ride => <SingleRide ride={ride} key={ride.id} handleRideContent={handleRideContent}></SingleRide>)
                    }
                   
                </Row>
            </Container>
        </div >
    );
};

export default Home;
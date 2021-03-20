import React from 'react';
import { Link } from 'react-router-dom';
import './SingleRide.css'

const SingleRide = (props) => {
    console.log(props.ride);
    const { img, ride_name,id,icon } = props.ride;
    return (
        
            <div className="col-xl-4 col-lg-4 col-md-4 my-5 single-ride">
                <Link to={`/bookingPage/${id}`} onClick={() => { props.handleRideContent(props.id) }}>
                    <img src={img} alt="" />
                    <h5 className="place-name ml-4">{ride_name}</h5>
                </Link>
            </div>
        
    );
};

export default SingleRide;
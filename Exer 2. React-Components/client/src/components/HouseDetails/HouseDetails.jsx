import React from 'react';
import './HouseDetails.css';

const HouseDetails = (props) => (
    <div className="HouseDetails">
        <h2>{props.type}</h2>
        <div className="img">
            <img alt="house" src={props.imageUrl} />
        </div>
        <p>Description: {props.description}</p>
        <p>Price: {props.price}$</p>
    </div>
);

export default HouseDetails;

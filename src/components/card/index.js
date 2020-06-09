import React from 'react';

const Card = ({cardState}) => {
    const {name,location,country,details} =cardState;
    return (
        <div className="cards">
                <span className="mb-10 card__city-name">{name}</span>
                <span className="mb-10">Country: {country}</span>
                <span className="mb-10">Likes: {details ? details.likes:0}</span>
                <span className="mb-10">Latitude: {location.lat}</span>
                <span className="mb-10">Longitude: {location.lng}</span>
        </div>
    );
};

export default Card;

import React from 'react';
import './places.css';

import Place from './Place';

const Places = (props) => {
    const { placesTolocation } = props;
    const ShowAllPlaces = placesTolocation.map((place) => 
        <Place 
            key={place.placeId}
            thumb={place.placeImage}
            name={place.placeName}
            info={place.info}
        />
    );
    return (
        <div className="places">
            <div className="grid-x grid-margin-x">
                {ShowAllPlaces}
            </div>
        </div>
    );
};

export default Places;
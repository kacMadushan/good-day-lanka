import React from 'react';
import './locations.css';

import Location from './Location';

const Locations = (props) => {
    const { results } = props;
    const listResult = results.map((result) => 
        <Location 
            key={result.id}
            locationName={result.locationName}
            locationInfo={result.locationInfo}
            placesTolocation={result.places}
        /> 
    );
    return (
        <div className="grid-x">
            {listResult}
        </div>
    );
};

export default Locations;
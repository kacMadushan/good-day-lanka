import React from 'react';
import Places from './Places/Places'

const Location = (props) => {
    const { locationName, locationInfo, placesTolocation } = props;

    return (
        <div className="cell small-12 medium-8 medium-offset-2 large-8 large-offset-2">
            <div className="location">
                <h2 className="location-name">{locationName}</h2>
                <div className="border-title"></div>
                <p className="location-info">{locationInfo}</p>
            </div>
            <Places 
                placesTolocation={placesTolocation}
            />
        </div>
    );
}

export default Location;
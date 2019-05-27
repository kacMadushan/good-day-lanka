import React from 'react';

const Place = (props) => {
    const { thumb, name, info } = props;
    return (
        <div className="cell small-auto medium-6 large-4">
            <div className="place">
                <img className="thumb" src={thumb} alt={name} />
                <div className="place-info">
                    <h3 className="place-name">{name}</h3>
                    <p className="place-info">{info}</p>
                </div>
            </div>
        </div>
    );
};

export default Place;
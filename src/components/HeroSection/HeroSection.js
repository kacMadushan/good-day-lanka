import React from 'react';
import './hero-section.css';

import Header from './Header';

const HeroSection = (props) => {
    const { appTitle, appSubTitle, searchName, handleChange, handleOnClick, errorMessage } = props;
    return (
        <div className="hero-section">
            <div className="grid-container">
                <div className="grid-x">
                    <Header 
                        appTitle={appTitle}
                        appSubTitle={appSubTitle}
                        searchName={searchName}
                        handleChange={handleChange}
                        handleOnClick={handleOnClick}
                        errorMessage={errorMessage}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
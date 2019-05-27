import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
    const { appTitle, appSubTitle, searchName, handleChange, handleOnClick, errorMessage } = props;
    return (
        <div className="cell small-12 medium-6 medium-offset-3 large-6 large-offset-3">
            <div className="header">
                <h1 className="app-title">{appTitle}</h1>
                <h3 className="app-subtitle">{appSubTitle}</h3>
                <SearchBar 
                    searchName={searchName}
                    handleChange={handleChange}
                    handleOnClick={handleOnClick}
                />
                {errorMessage && (<p className="error-message">{errorMessage}</p>)}
            </div>
        </div>
    );
};

export default Header;
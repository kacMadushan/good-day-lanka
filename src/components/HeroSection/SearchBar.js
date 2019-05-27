import React from 'react';

const SearchBar = (props) => {
    const { searchName, handleChange, handleOnClick } = props;
    const placeholder = 'Where to? Find things to see and do';
    return (
        <div className="search-bar">
            <div className="grid-x grid-padding-x">
                <div className="small-auto medium-8 cell">
                    <input 
                        type="text" 
                        className="custom-input"
                        placeholder={placeholder} 
                        value={searchName}
                        onChange={handleChange}
                    />
                </div>
                <div className="small-auto medium-4 cell">
                    <button 
                        className="button btn-type-default"
                        onClick={handleOnClick}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
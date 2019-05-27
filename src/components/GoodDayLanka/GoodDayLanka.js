import React, { Component, Fragment } from 'react';
import locations from '../../data/locations';
import HeroSection from '../HeroSection/HeroSection';
import Locations from '../Locations/Locations';

class GoodDayLanka extends Component {
    state = {
        locations: locations,
        searchValue: '',
        searchResult: [],
        error: undefined
    }

    handleOnChange = (e) => {
        this.setState({ searchValue: e.target.value })
    }

    handleEnteredInputValue = (passInput) => {
        if(!passInput) {
            return 'Please enter valid location to continue'
        }
        const findByEnteredValue = this.state.locations.filter((location) => {
            return location.locationName.toLowerCase().indexOf(passInput.toLowerCase()) !== -1;
        });

        this.setState((prevState) => ({ searchResult: prevState.searchResult.concat(findByEnteredValue)}));
    }

    handleSearchValue = () => {
        const searchInput = this.state.searchValue.trim();
        const error = this.handleEnteredInputValue(searchInput);

        this.setState({ error });
        if(!error) {
            this.setState({ searchValue: '' });
        }
    }

    render() {
        const headerOptions = {
            appTitle: 'Good Day Lanka',
            appSubTitle: 'Find travel ideas for planning your holiday to Sri Lanka',
            searchName: this.state.searchValue,
            handleChange: this.handleOnChange,
            handleOnClick: this.handleSearchValue,
            errorMessage: this.state.error
        }
        return (
            <Fragment>
                <HeroSection {...headerOptions} />
                <div className="grid-container">
                    <Locations 
                        results={this.state.searchResult}
                    />
                </div>
            </Fragment>
        );
    }
}

export default GoodDayLanka;
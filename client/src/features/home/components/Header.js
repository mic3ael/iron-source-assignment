import React, { Component } from "react";
import PropTypes from 'prop-types';
import Select from 'react-select';

const DEFAULT_SORT_OPTION = { value: 'stars', label: 'stars' };

const options = [
    DEFAULT_SORT_OPTION,
    { value: 'forks', label: 'forks' },
    { value: 'updated', label: 'updated' }
];

class Header extends Component {
    state = {
        searchBy: this.props.searchBy || "",
        sortBy: options.find((option) => option.value === this.props.sortBy) || DEFAULT_SORT_OPTION
    };
    handleOnSearchChange = ({ target: { value } }) => {
        this.setState({ searchBy: value });
    };
    handleOnSortChange = (sortBy) => {
        this.setState({ sortBy });
    };
    handleOnSearch = (event) => {
        event.preventDefault();
        const { searchBy, sortBy } = this.state;
        this.props.onSearch(searchBy, sortBy.value);
    };
    render() {
        const { searchBy, sortBy } = this.state;

        return (
            <div className="header__container">
                <div className="search__container">
                    <label>Search:</label>
                    <div>
                        <input value={searchBy} onChange={this.handleOnSearchChange} />
                    </div>
                </div>
                <div className="sort__container">
                    <label>Sort By:</label>
                    <Select
                        className="selector"
                        value={sortBy}
                        onChange={this.handleOnSortChange}
                        options={options}
                    />
                </div>
                <button onClick={this.handleOnSearch}>Search</button>
            </div>
        );
    }
};

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
    searchBy: PropTypes.string,
    sortBy: PropTypes.string,
};

export default Header;
import React from 'react';

function SearchBar(props) {
    return (
        <div className="search-bar p-4 w-1/3 mx-auto">
        <input
            type="text"
            placeholder="Search for a song or artist..."
            value={props.searchTerm}
            onChange={props.handleSearchTermChange}
            className="w-full p-2 bg-indigo-100 rounded-xl focus:outline-none focus:ring-4 duration-200 focus:bg-white focus:ring-indigo-300 text-center"
        />
        </div>
    );
    }

export default SearchBar;
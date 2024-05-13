import React from 'react';

function SearchBar(props) {
    return (
        <div className="search-bar p-4 w-1/3 mx-auto">
        <input
            type="text"
            placeholder="Search for a song or artist..."
            value={props.searchTerm}
            onChange={props.handleSearchTermChange}
            className="w-full p-2 border border-gray-300 rounded text-center"
        />
        </div>
    );
    }

export default SearchBar;
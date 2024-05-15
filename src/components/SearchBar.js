import React from 'react';

function SearchBar({ searchTerm, handleSearchTermChange }) {
    return (
        <div className="search-bar p-4 md:w-1/2 lg:w-1/3 w-2/3 mx-auto">
            <input
                type="text"
                placeholder="Search for a song or artist..."
                value={searchTerm}
                onChange={handleSearchTermChange}
                className="w-full p-2 bg-indigo-100 rounded-xl focus:outline-none focus:ring-4 duration-200 focus:bg-white focus:ring-indigo-300 text-center"
            />
        </div>
    );
}

export default SearchBar;
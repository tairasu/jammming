import React from 'react';

function SearchResults(props) {
    //fake data
    const tracks = [
        {
            title: 'Song 1',
            artist: 'Artist 1',
        },
        {
            title: 'Song 2',
            artist: 'Artist 2',
        },
        {
            title: 'Song 3',
            artist: 'Artist 3',
        },
    ];

    return (
        <div className="search-results p-4 col-span-6">
            <h2 className="text-lg font-bold">Results</h2>
            <div className="flex-col">
                {tracks.map((track) => (
                    <div key={track.title} className="track p-4 border border-gray-300 rounded flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-bold">{track.title}</h3>
                            <p className="text-sm">{track.artist}</p>
                        </div>
                        <button
                            onClick={() => props.onAdd(track)}
                            className="p-2 bg-green-500 text-white rounded"
                        >
                            Add
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
import React from 'react';

function Playlist(props) {

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
        <div className="flex-col justify-between col-span-6">
            <div className="playlist p-4">
                <h2 className="text-lg font-bold">Playlist</h2>
                <div className="flex-col">
                    {tracks.map((track) => (
                        <div key={track.title} className="track p-4 border border-gray-300 rounded flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold">{track.title}</h3>
                                <p className="text-sm">{track.artist}</p>
                            </div>
                            <button
                                onClick={() => props.onRemove(track)}
                                className="p-2 bg-red-500 text-white rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="add-to-playlist p-4">
                <button
                    className="p-2 bg-green-500 text-white rounded w-full"
                >
                    Save to Spotify
                </button>
            </div>
        </div>
    );
}

export default Playlist;
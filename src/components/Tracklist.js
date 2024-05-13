import React from 'react';
import Track from './Track';

function Tracklist(props) {
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
        <div className="tracklist p-4 col-span-6">
            <h2 className="text-lg font-bold">Results</h2>
            <div className="flex-col">
                {tracks.map((track) => (
                    <Track
                        key={track.title}
                        track={track}
                        onAdd={props.onAdd}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tracklist;
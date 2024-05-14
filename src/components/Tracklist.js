import React from 'react';
import Track from './Track';

function Tracklist(props) {
    return (
        <div className="tracklist p-4 col-span-6 bg-indigo-900 h-screen rounded-xl shadow-inner-xl m-2">
            <h2 className="text-lg text-indigo-50 p-4 font-bold mb-4">Tracklist</h2>
            <div className="flex-col">
                {props.tracks.map((track) => (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                    />
                ))}
            </div>
        </div>
    );
}

export default Tracklist;
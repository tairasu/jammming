import React from 'react';
import Track from './Track';

function Tracklist(props) {
    return (
        <div className="tracklist p-4 col-span-6">
            <h2 className="text-lg font-bold">Tracklist</h2>
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
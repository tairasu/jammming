import React from 'react';
import PlaylistItem from './PlaylistItem';

function Playlist(props) {
    return (
        <div className="playlist p-4 col-span-6">
            <h2 className="text-lg font-bold">Playlist</h2>
            <div className="flex-col">
                {props.tracks.map((track) => (
                    <PlaylistItem
                        track={track}
                        key={track.id}
                        onRemove={props.onRemove}
                    />
                ))}
            </div>
        </div>
    );
}

export default Playlist;
import React from 'react';
import PlaylistItem from './PlaylistItem';

function Playlist(props) {
    return (
        <div className="playlist p-4 col-span-6">
            <div className="flex">
                <h2 className="mx-auto text-lg font-bold text-indigo-50 p-4">Playlist</h2>
                <button
                    onClick={props.onClear}
                    className="bg-indigo-400 justify-end absolute right-4 text-indigo-50 p-2 rounded-lg"
                >
                    Clear Playlist
                </button>
            </div>

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
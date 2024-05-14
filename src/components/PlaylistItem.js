import React from 'react';

function PlaylistItem(props) {
    return (
        <div className="track p-4 border border-gray-300 rounded flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold">{props.track.name}</h3>
                <p className="text-sm">{props.track.artist}</p>
            </div>
            <button
                onClick={() => props.onRemove(props.track.id)}
                className="p-2 bg-red-500 text-white rounded"
            >
                Remove
            </button>
        </div>
    );
}

export default PlaylistItem;
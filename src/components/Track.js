import React from 'react';

function Track(props) {
    return (
        <div className="track p-4 border border-gray-300 rounded flex justify-between items-center">
            <div>
                <h3 className="text-lg font-bold">{props.track.name}</h3>
                <p className="text-sm">{props.track.artist}</p>
            </div>
            <button
                onClick={() => props.onAdd(props.track.id)}
                className="p-2 bg-blue-500 text-white rounded"
            >
                Add
            </button>
        </div>
    );
}

export default Track;
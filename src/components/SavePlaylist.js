import React from 'react';

function SavePlaylist(props) {
    return (
        <div className={`save-playlist fixed inset-0 bg-indigo-800 bg-opacity-90 z-30 flex justify-center items-center ${props.visible ? '' : "hidden"}`}>
            <div className="bg-indigo-900 p-4 rounded-xl shadow-xl">
                <h2 className="text-lg text-indigo-50 font-bold mb-4">Save Playlist</h2>
                <input
                    type="text"
                    placeholder="Enter playlist name..."
                    value={props.playlistName}
                    onChange={props.handlePlaylistNameChange}
                    className="w-full p-2 bg-indigo-100 mb-4 rounded-xl focus:outline-none focus:ring-4 duration-200 focus:bg-white focus:ring-indigo-300 text-center"
                />
                <div className="flex justify-between">
                    <button
                        onClick={props.onSave}
                        className="bg-indigo-400 text-indigo-50 p-2 rounded-lg"
                    >
                        Save
                    </button>
                    <button
                        onClick={props.onCancel}
                        className="bg-indigo-400 text-indigo-50 p-2 rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SavePlaylist;
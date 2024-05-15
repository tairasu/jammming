import React from 'react';
import PlaylistItem from './PlaylistItem';

function Playlist(props) {

    return (
        <div className="playlist p-4 lg:col-span-6 col-span-12 bg-indigo-900 rounded-xl shadow-inner-xl m-2">
            <div className="flex mb-4">
                <h2 className="mx-auto text-lg font-bold text-indigo-50 p-4">Playlist</h2>
                <div className="absolute right-2">
                    <button
                        onClick={props.onClear}
                        className="bg-indigo-400 active:translate-y-1 duration-75 absolute right-4 z-20 justify-end text-indigo-50 p-2 rounded-lg"
                    >
                        Clear Playlist
                    </button>
                    <div className="bg-black z-10 absolute right-4 translate-y-1 p-2 rounded-lg">Clear Playlist</div>
                </div>
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

            <div className={"flex justify-center" + (props.tracks.length === 0 ? " hidden" : "")}>
                <button
                    onClick={props.onSave}
                    className={"bg-indigo-400 active:translate-y-1 w-fit absolute duration-75 z-20 justify-end text-indigo-50 p-2 rounded-lg"}
                >
                    Save Playlist
                </button>
                <div className="bg-black z-10 w-fit  translate-y-1 p-2 rounded-lg">Save Playlist</div>
            </div>

        </div>
    );
}

export default Playlist;
import React from 'react';
import { useState } from 'react';


function PlaylistItem(props) {
    
    return (
        <div className="track w-full bg-indigo-600 shadow-md p-4 border border-indigo-100 rounded-lg flex justify-between items-center mb-4">
            <div className="w-full mx-4">
                <div className="flex justify-between">
                    <h3 className="text-lg text-indigo-50 font-bold">{props.track.name}</h3>
                    <p className="text-sm text-indigo-50">{props.track.artist}</p>
                </div>
                
                <p className="text-sm text-indigo-50">{props.track.album}</p>
            </div>
            <div className="relative">
               
                <button
                    onClick={() => props.onRemove(props.track.id)}
                    className="absolute duration-75 top-0 z-20 active:translate-y-1 left-0 p-2 bg-indigo-400 text-indigo-50 rounded-full"
                >
                                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="z-10 bg-black translate-y-1 rounded-full p-2">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </div>
            </div>
            
        </div>
    );
}

export default PlaylistItem;
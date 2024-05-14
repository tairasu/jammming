import React from 'react';
import { useState } from 'react';
import Button from './Button';



function Track(props) {
    return (
        <div className="track w-full bg-indigo-600 shadow-md p-4 border border-indigo-100 rounded-lg flex justify-between items-center mb-4">
            <div className="w-full mx-4">
                <div className="flex justify-between">
                    <h3 className="text-lg text-indigo-50 font-bold">{props.track.name}</h3>
                    <p className="text-sm text-indigo-50">{props.track.artist}</p>
                </div>
                
                <p className="text-sm text-indigo-50">{props.track.album}</p>
            </div>
            <Button
                onAdd={() => props.onAdd(props.track.id)}
                className="bg-indigo-400 text-indigo-50 p-2 rounded-full"
            />
        </div>
    );
}

export default Track;
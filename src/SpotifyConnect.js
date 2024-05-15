import React, { useEffect } from 'react';

// Get API key from api-key.json
const api = require('./api-key.json');
const client_id = api.api.key;
const client_secret = api.api.secret;

const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
};

const fetchSpotifyData = async (token, searchTerm, setData) => {
    if (!searchTerm) return;
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await response.json();
    const tracks = data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name
    }));
    setData(tracks);
};

function SpotifyConnect({ setData, searchTerm }) {
    useEffect(() => {
        if (!searchTerm) return;
        const fetchTokenAndData = async () => {
            const token = await getToken();
            await fetchSpotifyData(token, searchTerm, setData);
        };

        fetchTokenAndData();
    }, [searchTerm, setData]);

    return (
        <div className="spotify-connect p-4 w-1/3 mx-auto">
            <button
                className="w-full p-2 bg-indigo-100 rounded-xl focus:outline-none focus:ring-4 duration-200 focus:bg-white focus:ring-indigo-300 text-center"
            >
                Connect to Spotify
            </button>
        </div>
    );
}

export default SpotifyConnect;
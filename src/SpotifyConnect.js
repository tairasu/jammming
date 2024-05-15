import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const client_id = '232228ac8d0a404fb5a7cd760a7d6fb0';
const redirect_uri = 'https://tairasu-jammming.netlify.app/callback';

const SpotifyConnect = ({ setData, searchTerm }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) return;

    const getToken = async (code) => {
      const response = await fetch('/.netlify/functions/get-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      const data = await response.json();
      return data.access_token;
    };

    const fetchSpotifyData = async (token) => {
      const response = await fetch(`https://api.spotify.com/v1/search?type=track&limit=5&q=${searchTerm}`, {
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

    const fetchTokenAndData = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        const token = await getToken(code);
        await fetchSpotifyData(token);
      }
    };

    fetchTokenAndData();
  }, [searchTerm, setData]);

  const handleLogin = () => {
    const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
    window.location = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  };

  return (
    <div className="spotify-connect p-4 w-1/3 mx-auto">
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-indigo-100 rounded-xl focus:outline-none focus:ring-4 duration-200 focus:bg-white focus:ring-indigo-300 text-center"
      >
        Connect to Spotify
      </button>
    </div>
  );
};

export default SpotifyConnect;
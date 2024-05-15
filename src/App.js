import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import SavePlaylist from './components/SavePlaylist';
import SpotifyConnect from './SpotifyConnect';

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const addTrackToPlaylist = (track_id) => {
    const track = tracks.find(t => t.id === track_id);
    if (!playlist.includes(track)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeTrackFromPlaylist = (track_id) => {
    const updatedPlaylist = playlist.filter(t => t.id !== track_id);
    setPlaylist(updatedPlaylist);
  };

  const clearPlaylist = () => {
    setPlaylist([]);
  };

  const savePlaylist = () => {
    setOverlay(true);
  };

  const cancelOverlay = () => {
    setOverlay(false);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setError(null); // Clear error when user starts typing
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setError("Search term cannot be empty.");
      return;
    }
    setError(null);
    // Trigger data fetch in SpotifyConnect by updating searchTerm
  };

  return (
    <div className="App bg-indigo-800 h-max">
      <div className="flex-col">
        <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} onSearch={handleSearch} />
        {error && <div className="error-message text-red-500 text-center">{error}</div>}
        <SpotifyConnect setData={setTracks} searchTerm={debouncedSearchTerm} />
        <div className="grid grid-cols-12">
          <Tracklist tracks={tracks} onAdd={addTrackToPlaylist} />
          <Playlist tracks={playlist} onRemove={removeTrackFromPlaylist} onClear={clearPlaylist} onSave={savePlaylist} />
          <SavePlaylist visible={overlay} onCancel={cancelOverlay} />
        </div>
      </div>
    </div>
  );
}

export default App;
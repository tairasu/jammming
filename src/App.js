import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  const [playlistName, setPlaylistName] = useState("");

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

  const showOverlay = () => {
    setOverlay(true);
  };

  const cancelOverlay = () => {
    setOverlay(false);
  };

  const savePlaylist = () => {
    if (playlistName.trim() === "") {
      setError("Playlist name cannot be empty.");
      return;
    }
    console.log("Saving playlist:", { name: playlistName, tracks: playlist });
    setOverlay(false);
    setPlaylistName("");
    clearPlaylist();
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setError(null);
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setError("Search term cannot be empty.");
      return;
    }
    setError(null);
  };

  return (
    <Router>
      <div className="App bg-indigo-800 h-max">
        <div className="flex-col">
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} onSearch={handleSearch} />
                {error && <div className="error-message text-red-500 text-center">{error}</div>}
                <SpotifyConnect setData={setTracks} searchTerm={debouncedSearchTerm} />
                <div className="grid grid-cols-12">
                  <Tracklist tracks={tracks} onAdd={addTrackToPlaylist} />
                  <Playlist 
                    tracks={playlist} 
                    onRemove={removeTrackFromPlaylist} 
                    onClear={clearPlaylist} 
                    onSave={showOverlay} 
                  />
                  <SavePlaylist 
                    visible={overlay} 
                    onCancel={cancelOverlay} 
                    onSave={savePlaylist} 
                    playlistName={playlistName} 
                    handlePlaylistNameChange={handlePlaylistNameChange} 
                  />
                </div>
              </>
            } />
            <Route path="/callback" element={<SpotifyConnect setData={setTracks} searchTerm={debouncedSearchTerm} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
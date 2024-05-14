import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';
import { useState } from 'react';
import SavePlaylist from './components/SavePlaylist';

//fake data with name, artist, album, and an id
const tracks = [
  {
    name: 'Track 1',
    artist: 'Artist 1',
    album: 'Album 1',
    id: 1,
  },
  {
    name: 'Track 2',
    artist: 'Artist 2',
    album: 'Album 2',
    id: 2,
  },
  {
    name: 'Track 3',
    artist: 'Artist 3',
    album: 'Album 3',
    id: 3,
  },
  {
    name: 'Track 4',
    artist: 'Artist 4',
    album: 'Album 4',
    id: 4,
  },
  {
    name: 'Track 5',
    artist: 'Artist 5',
    album: 'Album 5',
    id: 5,
  },
];

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [overlay, setOverlay] = useState(false);

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
  }

  const savePlaylist = () => {
    setOverlay(true);
  }

  const cancelOverlay = () => {
    setOverlay(false);
  }

  return (
    <div className="App bg-indigo-800 h-max">
      <div className="flex-col">
        <SearchBar />
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

import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import Tracklist from './components/Tracklist';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App bg-violet-100 h-screen">
      <div className="flex-col">
        <SearchBar />
        <div className="grid grid-cols-12">
          <Tracklist />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;

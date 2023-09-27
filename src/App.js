import './App.css';
import SearchBar from './Components/SearchBar';
import UserGallery from './Components/UserGallery';

const appStyle = {
  'background-color': '#e6e6e6',
  'min-height': '100vh'
}

const searchBarStyle = {
  'width': '500px',
  'border-radius': '50px',
  'border': '2px solid black',
  'margin-top': '20px',
  'padding': '5px'
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <SearchBar searchBarStyle={searchBarStyle} />
      <UserGallery />
    </div>
  );
}

export default App;

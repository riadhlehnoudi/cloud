import './App.css';
import Forms from './components/forms';
import MapContainer from './components/MapContainer';

function App() {
  return (
    <div className="App">
<h1> Google Map Integration</h1>
<Forms/>
<MapContainer className="map"/>
    </div>
  );
}

export default App;

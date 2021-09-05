import { useState, useEffect } from 'react';
import './App.css';
import requestsGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs'


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    requestsGifs({keyword: 'Bart'}).then(setGifs)
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;

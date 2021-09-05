import { useState, useEffect } from 'react';
import './App.css';
import requestsGifs from './services/getGifs';
import Gif from './components/Gif'


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    requestsGifs({keyword: 'Bart'}).then(setGifs)
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({ id, title, url }) => {
            return <Gif id={id} title={title} url={url}/>
          })
        }
      </section>
    </div>
  );
}

export default App;

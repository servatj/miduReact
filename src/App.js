import { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'


function App() {
  const [ keyword, setKeyword ] = useState('cr7');
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword={keyword} />
      </section>
      <button onClick={() => setKeyword('messi')}>Change to real GOAT</button>
    </div>
  );
}

export default App;

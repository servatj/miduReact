import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Route } from 'wouter';


function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Show me the gif</h1>
        <a href="/gif/cr7">cr7</a>
        <a href="/gif/messi">Messi</a>
        <a href="/gif/neymar">Ney</a>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;

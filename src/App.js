import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Show me the gif</h1>
        <Link href="/gif/cr7">cr7</Link>
        <Link href="/gif/messi">Messi</Link>
        <Link href="/gif/neymar">Ney</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;

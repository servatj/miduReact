import './App.css';
import Home from './pages/Home'
import Detail from './pages/Detail'
import SearchResults from './pages/SearchResults'
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to=''>
          <img className="App-logo" alt="Giffy Logo" src='/logo192.png' />
        </Link>
        <Route
          component={Home}
          path="/"
        />
       <Route
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}

export default App;
